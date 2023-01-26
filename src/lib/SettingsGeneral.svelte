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
		<SettingsGeneralItem text="Play sounds">
			<Toggle
				isCheckedDefault={getSetting("Play sounds").value}
				on:checkboxtoggle={(e) => updateSetting("Play sounds", e.detail.isChecked)}
			/>
		</SettingsGeneralItem>
		<SettingsGeneralItem text="Start timers automatically">
			<Toggle
				isCheckedDefault={getSetting("Auto-start").value}
				on:checkboxtoggle={(e) => updateSetting("Auto-start", e.detail.isChecked)}
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
