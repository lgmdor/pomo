<script>
import SettingsTimeItem from "$lib/SettingsTimeItem.svelte";
import { db } from "$src/db.js";
import { onMount } from "svelte";
import { DEFAULT_SETTINGS, NAMES } from "$src/utils.js";
import { liveQuery } from "dexie";

let settings;

$: $settings, updateSettings();

const reset = async () => {
	const x = await db[NAMES.dbs.time].bulkPut([
		{ name: NAMES.states.focus, value: DEFAULT_SETTINGS.time.focus },
		{ name: NAMES.states.breakShort, value: DEFAULT_SETTINGS.time.breakShort },
		{ name: NAMES.states.breakLong, value: DEFAULT_SETTINGS.time.breakLong },
		{ name: "Rounds", value: DEFAULT_SETTINGS.time.rounds }
	]);

	updateSettings();
};

const getSetting = (name) => $settings.find((setting) => setting.name === name);

const updateSettings = () => {};

onMount(() => {
	settings = liveQuery(() => db[NAMES.dbs.time].toArray());
});
</script>

<!--------markup-------->

<div class="wrap">
	{#if $settings?.length}
		<SettingsTimeItem
			name={NAMES.states.focus}
			color="a"
			defaultValue={getSetting(NAMES.states.focus).value}
		/>
		<SettingsTimeItem
			name={NAMES.states.breakShort}
			color="b"
			defaultValue={getSetting(NAMES.states.breakShort).value}
		/>
		<SettingsTimeItem
			name={NAMES.states.breakLong}
			color="c"
			defaultValue={getSetting(NAMES.states.breakLong).value}
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

<!--------style-------->
<style lang="sass">
	@use 'src/vars'
	@use 'src/oc'
  
	.wrap
		display: flex
		align-items: center
		justify-content: space-between
		flex-direction: column
		height: 100%
		width: 100%
		padding: vars.$size-1 0
		.reset
			font-size: 12px
			letter-spacing: 0.4px
			text-decoration: underline
			cursor: pointer
			color: vars.$c-text-default
			transition: vars.$transition
			&:hover
				color: vars.$c-text-dark
</style>
