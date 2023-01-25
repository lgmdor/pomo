<script context="module">
export const key = Symbol();
</script>

<script>
import { setContext } from "svelte";
import { writable } from "svelte/store";

const tabs = [];
const menuItems = [];

const currTab = writable(null);
const currMenuItem = writable(null);

const registerTab = (tab) => {
	tabs.push(tab);

	currTab.update((curr) => curr || tab);
};

const registerMenuItem = (item) => {
	menuItems.push(item);

	currMenuItem.update((curr) => curr || item);
};

const selectTab = (tab) => currTab.set(tab);

const selectMenuItem = (item) => {
	currMenuItem.set(item);

	selectTab(tabs[menuItems.indexOf($currMenuItem)]);
};

setContext(key, {
	tabs,
	menuItems,
	currTab,
	currMenuItem,
	registerTab,
	registerMenuItem,
	selectTab,
	selectMenuItem
});
</script>

<!--------markup-------->

<div class="lgmui tabs">
	<div class="wrap">
		<slot />
	</div>
	<slot name="menu" />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .tabs
    min-width: vars.$size-4
    height: 100%
    display: flex
    flex-direction: column
    .wrap
      position: relative
      min-height: vars.$size-4
      height: 100%
</style>
