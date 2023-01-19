<script>
import TimerProgress from "$comps/TimerProgress.svelte";
import { formatTime } from "$src/utils.js";
import { getContext } from "svelte";

const { state, time, round, rounds } = getContext("pomo_timer");
</script>

<!--------markup-------->

<div class="timer">
	{#if $time >= 0}
		<TimerProgress state={$state} />
		<div class="text">{$state}</div>
		<div class="time">{formatTime($time)}</div>
		<div class="round">{`${$round} / ${$rounds}`}</div>
	{/if}
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
    .round, .time
      font-family: "Inconsolata"
    .round
      color: vars.$c-text-2
      letter-spacing: 0.25px
    .time
      font-size: 42px
      letter-spacing: 0.25px
      color: vars.$c-white
      line-height: calc(1em + 1ex)
    .text
      text-transform: uppercase
      letter-spacing: 1.25px
      font-size: 14px
      font-weight: 500
</style>
