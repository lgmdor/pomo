<script>
import SettingsTimeItem from "$lib/SettingsTimeItem.svelte";
import { db } from "$src/db.js";
import { onMount, getContext } from "svelte";
import { DEFAULT_SETTINGS, STATE_NAMES, DB_NAMES } from "$src/utils.js";
import { liveQuery } from "dexie";

export let tab;

let settings;

$: $settings, updateSettings();

const { currTab } = getContext("pomo_settings");

const reset = async () => {
	const x = await db[DB_NAMES.time].bulkPut([
		{ name: STATE_NAMES.focus, value: DEFAULT_SETTINGS.time.focus },
		{ name: STATE_NAMES.breakShort, value: DEFAULT_SETTINGS.time.breakShort },
		{ name: STATE_NAMES.breakLong, value: DEFAULT_SETTINGS.time.breakLong },
		{ name: "Rounds", value: DEFAULT_SETTINGS.time.rounds }
	]);

	updateSettings();
};

const getSetting = (name) => $settings.find((setting) => setting.name === name);

const updateSettings = () => {};

onMount(() => {
	settings = liveQuery(() => db[DB_NAMES.time].toArray());
});
</script>

<!--------markup-------->

{#if $currTab == tab}
	<div class="wrap">
		{#if $settings?.length}
			<SettingsTimeItem
				name={STATE_NAMES.focus}
				color="a"
				defaultValue={getSetting(STATE_NAMES.focus).value}
			/>
			<SettingsTimeItem
				name={STATE_NAMES.breakShort}
				color="b"
				defaultValue={getSetting(STATE_NAMES.breakShort).value}
			/>
			<SettingsTimeItem
				name={STATE_NAMES.breakLong}
				color="c"
				defaultValue={getSetting(STATE_NAMES.breakLong).value}
			/>
			<SettingsTimeItem
				name={getSetting("Rounds").name}
				color="d"
				defaultValue={getSetting("Rounds").value}
				min="1"
				max="12"
				step="1"
				type="amount"
			/>
			<!--<span class="reset" on:click={reset} aria-hidden="true">reset</span>-->
		{/if}
	</div>
{/if}

<!--------style-------->
<style lang="sass">
	@use 'src/vars'
	@use 'src/oc'
  
	.wrap
		display: flex
		flex-direction: column
		justify-content: flex-start
		align-items: center
		gap: vars.$space-6
		height: 100%
		width: 100%
		.reset
			font-size: 12px
			letter-spacing: 0.4px
			text-decoration: underline
			cursor: pointer
			color: vars.$c-text-2
			transition: vars.$transition
			&:hover
				color: vars.$c-text-1
</style>
