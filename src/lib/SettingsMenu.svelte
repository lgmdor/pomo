<script>
import SettingsMenuItem from "$lib/SettingsMenuItem.svelte";
import IconTime from "$icons/time.svg?component";
import IconSettings from "$icons/settings.svg?component";
import IconColor from "$icons/color.svg?component";
import IconInfo from "$icons/info.svg?component";
</script>

<!--------markup-------->
<div class="menu">
	<SettingsMenuItem tab={0} name="Time">
		<IconTime />
	</SettingsMenuItem>
	<SettingsMenuItem tab={1} name="Settings">
		<IconSettings />
	</SettingsMenuItem>
	<SettingsMenuItem tab={2} name="Themes">
		<IconColor />
	</SettingsMenuItem>
	<SettingsMenuItem tab={3} name="About">
		<IconInfo />
	</SettingsMenuItem>
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .menu
    position: absolute
    bottom: 0
    left: 0
    right: 0
    display: grid
    grid-auto-columns: 1fr
    grid-auto-flow: column
    height: vars.$size-2
    width: 100%
    border-top: vars.$border
</style>
