<script>
import SettingsGeneralItem from "$lib/SettingsGeneralItem.svelte";
import Toggle from "$lib/Toggle/Toggle.svelte";
import { db } from "$src/db.js";
import { liveQuery } from "dexie";
import { onMount } from "svelte";
import { NAMES, VOLUME_MULTIPLICATOR } from "$src/utils.js";
import InputRange from "$lib/InputRange.svelte";
import Kbd from "$lib/Kbd/Kbd.svelte";
import soundPath from "$assets/finished.ogg";

let settings;
let volume = 0;
let volumeDefault;
let showVolume = false;

const getSetting = (name) => $settings.find((setting) => setting.name === name);

const putSetting = (setting, value) => db[NAMES.dbs.general].put({ name: setting, value });

const handleVolumeChange = async () => {
	if ($settings) {
		putSetting(NAMES.settings.volume, volume);

		const sound = new Audio(soundPath);

		sound.volume = volume * VOLUME_MULTIPLICATOR;

		sound.play();
	}
};

const handleVolumeToggle = (e) => {
	putSetting(NAMES.settings.playSounds, e.detail.isChecked);
};

const formatVolume = () => (volume == 0 ? "0.0" : volume == 1 ? "1.0" : `${volume}`);

onMount(() => {
	settings = liveQuery(() => db[NAMES.dbs.general].toArray());
});

$: {
	$settings;

	if ($settings) {
		showVolume = getSetting(NAMES.settings.playSounds).value;

		if (volumeDefault == undefined) {
			volumeDefault = getSetting(NAMES.settings.volume).value;
			volume = volumeDefault;
		}
	}
}
</script>

<!--------markup-------->

<div class="wrap">
	{#if $settings?.length}
		<h2>General</h2>
		<div class="wrap-settings">
			<SettingsGeneralItem text={NAMES.settings.autoStart}>
				<Toggle
					isCheckedDefault={getSetting(NAMES.settings.autoStart).value}
					on:checkboxtoggle={(e) => putSetting(NAMES.settings.autoStart, e.detail.isChecked)}
				/>
			</SettingsGeneralItem>
			<SettingsGeneralItem text={NAMES.settings.playSounds}>
				<Toggle
					isCheckedDefault={getSetting(NAMES.settings.playSounds).value}
					on:checkboxtoggle={(e) => handleVolumeToggle(e)}
				/>
			</SettingsGeneralItem>
			{#if showVolume}
				<div class="volume">
					<div class="details">
						<span class="name">{NAMES.settings.volume}</span>
						<span class="value">{formatVolume(volume)}</span>
					</div>
					<InputRange
						bind:value={volume}
						min={0.0}
						max={1.0}
						step={0.1}
						on:change={handleVolumeChange}
					/>
				</div>
			{/if}
		</div>
		<div class="divider" />
		<h2>Keybinds</h2>
		<div class="wrap-settings">
			<SettingsGeneralItem text="Reset timer">
				<Kbd>A</Kbd>
			</SettingsGeneralItem>
			<SettingsGeneralItem text="Start / Stop timer">
				<Kbd>Space</Kbd>
			</SettingsGeneralItem>
			<SettingsGeneralItem text="Skip timer">
				<Kbd>D</Kbd>
			</SettingsGeneralItem>
		</div>
	{/if}
</div>

<!--------style-------->
<style lang="sass">
	@use 'src/vars'
	@use 'src/oc'

	.wrap
		height: 100%
		width: 100%
		display: flex
		flex-direction: column
		align-items: center
		padding: vars.$size-1 vars.$size-2 0 vars.$size-2
		h2
			font-size: vars.$fs-sm
			font-weight: 400
			letter-spacing: 0.4px
			margin-bottom: vars.$size-1
			color: vars.$c-text-dark
			cursor: default
		.divider
			border-top: vars.$border-default
			width: 100%
			margin: vars.$size-1 0
		.wrap-settings
			width: 100%
			margin-bottom: vars.$size-1
			user-select: none
			.volume
				display: flex
				flex-direction: column
				font-size: 14px
				.details
					margin-bottom: vars.$space-6
					align-items: center
					cursor: default
					display: flex
					justify-content: space-between
				.value
					font-family: "Inconsolata"
					background: vars.$c-bg-2
					border-radius: vars.$border-radius
					padding: 0.3em
					font-weight: 500
					color: vars.$c-text-bright
</style>
