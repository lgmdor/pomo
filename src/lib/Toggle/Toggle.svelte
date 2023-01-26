<script>
import { createEventDispatcher } from "svelte";

export let isCheckedDefault = false;
export let isDisabled = false;

let isChecked = isCheckedDefault;

const dispatch = createEventDispatcher();

const toggle = () => {
	if (!isDisabled) {
		isChecked = !isChecked;

		dispatch("checkboxtoggle", {
			isChecked
		});
	}
};
</script>

<!--------markup-------->

<label class="lgmui toggle">
	<input type="checkbox" checked={isCheckedDefault} disabled={isDisabled} />
	<div class="toggle" on:click={toggle} on:keydown={toggle}>
		<div class="thumb" />
	</div>
</label>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  label
    display: flex
    input
      appearance: none
      &:checked + .toggle
        background: vars.$c-main
        .thumb
          transform: translateX(22px)
      &:disabled + .toggle
        cursor: not-allowed
        background: oc.$dark-4
        .thumb
          background: oc.$dark-3
    .toggle, .thumb
      transition: vars.$transition
    .toggle
      border: vars.$border-bright
      background: vars.$c-bg-4
      width: 42px
      height: 20px
      border-radius: 36px
      display: flex
      align-items: center
      padding: 0 3px
      .thumb
        background: #fff
        height: 14px
        width: 14px
        border-radius: 50%
</style>
