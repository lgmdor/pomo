<script>
</script>

<!--------markup-------->

<li>hi</li>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  li
    background: vars.$c-bg-2
    width: 100%
    @include vars.center
    padding: vars.$space-5 vars.$space-4
</style>
