<script>
import Timer from "$lib/Timer.svelte";
import Settings from "$lib/Settings.svelte";
import { showingSettings } from "$src/stores.js";
</script>

<!--------markup-------->

<div hidden={$showingSettings}>
	<Timer />
</div>
<div hidden={!$showingSettings}>
	<Settings />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

div
  height: 100%
  width: 100%

</style>
