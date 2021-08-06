<script>
	export default {
		onLaunch: function() {
			// 锁定竖屏
			plus.screen.lockOrientation('portrait-primary');
			// 相机、麦克风权限
			this.$Utils.equipment();
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
