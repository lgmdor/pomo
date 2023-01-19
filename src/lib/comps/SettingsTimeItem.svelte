<script>
import InputRange from "$comps/InputRange.svelte";
import { db } from "$src/db.js";
import { formatTime } from "$src/utils.js";
import { UNIT, DEFAULT_SETTINGS, DB_NAMES } from "$src/utils.js";

export let name;
export let color;
export let defaultValue;
export let min = DEFAULT_SETTINGS.time.min * UNIT * 60;
export let max = DEFAULT_SETTINGS.time.max * UNIT * 60;
export let step = DEFAULT_SETTINGS.time.step * UNIT * 60;
export let type = "time";

let value = defaultValue;

$: valueDisplay = () => {
	if (type == "time") {
		return formatTime(value);
	} else {
		return value;
	}
};

const saveValue = () => {
	db[DB_NAMES.time].put({ name, value });
};
</script>

<!--------markup-------->

<div class="item">
	<div class="details">
		<span class="name">{name}</span>
		<span class="value" class:amount={type == "amount"} class:time={type == "time"}
			>{valueDisplay()}</span
		>
	</div>
	<InputRange bind:value {color} on:change={saveValue} {min} {max} {step} />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    padding: vars.$size-2
    height: vars.$size-4
    .details
      width: 100%
      margin-bottom: vars.$space-7
      display: flex
      justify-content: flex-end
      align-items: center
      position: relative
      .name
        font-size: 14px
        letter-spacing: 0.25px
        position: absolute
        right: 50%
        transform: translateX(50%)
      .value
        margin-left: vars.$space-6
        font-family: "Inconsolata"
        background: vars.$c-bg-2
        padding: 0.3em
        border-radius: vars.$border-radius
        font-weight: 500
        &.time
        &.amount
</style>
