<slot />

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
  font-family: "Inter"
  background: vars.$c-bg-1
</style>
