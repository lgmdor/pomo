<script>
import SettingsGeneralItem from "$lib/SettingsGeneralItem.svelte";
import Toggle from "$lib/Toggle/Toggle.svelte";
import { db } from "$src/db.js";
import { liveQuery } from "dexie";
import { onMount } from "svelte";
import { NAMES } from "$src/utils.js";
import InputRange from "$lib/InputRange.svelte";

let settings;

const getSetting = (name) => $settings.find((setting) => setting.name === name);

const updateSetting = (setting, value) => {
	db[NAMES.dbs.general].put({ name: setting, value });
};

onMount(() => {
	settings = liveQuery(() => db[NAMES.dbs.general].toArray());
});
</script>

<!--------markup-------->

<div class="wrap">
	{#if $settings?.length}
		<h2>General</h2>
		<div class="wrap-settings">
			<SettingsGeneralItem text={NAMES.settings.playSounds}>
				<Toggle
					isCheckedDefault={getSetting(NAMES.settings.playSounds).value}
					on:checkboxtoggle={(e) => updateSetting(NAMES.settings.playSounds, e.detail.isChecked)}
				/>
			</SettingsGeneralItem>
			<InputRange />
			<SettingsGeneralItem text={NAMES.settings.autoStart}>
				<Toggle
					isCheckedDefault={getSetting(NAMES.settings.autoStart).value}
					on:checkboxtoggle={(e) => updateSetting(NAMES.settings.autoStart, e.detail.isChecked)}
				/>
			</SettingsGeneralItem>
		</div>
		<h2>Keybinds</h2>
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
		padding: vars.$size-1 0
		h2
			font-size: vars.$fs-sm
			font-weight: 400
			letter-spacing: 0.4px
			border-bottom: vars.$border-bright
		.wrap-settings
			width: 100%
			padding: 0 vars.$size-2
			margin-bottom: vars.$size-2
</style>
