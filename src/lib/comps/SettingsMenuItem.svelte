<script>
import { getContext } from "svelte";
import tippy from "tippy.js";

export let tab;
export let name = "Typography";

let tip;

const { changeTab, currTab, tippys } = getContext("pomo_settings");

const tooltip = (node, settings) => {
	tip = tippy(node, settings);

	tippys.update(($tippys) => [...$tippys, tip]);

	return {
		update: (settingsNew) => {
			tip.setProps(settingsNew);
		},
		destroy: () => {
			tip.destroy();
		}
	};
};

const tooltipSettings = {
	content: name,
	duration: 0,
	placement: "top",
	arrow: false
};
</script>

<!--------markup-------->

<div
	class="option"
	class:isActive={$currTab == tab}
	on:click={() => changeTab(tab)}
	use:tooltip={tooltipSettings}
	aria-hidden="true"
>
	<div class="wrap">
		<slot />
	</div>
</div>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tippy.js@6.3.2/dist/tippy.css" />
</svelte:head>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .option
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    user-select: none
    transition: all vars.$transition-duration linear
    cursor: pointer
    color: vars.$c-text-2
    &:hover
      background: lighten(vars.$c-bg-3, 2%)
    &.isActive
      color: vars.$c-white
    :global(svg)
      transform: scale(0.75)
</style>
