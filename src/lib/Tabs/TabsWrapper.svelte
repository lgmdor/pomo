<script>
import { key } from "./Tabs.svelte";
import { getContext } from "svelte";

let ref = Symbol();

const { registerTab, currTab } = getContext(key);

registerTab(ref);
</script>

<!--------markup-------->

<div class="wrap lgmui tabs-wrapper" hidden={ref != $currTab}>
	<slot />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    height: 100%
    &:not([hidden])
      @include vars.center
</style>
