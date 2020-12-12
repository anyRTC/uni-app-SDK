<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			//摄像头权限
			uni.authorize({
			    scope: 'scope.camera',
			    success() {
			        uni.getLocation()
			    }
			})
			//录音权限
			uni.authorize({
			    scope: 'scope.record',
			    success() {
			        uni.getLocation()
			    }
			})
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
