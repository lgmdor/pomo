<script>
</script>

<!--------markup-------->

<nav class="lgmui tabs-menu">
	<ul>
		<slot />
	</ul>
</nav>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  nav
    margin-top: auto
    border-bottom-left-radius: vars.$border-radius
    border-bottom-right-radius: vars.$border-radius
    ul
      list-style: none
      display: grid
      grid-auto-columns: 1fr
      grid-auto-flow: column
</style>
