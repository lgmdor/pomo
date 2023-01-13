<script>
import Menu from "$icons/menu.svg?component";
</script>

<!--------markup-------->

<header>
	<Menu />
	<h1>pomo</h1>
</header>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  header
    padding: vars.$space-4
    display: flex
    justify-content: flex-start
    width: 100%
    position: relative
    h1
      color: oc.$teal-5
      font-size: 19px
      letter-spacing: 0.5px
      font-family: "Inconsolata"
      position: absolute
      left: 50%
      transform: translateX(-50%)
    :global(svg)
      cursor: pointer
    :global(svg:hover)
      color: vars.$c-white
</style>
