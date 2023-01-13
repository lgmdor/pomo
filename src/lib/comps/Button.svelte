<script>
export let text = "Click";
export let onclick = () => {};
export let variant = "default";
export let fullWidth = false;
</script>

<button
	on:click={onclick}
	class:full-width={fullWidth}
	class:variant-default={variant === "default"}
	class:variant-filled={variant === "filled"}
	><div class="icon"><slot /></div>
	<span>{text}</span></button
>

<style lang="sass">
  @use '$src/vars'
  @use '$src/oc'

button
  font-family: vars.$font-family
  border: none
  padding: 0 18px
  height: 36px
  font-weight: 600
  font-size: 14px
  border-radius: vars.$border-radius
  line-height: 1
  user-select: none
  cursor: pointer
  transition: all 60ms linear
  min-width: vars.$size-6
  display: flex
  align-items: center
  justify-content: center
  &:active
    transform: translateY(1px)
  &.full-width
    width: 100%
  &.variant-default
    background: oc.$dark-6
    color: vars.$c-text-1
    border: vars.$border
    &:hover
      background: transparentize(oc.$dark-4, 0.55)
  &.variant-filled
    background: vars.$c-main
    color: #fff
    &:hover
      background: darken(vars.$c-main, 4%)
  .icon :global(svg)
    height: 14px
    width: 14px
    margin-right: 6px
    stroke-width: 2
    stroke: currentcolor
</style>
