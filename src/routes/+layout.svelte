<script>
import PomoHeader from "$lib/PomoHeader.svelte";
</script>

<div class="wrap">
	<PomoHeader />
	<slot />
</div>

<style lang="sass">
  @use '$src/vars'
  @use 'src/oc'

  :global(*)
    margin: 0
    padding: 0
    box-sizing: border-box

  :global(body)
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    font-family: vars.$font-family
    background: vars.$c-bg-2
    color: oc.$gray-5
    height: 100vh
  
  :global(body .tippy-box)
    background: oc.$dark-5
    font-size: 12px
    font-family: vars.$font-family
    color: vars.$c-white

  :global(svg)
    display: block
    user-select: none
    transition: vars.$transition

  .wrap
    position: relative
    width: vars.$size-20
    height: vars.$size-24
    display: flex
    align-items: center
    flex-direction: column
    background: vars.$c-bg-3
    border-radius: vars.$border-radius
    overflow: hidden
    border: vars.$border
</style>
