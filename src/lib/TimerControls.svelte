<script>
import IconSkip from "$icons/skip.svg?component";
import IconReset from "$icons/reset.svg?component";
import Button from "$lib/Button.svelte";
import tippy from "tippy.js";
import { getContext } from "svelte";
import { NAMES } from "$src/utils.js";
import { showingSettings } from "$src/stores.js";

const ctx = getContext("pomo_timer");
const { timer, state } = ctx;

const toggleTimer = () => {
	if (!$timer) {
		ctx.startTimer();
	} else {
		//clearInterval($timer);
		ctx.stopTimer();
	}
};

const resetTimer = () => {
	ctx.resetTimer();
};

const skipRound = () => {
	ctx.skipRound();
};

const handleKeydown = (e) => {
	if (!$showingSettings) {
		const key = e.code;

		switch (key) {
			case "KeyA":
				resetTimer();
				break;

			case "KeyD":
				skipRound();
				break;

			case "Space":
				toggleTimer();
				break;

			default:
				break;
		}
	}
};

//----------------

const tooltip = (node, settings) => {
	let tip = tippy(node, settings);

	return {
		update: (settingsNew) => {
			tip.setProps(settingsNew);
		},
		destroy: () => {
			tip.destroy();
		}
	};
};

const tooltipSettings = {
	duration: 60,
	placement: "top",
	arrow: false,
	delay: [600, 0]
};
</script>

<!--------markup-------->

<div class="wrap">
	<div
		class="wrap-icon"
		use:tooltip={{ ...tooltipSettings, content: "Reset" }}
		on:click={resetTimer}
		aria-hidden="true"
	>
		<IconReset />
	</div>
	<div
		class="wrap-btn"
		class:focus={$state === NAMES.states.focus}
		class:break-short={$state === NAMES.states.breakShort}
		class:break-long={$state === NAMES.states.breakLong}
	>
		<Button
			variant={!$timer ? "outline" : "default"}
			text={!$timer ? "Start" : "Pause"}
			on:click={toggleTimer}
		/>
	</div>
	<div
		class="wrap-icon"
		use:tooltip={{ ...tooltipSettings, content: "Skip" }}
		on:click={skipRound}
		aria-hidden="true"
	>
		<IconSkip />
	</div>
</div>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tippy.js@6.3.2/dist/tippy.css" />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    display: flex
    align-items: center
    justify-content: center
    :global(.tippy-box)
      background: oc.$dark-5
      font-size: 12px
      font-family: vars.$font-family
      color: vars.$c-white
    .wrap-btn
      margin: 0 vars.$space-4
      &.focus
        :global(button:not(.variant-default))
          color: oc.$pink-7
        :global(button:hover:not(.variant-default))
          background: transparentize(oc.$pink-7, 0.94)
      &.break-short
        :global(button:not(.variant-default))
          color: oc.$teal-7
        :global(button:hover:not(.variant-default))
          background: transparentize(oc.$teal-7, 0.94)
      &.break-long
        :global(button:not(.variant-default))
          color: oc.$blue-7
        :global(button:hover:not(.variant-default))
          background: transparentize(oc.$blue-7, 0.94)
    .wrap-icon
      height: vars.$size-2
      width: vars.$size-2
      display: flex
      align-items: center
      justify-content: center
      border-radius: vars.$border-radius
      border: vars.$border-bright
      background: oc.$dark-6
      cursor: pointer
      transition: vars.$transition
      &:hover
        background: lighten(oc.$dark-6, 2%)
      &:active
        transform: translateY(1px)
</style>
