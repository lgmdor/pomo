<script>
export let text = "Click";
export let variant = "default";
export let fullWidth = false;
</script>

<button
	on:click
	class:full-width={fullWidth}
	class:variant-default={variant === "default"}
	class:variant-filled={variant === "filled"}
	class:variant-outline={variant === "outline"}
	><div class="icon"><slot /></div>
	<span>{text}</span></button
>

<style lang="sass">
  @use '$src/vars'
  @use '$src/oc'

button
  font-family: vars.$font-family
  border: none
  padding: 0 16px
  height: 32px
  font-weight: 600
  font-size: 14px
  letter-spacing: 0.25px
  border-radius: vars.$border-radius
  line-height: 1
  user-select: none
  cursor: pointer
  transition: vars.$transition
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
    color: vars.$c-text-dark
    border: vars.$border-bright
    &:hover
      background: lighten(oc.$dark-6, 2%)
  &.variant-filled
    background: vars.$c-main
    color: #fff
    &:hover
      background: darken(vars.$c-main, 4%)
  &.variant-outline
    background: transparent
    color: vars.$c-main
    border: 1px solid currentColor
    &:hover
      background: transparentize(vars.$c-main, 0.94)
  .icon :global(svg)
    height: 14px
    width: 14px
    margin-right: 6px
    stroke-width: 2
    stroke: currentcolor
</style>
