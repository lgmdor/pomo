<script>
import { setContext, onMount } from "svelte";
import { writable } from "svelte/store";
import SettingsTime from "$lib/SettingsTime.svelte";
import SettingsMenu from "$lib/SettingsMenu.svelte";
import { createSingleton } from "tippy.js";
import { Tabs, TabsMenu, TabsMenuItem, TabsWrapper } from "$lib/Tabs/tabs.js";

const currTab = writable(0);
const tippys = writable([]);

let tippysSingleton;

setContext("pomo_settings", {
	currTab,
	tippys,
	changeTab: (tab) => currTab.update((x) => tab)
});

onMount(() => {
	tippysSingleton = createSingleton($tippys, {
		delay: 600,
		moveTransition: "transform 60ms linear",
		arrow: false
	});
});
</script>

<!--------markup-------->

<div class="settings">
	<div class="tabs">
		<SettingsTime slot="setting" tab={0} />
	</div>
	<SettingsMenu />
</div>

<!--------style-------->
<style lang="sass">
	@use 'src/vars'
	@use 'src/oc'

	.settings
		position: relative
		width: 100%
		height: 100%
		.tabs
			height: 100%
			padding-bottom: vars.$size-2
</style>
