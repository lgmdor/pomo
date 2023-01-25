<script>
import { onMount } from "svelte";
import { writable } from "svelte/store";
import SettingsTime from "$lib/SettingsTime.svelte";
import { createSingleton } from "tippy.js";
import { Tabs, TabsMenu, TabsMenuItem, TabsWrapper } from "$lib/Tabs/tabs.js";
import IconTime from "$icons/time.svg?component";
import IconSettings from "$icons/settings.svg?component";
import IconColor from "$icons/color.svg?component";
import IconInfo from "$icons/info.svg?component";

const tippys = writable([]);

let tippysSingleton;

// setContext("pomo_settings", {
// 	currTab,
// 	tippys,
// 	changeTab: (tab) => currTab.update((x) => tab)
// });

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
	<!-- <div class="tabs">
		<SettingsTime slot="setting" tab={0} />
	</div>
	<SettingsMenu /> -->
	<Tabs>
		<TabsWrapper>
			<SettingsTime />
		</TabsWrapper>

		<TabsMenu slot="menu">
			<TabsMenuItem>
				<IconTime />
			</TabsMenuItem>
			<TabsMenuItem>
				<IconSettings />
			</TabsMenuItem>
			<TabsMenuItem>
				<IconColor />
			</TabsMenuItem>
			<TabsMenuItem>
				<IconInfo />
			</TabsMenuItem>
		</TabsMenu>
	</Tabs>
</div>

<!--------style-------->
<style lang="sass">
	@use 'src/vars'
	@use 'src/oc'

	.settings
		position: relative
		width: 100%
		height: 100%

	:global(.settings .lgmui.tabs-menu-item)
		@include vars.bgHover(vars.$c-bg-3, 2%)
	:global(.settings .lgmui.tabs-menu)
		border-top: vars.$border-default
</style>
