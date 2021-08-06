// 旁路推流
import {
	LiveTranscoding,
	TranscodingUser
} from "./classes.js"
// rtc 音视频引入
const rtcModule = uni.requireNativePlugin('AR-RtcModule');
// 错误码
import Code from "./code.js";
// 本地暂存
let Store = {
	// 本地视频容器
	location: null,
	// 远端食品容器（多人）
	remoteLits: []
};

// rtc 实时音频通话
const RTC = {
	// 初始化
	init: async function(info) {
		Store = Object.assign(Store, info);
		// 初始化回调 
		await rtcModule.setCallBack(res => {
			RTC.callBack(res);
		});
		// 初始化实例 RTC_APPID
		await rtcModule.create({
			"appId": Store.appid
		}, res => {
			console.log('初始化实例 rtc', res);
		});
		// 私人定制 (本项目定制：智能降噪 )
		await rtcModule.setParameters({
			Cmd: 'SetAudioAiNoise',
			Enable: 1
		}, (res) => {
			console.log('私人定制', res);
		});
	},
	// 相关回调(仅列举常用回调)
	callBack: function(res) {
		switch (res.engineEvent) {
			// 发生警告回调
			case "onWarning":
				uni.showToast({
					title: Code.warning[res.warningCode] || "未知警告",
					icon: 'none',
					duration: 2000
				});
				break;
				// 发生错误回调
			case "onError":
				uni.showToast({
					title: Code.errore[res.errorCode] || "未知错误",
					icon: 'none',
					duration: 2000
				});
				break;
				// 加入频道成功回调
			case "onJoinChannelSuccess":
				// 角色为观众时 停止本地视频渲染
				if (Store.roleChoices != 2) {
					// 本地渲染
					RTC.localVideo({
						"channel": Store.channelId + '',
						"uid": Store.uid + '',
					});
				}
				break;
				// 远端用户加入当前频道回调
			case "onUserJoined":
				uni.showToast({
					title: '用户' + res.uid + '加入频道',
					icon: 'none',
					duration: 2000
				});

				break;
				// 远端用户离开当前频道回调
			case "onUserOffline":
				uni.showToast({
					title: '远端用户' + res.uid + '离开频道',
					icon: 'none',
					duration: 2000
				});
				uni.$emit("UserOffline", res);
				// 清除对应的本地存放
				Store.remoteLits.splice(Store.remoteLits.findIndex(item => item.peerid == res.uid), 1);
				break;
				// 已显示远端视频首帧回调
			case "onFirstRemoteVideoDecoded":
				console.log("已显示远端视频首帧回调", res);
				uni.$emit("peeridJoinChannel", res.uid);
				break;
				// 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)
			case "onRemoteVideoStateChanged":
				console.log("远端用户视频状态发生已变化回调", res);
				uni.$emit("VideoStateChanged",res);
				break;
				// 旁路推流状态
			case "onRtmpStreamingStateChanged":
				uni.showToast({
					title: Code.live.state[res.state] + Code.live.error[res.errorCode],
					icon: 'none',
					duration: 2000
				});
				console.log("旁路推流状态", res);
				break
				// 	// 网络连接状态已改变回调
				// case "onConnectionStateChanged":
				// 	break;
				// 	// 已显示远端视频首帧回调
				// case "onFirstRemoteVideoFrame":
				// 	break;
				// 	// 本地网络类型发生改变回调
				// case "onNetworkTypeChanged":
				// 	break;
				// 	// 网络连接中断
				// case "onConnectionLost":
				// 	break;
				// 	// 远端音频状态发生改变回调
				// case "onRemoteAudioStateChanged":
				// 	break;
				// 	// 本地音频状态发生改变回调
				// case "onLocalAudioStateChanged":
				// 	break;
				// 	// 本地视频状态发生改变回调
				// case "onLocalVideoStateChanged":
				// 	break;
				// 	// 重新加入频道回调
				// case "onRejoinChannelSuccess":
				// 	break;
				// 	// 离开频道回调
				// case "onLeaveChannel":
				// 	break;
				// 已发送本地音频首帧回调
				// case "onFirstLocalAudioFrame":
				// 	break;
				// 	// 已显示本地视频首帧回调
				// case "onFirstLocalVideoFrame":
				// 	break;
				// 	// Token 服务即将过期回调
				// case "onTokenPrivilegeWillExpire":
				// 	break;
				// 	// Token 过期回调
				// case "onRequestToken":
				// 	break;
				// 	// 用户角色已切换回调(直播场景下)
				// case "onClientRoleChanged":
				// 	break;
				// 	// 本地或远端视频大小或旋转信息发生改变回调
				// case "onVideoSizeChanged":
				// 	break;
				// 	// 通话中远端音频流的统计信息回调
				// case "onRemoteAudioStats":
				// 	break;
				// 	// 当前通话统计回调。 该回调在通话中每两秒触发一次
				// case "onRtcStats":
				// 	break;
				// 	// 通话中每个用户的网络上下行 last mile 质量报告回调
				// case "onNetworkQuality":
				// 	break;
				// 	// 通话中本地视频流的统计信息回调
				// case "onLocalVideoStats":
				// 	break;
				// 	// 通话中本地音频流的统计信息回调
				// case "onLocalAudioStats":
				// 	break;
				// 	// 通话中远端视频流的统计信息回调
				// case "onRemoteVideoStats":
				// 	break;
		}
	},
	// 设置频道场景以及频道角色
	setChannelProfile: async function() {
		return await new Promise((resolve, reject) => {
			console.log("设置频道场景以及频道角色", Store);
			// 设置频道场景
			rtcModule.setChannelProfile({
				"profile": Number(Store.scenario)
			}, (res) => {
				if (res.code == 0) {
					// 设置频道角色
					rtcModule.setClientRole({
						"role": Number(Store.roleChoices)
					}, (res) => {
						resolve(res.code);
					})
				}
			})
		})

	},
	// 启用视频（加入房间后自动发布）
	enableVideo: async function() {
		// 设置视频编码属性(可自定义) 
		// 详情 https://docs.anyrtc.io/cn/Video/api-ref/rtc_uniapp/uni_rtc_engine#setvideoencoderconfiguration
		// await rtcModule.setVideoEncoderConfiguration({
		// 	"width": 240,
		// 	"height": 320,
		// 	"bitrate": 0,
		// 	"frameRate": 15,
		// 	"orientationMode": 0
		// }, (res) => {
		// 	console.log('RTC 设置视频编码属性 setVideoEncoderConfiguration 方法调用', res
		// 		.code ===
		// 		0 ? '成功' :
		// 		'失败：' + res);
		// });
		// 启用视频
		await rtcModule.enableVideo((res) => {
			console.log('RTC 启用视频 enableVideo 方法调用', (res.code === 0 ? '成功' : '失败：') +
				res);
		});
	},
	// 加入频道
	joinChannel: async function() {
		// 开启免提
		await RTC.setEnableSpeakerphone(true);
		// 加入 rtc 频道
		await rtcModule.joinChannel({
			"token": Store.token,
			"channelId": Store.channel,
			"uid": Store.uid,
		}, (res) => {
			console.log('RTC joinChannel 方法调用', (res.code === 0 ? '成功' : '失败：') + res);
		});
	},
	// 音频是否免提
	setEnableSpeakerphone: function(fase) {
		// 默认扬声器播放
		rtcModule.setEnableSpeakerphone({
			"enabled": fase
		}, (res) => {
			console.log('RTC 远端加入房间后设置' + (fase ? '开启' : '关闭') + '扬声器播放', res.code === 0 ? '成功' :
				'失败：' +
				res);
		});
	},
	// 音频是否关闭
	enableLocalAudio: function(checked) {
		rtcModule.enableLocalAudio({
			"enabled": checked
		}, (res) => {
			console.log('RTC 音频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res);
		})
	},
	// 本地视频是否采集
	enableLocalVideo: function(checked) {
		rtcModule.enableLocalVideo({
			"enabled": checked
		}, (res) => {
			console.log('RTC 视频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res);
		})
	},
	// 摄像头（前后）
	switchCamera: function() {
		rtcModule.switchCamera((res) => {
			console.log('RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +
				res);
		})
	},
	// 转语音
	toSpeech: function() {
		// 关闭视频模块
		rtcModule.disableVideo((res) => {
			console.log('RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +
				res);
		})
	},
	// 本地启用视频后
	localVideo: async function() {
		console.log("本地启用视频后", Store);
		// // 渲染视频
		await Store.location.setupLocalVideo({
			"renderMode": 1,
			"channelId": Store.channel,
			"uid": Store.uid,
			"mirrorMode": 0
		}, (res) => {
			console.log('渲染视频', res);
		});
		// 本地预览
		await Store.location.startPreview((res) => {
			console.log('本地预览', res);
		})
	},
	// 远端加入房间后进行 (多人)
	remotenableVideo: function(data) {
		console.log("远端加入房间后进行", Store.remoteLits);
		console.log("远端加入房间后进行", data);
		Store.remoteLits.map(async item => {
			if (item.peerid == data.uid) {
				console.log("频道", Store.channel);
				await item.remote[0].setupRemoteVideo({
					"uid": item.peerid,
					"channelId": Store.channel,
					"renderMode": 0,
					"mirrorMode": 0
				}, (res) => {
					console.log('渲染远端视频', res);
				});
				// 本地预览
				await item.remote[0].startPreview((res) => {
					console.log('远端本地预览', res);
				});
			}
		})
	},
	/**
	 * 如果你只在一个页面写 可以直接调 destory 
		如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel
	 */
	// 挂断
	leave: function() {
		// 离开频道
		rtcModule.leaveChannel((res) => {
			console.log("调用离开频道 leaveChannel", res);
		});
	},
	// 销毁实例
	destroyRtc: function() {
		// 销毁实例
		rtcModule.destroyRtc((res) => {
			console.log("销毁实例", res);
			// if (res.code === 0) {
			// 	RTCUtils.destroyRtc();
			// }
		});
	},
	/**
	 * 旁路推流 
	 */
	LiveTransco: async function(urlLive, Enabled = true) {
		// 默认当前频道所有成员推流
		// 获取所有成员视频样式
		let oAlls = [];
		console.log(Store);
		// 角色非观众
		if (Store.roleChoices != 2) {
			// 添加本地成员
			oAlls.push(new TranscodingUser(Store.uid, {
				width: 280,
				height: 210,
				x: 0,
				y: 0
			}));
		}
		// 添加远端成员
		Store.remoteLits.map((item, index) => {
			let oIndex = oAlls.length > 0 ? (index + 1) : index;
			oAlls.push(new TranscodingUser(item.peerid, {
				width: 280,
				height: 210,
				x: (oIndex % 3) * 280,
				y: Math.floor(oIndex / 3) * 210,
			}))
		});
		console.log(oAlls);
		// 设置旁路推流的视频样式(三列)
		await rtcModule.setLiveTranscoding({
			"transcoding": new LiveTranscoding(oAlls, {
				width: 840,
				height: Math.ceil(oAlls.length / 3) * 210,
			})
		}, (ret) => {
			console.log(ret);
		});
		// 添加旁路推流
		await rtcModule.addPublishStreamUrl({
			url: urlLive,
			transcodingEnabled: Enabled
		}, (res) => {
			console.log("添加旁路推流", res);
		});
	},
	// 取消推流
	removePublishStreamUrl: function(urlLive) {
		// 添加旁路推流
		rtcModule.removePublishStreamUrl({
			url: urlLive,
		}, (res) => {
			console.log("取消旁路推流", res);
		});
	}
}

// 监测视频容器
uni.$on("CanvasView", data => {
	// 本地视频容器
	if (data.location) {
		Store = Object.assign(Store, {
			location: data.location
		});
		// 远端视频容器
	} else if (data.peerid && data.remote) {
		const oa = Store.remoteLits.filter(item => {
			return item.peerid == data.peerid
		});
		if (oa.length == 0) {
			Store.remoteLits.push(data);
			setTimeout(() => {
				RTC.remotenableVideo({
					uid: data.peerid
				});
			}, 500);
		}
	}
})

export default RTC;
