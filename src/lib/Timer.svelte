<script>
import TimerDisplay from "$lib/TimerDisplay.svelte";
import TimerControls from "$lib/TimerControls.svelte";
import { setInterval, clearInterval } from "worker-timers";
import { db } from "$src/db.js";
import { setContext, onMount } from "svelte";
import { writable } from "svelte/store";
import { liveQuery } from "dexie";
import { STATE_NAMES, UNIT, DB_NAMES } from "$src/utils.js";
import soundPath from "$assets/finished.ogg";
import { soundVolume } from "$src/stores.js";

let settings;

$: $settings, updateSettings();

const rounds = writable(0);
const state = writable(STATE_NAMES.focus);
const time = writable(0);
const timeTotal = writable(0);
const timer = writable(null);
const round = writable(1);

const sound = new Audio(soundPath);

sound.volume = $soundVolume;

const updateSettings = () => {
	if ($settings) {
		if ($rounds != $settings[2].value) {
			rounds.update((rounds) => $settings[2].value);
			if ($round > $rounds) {
				round.update((round) => $rounds);
			}
		}

		if ($timer == null) {
			updateTime();
		}
	}
};

const updateTime = () => {
	time.update((time) => $settings.find((setting) => setting.name === $state).value);
	timeTotal.update((timeTotal) => $time);
};

onMount(() => {
	settings = liveQuery(() => db[DB_NAMES.time].toArray());
});

const ctx = {
	state,
	time,
	timeTotal,
	timer,
	round,
	rounds,
	startTimer() {
		timer.update((timer) => setInterval(everySecond, UNIT));
	},
	stopTimer() {
		clearInterval($timer);

		timer.update((timer) => null);
	},
	resetTimer() {
		if ($timer != null) {
			this.stopTimer();
		}
		updateTime();
	},
	skipRound() {
		if ($round >= $rounds) {
			if ($state === STATE_NAMES.breakLong) {
				round.update((round) => 1);
				state.update((state) => STATE_NAMES.focus);
			} else {
				state.update((state) => STATE_NAMES.breakLong);
			}
		} else {
			if ($state === STATE_NAMES.focus) {
				state.update((state) => STATE_NAMES.breakShort);
			} else {
				state.update((state) => STATE_NAMES.focus);
				round.update(($round) => ($round += 1));
			}
		}

		this.resetTimer();
	}
};

setContext("pomo_timer", ctx);

const everySecond = () => {
	if ($time > 0) {
		time.update(($time) => $time - UNIT);
	} else {
		ctx.skipRound();
		sound.play();
		updateTime();
	}
};
</script>

<!--------markup-------->

<div class="wrap">
	<TimerDisplay />
	<TimerControls />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

.wrap
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>
