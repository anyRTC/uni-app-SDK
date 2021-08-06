import permision from "../js_sdk/wa-permission/permission.js"
const Utils = {
	// 平台分类查询权限
	async equipment() {
		// 查看权限
		if (uni.getSystemInfoSync().platform == 'ios') {
			//查看相机权限
			let oa = await Utils.requestAndroidPermission("camera", 'ios', '相机');
			//查看录音权限
			let ob = await Utils.requestAndroidPermission("record", 'ios', '录音');
			await uni.showToast({
				title: oa + ";" + ob,
				icon: "none",
				duration: 2000
			});
		} else if (uni.getSystemInfoSync().platform === 'android') {
			//查看相机权限
			let oa = await Utils.requestAndroidPermission("android.permission.CAMERA", 'android', '相机');
			//查看录音权限
			let ob = await Utils.requestAndroidPermission("android.permission.RECORD_AUDIO", 'android', '录音');
			await uni.showToast({
				title: oa + ";" + ob,
				icon: "none",
				duration: 2000
			});
		}
	},
	// 查询权限封装
	async requestAndroidPermission(permisionID, type, libe) {
		let result = 0;
		let strStatus = "";
		type == 'ios' ? result = await permision.judgeIosPermission(permisionID) : result = await permision
			.requestAndroidPermission(
				permisionID);
		if (result == 1) {
			strStatus = "已获得授权,可正常使用"
		} else if (result == 0) {
			strStatus = "未获得授权,无法使用"
		} else {
			strStatus = "被永久拒绝权限,无法使用"
		};
		return libe + strStatus
	},
	// 获取高度宽度
	getWidthHeight() {
		let obj = {
			windowWidth: 0,
			windowHeight: 0,
		}
		uni.getSystemInfo({
			success: function(res) {
				obj = Object.assign(obj, res);
			}
		})
		return obj
	},
	// 生成随机字符串（支持自定义字符长度和特征字符集合）
	randomFn(len, charSet) {
		charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';
		let randomString = '';
		for (let i = 0; i < len; i++) {
			let randomPoz = Math.floor(Math.random() * charSet.length);
			randomString += charSet.substring(randomPoz, randomPoz + 1);
		}
		return randomString;
	},
}
export default Utils;
