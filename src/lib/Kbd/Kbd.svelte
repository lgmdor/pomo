<script>
</script>

<!--------markup-------->

<div class="wrap">
	<slot />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    font-family: "Inconsolata"
    font-size: 12px
    font-weight: 700
    color: oc.$gray-4
    border-width: 1px 1px 3px 1px
    border-radius: 4px
    border-style: solid
    border-color: oc.$dark-4
    padding: 3px 5px
    line-height: 1
    background-color: oc.$dark-5
</style>
