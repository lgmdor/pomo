<script>
</script>

<!--------markup-------->

<div class="timer">
	<div class="progress" />
	<div class="time">24:59</div>
	<div class="text">Focus</div>
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .timer
    height: vars.$size-12
    width: vars.$size-12
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    position: relative
    margin: vars.$space-3 0
    .progress
      border-radius: 50%
      border: 8px solid oc.$red-9
      position: absolute
      inset: 0
    .time
      font-size: 40px
      font-family: "Inconsolata"
      color: vars.$c-white
    .text
      position: absolute
      margin-top: calc(vars.$space-1 + vars.$space-3)
      text-transform: uppercase
      font-size: 14px
      font-weight: 500
</style>
