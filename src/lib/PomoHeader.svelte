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
    border-bottom: vars.$border-default
    :global(svg)
      cursor: pointer
      border-radius: vars.$border-radius
      transition: vars.$transition
      color: vars.$c-text-default
    :global(svg:hover)
      color: vars.$c-white
</style>
