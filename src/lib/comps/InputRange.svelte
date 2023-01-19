<script>
import { onMount } from "svelte";

export let value = 25;

export let min;
export let max;
export let color = "";
export let step;

let inputElement;

const updateInputStyle = () => {
	if (inputElement) {
		inputElement.style.backgroundSize = ((value - min) * 100) / (max - min) + "% 100%";
	}
};

$: value, updateInputStyle();

onMount(() => updateInputStyle());
</script>

<!--------markup-------->

<input
	type="range"
	bind:value
	bind:this={inputElement}
	on:change
	{min}
	{max}
	{step}
	class:color-a={color == "a"}
	class:color-b={color == "b"}
	class:color-c={color == "c"}
	class:color-d={color == "d"}
/>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  input[type=range]
    -webkit-appearance: none
    cursor: pointer
    margin-top: 4px
    background-color: vars.$c-bg-2
    background-image: linear-gradient(to right, vars.$c-main, vars.$c-main)
    background-size: 50% 100%
    background-repeat: no-repeat
    width: 100%
    height: 3px
    &::-webkit-slider-thumb
      height: 16px
      width: 16px
      border-radius: 16px
      background: vars.$c-main
      box-shadow: none
      border: none
      -webkit-appearance: none
    &:focus
      outline: none
    &.color-a
      background-image: linear-gradient(to right, oc.$pink-7, oc.$pink-7)
      &::-webkit-slider-thumb
        background: oc.$pink-7
    &.color-b
      background-image: linear-gradient(to right, oc.$teal-7, oc.$teal-7)
      &::-webkit-slider-thumb
        background: oc.$teal-7
    &.color-c
      background-image: linear-gradient(to right, oc.$blue-7, oc.$blue-7)
      &::-webkit-slider-thumb
        background: oc.$blue-7
    &.color-d
      background-image: linear-gradient(to right, oc.$gray-7, oc.$gray-7)
      &::-webkit-slider-thumb
        background: oc.$gray-7

</style>
