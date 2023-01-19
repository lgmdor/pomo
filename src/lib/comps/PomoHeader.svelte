<script>
import IconMenu from "$icons/menu.svg?component";
import IconArrowLeft from "$icons/arrow_left.svg?component";
import { showingSettings } from "$src/stores.js";

const showSettings = () => showingSettings.update((x) => true);
const hideSettings = () => showingSettings.update((x) => false);
</script>

<!--------markup-------->

<header>
	{#if !$showingSettings}
		<div class="wrap" on:click={showSettings} aria-hidden="true">
			<IconMenu />
		</div>
	{:else}
		<div class="wrap" on:click={hideSettings} aria-hidden="true">
			<IconArrowLeft />
		</div>
	{/if}
	<!--<h1>pomo</h1>-->
</header>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  header
    padding: vars.$space-5
    display: flex
    justify-content: flex-start
    width: 100%
    border-bottom: vars.$border
    h1
      color: oc.$red-2
      font-weight: 500
      font-size: 19px
      letter-spacing: 0.5px
      font-family: "Inconsolata"
      position: absolute
      left: 50%
      transform: translateX(-50%)
    :global(svg)
      cursor: pointer
      border-radius: vars.$border-radius
      transition: all vars.$transition-duration linear
      color: vars.$c-text-2
    :global(svg:hover)
      color: vars.$c-white
</style>
