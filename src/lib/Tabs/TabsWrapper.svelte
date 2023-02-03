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
      overflow-y: auto
      &:not([hidden])
        @include vars.center
  
  ::-webkit-scrollbar
    background: oc.$dark-6
    width: 6px
  ::-webkit-scrollbar-thumb
    background: oc.$dark-4
</style>
