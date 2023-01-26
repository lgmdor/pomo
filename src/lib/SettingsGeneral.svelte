<script>
import SettingsGeneralItem from "$lib/SettingsGeneralItem.svelte";
import Toggle from "$lib/Toggle/Toggle.svelte";
import { db } from "$src/db.js";
import { liveQuery } from "dexie";
import { onMount } from "svelte";
import { NAMES } from "$src/utils.js";

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
		<SettingsGeneralItem text={NAMES.settings.playSounds}>
			<Toggle
				isCheckedDefault={getSetting(NAMES.settings.playSounds).value}
				on:checkboxtoggle={(e) => updateSetting(NAMES.settings.playSounds, e.detail.isChecked)}
			/>
		</SettingsGeneralItem>
		<SettingsGeneralItem text={NAMES.settings.autoStart}>
			<Toggle
				isCheckedDefault={getSetting(NAMES.settings.autoStart).value}
				on:checkboxtoggle={(e) => updateSetting(NAMES.settings.autoStart, e.detail.isChecked)}
			/>
		</SettingsGeneralItem>
	{/if}
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    height: 100%
    width: 100%
    padding: vars.$size-2
</style>
