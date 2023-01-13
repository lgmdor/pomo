<script>
import PomoHeader from "$comps/PomoHeader.svelte";
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
    justify-content: flex-start
    align-items: center
    flex-direction: column
    font-family: vars.$font-family
    background: vars.$c-bg-2
    color: oc.$gray-5

  :global(svg)
    display: block

  .wrap
    width: vars.$size-20
    height: vars.$size-24
    display: flex
    align-items: center
    flex-direction: column
    background: vars.$c-bg-3
    border-radius: 0 0 vars.$border-radius vars.$border-radius
</style>
