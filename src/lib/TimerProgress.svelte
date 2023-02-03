<script>
import { getContext, onMount } from "svelte";
import { NAMES } from "$src/utils.js";

export let state;

const { time, timeTotal } = getContext("pomo_timer");

let progressElement;

$: $time, updateProgress();

const updateProgress = () => {
	if (progressElement) {
		progressElement.style.strokeDashoffset = ($time / $timeTotal) * 100;
	}
};
</script>

<!--------markup-------->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
	<circle
		cx="16"
		cy="16"
		r="15.5"
		class="total"
		class:focus={state == NAMES.states.focus}
		class:break-short={state == NAMES.states.breakShort}
		class:break-long={state == NAMES.states.breakLong}
	/>

	<circle cx="16" cy="16" r="15.5" class="progress" bind:this={progressElement} />
</svg>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  svg
    position: absolute
    inset: 0
    transform: rotate(270deg)
    .total, .progress
      fill: none
      transition: vars.$transition
    .progress
      stroke-dasharray: 100 100
      stroke-dashoffset: 100
      z-index: 1
      stroke-width: 2.6%
      stroke: vars.$c-bg-4
    .total
      stroke-width: 1.6%
      &.focus
        stroke: oc.$pink-7
      &.break-short
        stroke: oc.$teal-7
      &.break-long
        stroke: oc.$blue-7
</style>
