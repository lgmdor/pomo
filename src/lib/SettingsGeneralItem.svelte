<script>
export let text;
</script>

<!--------markup-------->

<li>
	<span>{text}</span>
	<slot />
</li>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  li
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    padding: vars.$space-5 0
    span
      font-size: 14px
      line-height: 20px
      cursor: default
</style>
