// 	RTC 基本设置
const config = {
	// 必填 anyRTC 为 App 开发者签发的 App ID。每个项目都应该有一个独一无二的 App ID。
	// 如果你的开发包里没有 App ID，请从anyRTC官网(https://www.anyrtc.io)申请一个新的 App ID
	appid: "",
	// anyRTC 实现通话的频道(必须是字符串)
	channel: "",
	// anyRTC 标识当前用户(必须是字符串)
	uid: "",
	//（项目测试阶段可不填写）项目启用 token 后请添加相关回调逻辑
	// 请参考 https://docs.anyrtc.io/cn/Video/api-ref/rtc_uniapp/uni_rtc_event#ontokenprivilegewillexpire
	token: "",
	
	//（直播场景下） 如果旁路推流服务，使用请确保当前使用的 appid 开通旁路推流服务，否则将推流失败
	// 推流地址
	liveUrl: "",
}
export default config