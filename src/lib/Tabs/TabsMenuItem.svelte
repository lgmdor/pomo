<script>
import { key } from "./Tabs.svelte";
import { getContext } from "svelte";

let ref = Symbol();

const { registerMenuItem, selectMenuItem, currMenuItem } = getContext(key);

const select = () => selectMenuItem(ref);

registerMenuItem(ref);
</script>

<!--------markup-------->

<li
	class="lgmui tabs-menu-item"
	on:click={select}
	on:keydown={select}
	class:selected={ref == $currMenuItem}
>
	<slot />
</li>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  li
    min-height: vars.$size-2
    @include vars.center
    cursor: pointer
    font-size: 12px
    @include vars.bgHover(oc.$dark-8, 2%)
    transition: vars.$transition
    &.selected
      color: vars.$c-white
    &:first-child
      border-bottom-left-radius: vars.$border-radius
    &:last-child
      border-bottom-right-radius: vars.$border-radius
    :global(svg)
      color: currentColor
      aspect-ratio: 1
      transform: scale(0.75)
</style>
