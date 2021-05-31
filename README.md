## anyRTC 音视频SDK

anyRTC移动视频直播、实时互动连麦视频(音频)直播、小程序互动直播、视频会议等解决方案提供商。本插件提供实时音视频能力，支持Android、iOS。

### 集成中如需帮助，可以通过以下方式联系我们：

* [anyRTC官网](https://www.anyrtc.io)，右下方在线客服
* QQ技术交流群：580477436
* 联系电话：021-65650071
* Email：hi@dync.cc

#### 跑通代码需要自定义基座，并且使用iOS和安卓真机运行

#### 概要

* anyRTC音视频品质首选，每月免费赠送1万分钟实时音频；
* anyRTC提供rtm服务，轻松实现交互逻辑；
* 为了帮助中小企业在音视频领域轻松打造爆款应用，详情[anyRTC创业扶持计划。](https://www.anyrtc.io/activity)

#### 快速集成


* 下载示例工程，前往[anyRTC官网](https://www.anyrtc.io)注册账号

* 创建应用，获取应用的App ID。

![appid](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-xc5d868hqlyo335e89/1c346660-4656-11eb-8ff1-d5dcf8779628.png)

* 下载插件示例工程，制作自定义基座，主要步骤如图，证书问题，请参照申请证书说明。

![自定义基座](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-xc5d868hqlyo335e89/e7b28eb0-4657-11eb-8ff1-d5dcf8779628.png)

* 运行自定义基座
![运行自定义基座](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-xc5d868hqlyo335e89/ac833b40-4658-11eb-8ff1-d5dcf8779628.png)

* 运行示例工程开始体验

### 一、AR-RtcModule

函数名 | 参数 | 说明
---|---|---
create | appId(String) | 创建rtc对象
setCallBack | 无 | 注册sdk事件回调
setParameters   | 咨询客服 | 通过 JSON 配置 SDK 提供技术预览或特别定制功能
joinChannel | channelId(String)、uid(String)、token(String) | 加入房间
enableAudio | 无 | 开启音频
enableVideo | 无 | 开启视频
disableAudio | 无 | 禁用音频
disableVideo | 无 | 禁用视频
setAudioProfile | profile(int)、scenario(int) | 设置声音的profile
enableInEarMonitoring | enabled(bool) | 开启耳返
setInEarMonitoringVolume | volume(int) | 设置耳返音量
setChannelProfile | profile(int) | 设置模式
setClientRole | role(int) | 设置用户角色
playEffect | soundId(int)、filePath(string)、loopCount(int)、pitch(double)、pan(double)、gain(double)、publish(bool) | 播放音效
stopAllEffects | 无 | 停止播放所有音频效果
stopEffect | soundId(int) | 停止播放音频效果
adjustAudioMixingVolume | volume(int) | 音频混合音量
startAudioMixing | filePath(string)、loopback(bool)、replace(bool)、cycle(int) | 开始播放混音
stopAudioMixing | 无 | 停止播放混音
leaveChannel | 无 | 离开频道
destroyRtc | 无 | 释放ARtcEngineKit对象资源
switchCamera | 无 | 切换摄像头
setDefaultAudioRouteToSpeakerphone | defaultToSpeaker(bool) | 设置默认音频路由
setEnableSpeakerphone | enabled(bool) | 设置是否将音频路由到扬声器或听筒
isSpeakerphoneEnabled | 无 | 检查扬声器是否已启用
enableAudioVolumeIndication | interval(int)、smooth(int)、report_vad(bool) | 是否开启音频检测
adjustRecordingSignalVolume | volume(int) | 录音音量。值的范围在0到400之间
adjustUserPlaybackSignalVolume | uid(string)、volume(int) | 指定的远程用户的播放音量。值的范围为0到100
adjustPlaybackSignalVolume | volume(int) | 所有远程用户的播放音量。值的范围为0到400
enableLocalAudio | enabled(bool) | 启用本地音频模块，即启动本地音频捕获和处理
enableLocalVideo | enabled(bool) | 启用设置是否启用/禁用本地视频，包括捕获器、渲染器和发送器
muteLocalAudioStream | muted(bool) | 发送或停止本地音频流
muteLocalVideoStream | muted(bool) | 发送或停止本地视频流
muteRemoteAudioStream | uid(string)、muted(bool) | 接收或停止接收指定的远程用户的音频流
muteRemoteVideoStream | uid(string)、muted(bool) | 设置是否接收/停止接收指定远程用户的视频流
muteAllRemoteAudioStreams | muted(bool) | 是否接收/停止接收所有远程音频流
muteAllRemoteVideoStreams | muted(bool) | 是否接收/停止接收所有远程视频流
setDefaultMuteAllRemoteAudioStreams | muted(bool) | 设置默认情况下是否接收/停止接收所有远程音频流
setDefaultMuteAllRemoteVideoStreams | muted(bool) | 设置默认情况下是否接收/停止接收所有远程视频流
setCameraTorchOn | isOn(bool) | 是否开启闪光灯
isCameraTorchSupported | 无 | 是否支持闪光灯
setVideoEncoderConfiguration | width(int)、height(int)、frameRate(int)、bitrate(int)、orientationMode(int) | 设置视频编码配置

#### callBack

{"code": 0}

[code值详见anyRTC文档](https://docs.anyrtc.io)

### 二、AR-CanvasView

函数名 | 参数 | 说明
---|---|---
startPreview | 无 | 开启视频预览
stopPreview | 无 | 停止视频预览
setupLocalVideo | uid(string)、channelId(string)、renderMode(int)、mirrorMode(int) | 初始化本地视图
setupRemoteVideo | uid(string)、channelId(string)、renderMode(int)、mirrorMode(int) | 初始化远端用户视图


### 三、事件回调

1. 发生警告回调(onWarning)
```
{"engineEvent": "onWarning", "warningCode": 0}
```

2.发生错误回调(onError)
```
{"engineEvent": "onError", "errorCode": 0}
```

3.加入频道回调(onJoinChannelSuccess)
```
{"engineEvent": "onJoinChannelSuccess", "channel": "909090", "uid": "123", "elapsed": 0}
```

4.重新加入频道回调(onRejoinChannelSuccess)
```
{"engineEvent": "onRejoinChannelSuccess", "channel": "909090", "uid": "123", "elapsed": 0]

```

5.已离开频道回调(onLeaveChannel)
```
{"engineEvent": "onLeaveChannel", "duration": 0, "txBytes": 0, "rxBytes": 0, "txAudioBytes": 0, "txVideoBytes": 0, "rxAudioBytes": 0, "rxVideoBytes": 0, "txKBitrate": 0, "rxKBitrate": 0, "txAudioKBitrate": 0, "rxAudioKBitrate": 0, "txVideoKBitrate": 0, "rxVideoKBitrate": 0, "lastmileDelay": 0, "txPacketLossRate": 0, "rxPacketLossRate": 0, "userCount": 0, "cpuAppUsage": 0.0, "cpuTotalUsage": 0.0, "gatewayRtt": 0, "memoryAppUsageRatio": 0.0, "memoryTotalUsageRatio": 0.0, "memoryAppUsageInKbytes": 0}
```

6.用户角色已切换回调(onClientRoleChanged)
```
{"engineEvent": "onClientRoleChanged", "oldRole": 0, "newRole": 1}
```

7.远端用户/主播加入回调(onUserJoined)
```
{"engineEvent": "onUserJoined", "uid": "123", "elapsed": 0}
```

8.远端用户（通信场景）/主播（直播场景）离开当前频道回调(onUserOffline)
```
{"engineEvent": "onUserOffline", "uid": "123", "reason": 0}
```

9.网络连接状态已改变回调(onConnectionStateChanged)
```
{"engineEvent": "onConnectionStateChanged", "state": 0, "reason": 0}
```

10.本地网络类型发生改变回调(onNetworkTypeChanged)
```
{"engineEvent": "onNetworkTypeChanged", "type": 0}
```

11.网络连接中断，且 SDK 无法在 10 秒内连接服务器回调(onConnectionLost)
```
{"engineEvent": "onConnectionLost"}
```

12.Token 服务即将过期回调(onTokenPrivilegeWillExpire)
```
{"engineEvent": "onTokenPrivilegeWillExpire", "token": token}
```

13.Token 过期回调(onRequestToken)
```
{"engineEvent": "onRequestToken"}
```

14.提示频道内谁正在说话、说话者音量及本地用户是否在说话的回调(onAudioVolumeIndication)
```
{"engineEvent": "onAudioVolumeIndication", "totalVolume": 0, "speakers": speakersArr}
```

15.监测到活跃用户的回调(onActiveSpeaker)
```
{"engineEvent": "onActiveSpeaker", "speakerUid": "123"}
```

16.已发送本地音频首帧的回调(onFirstLocalAudioFrame)
```
{"engineEvent": "onFirstLocalAudioFrame", "elapsed": 0}
```

17.已显示本地视频首帧的回调(onFirstLocalVideoFrame)
```
{"engineEvent": "onFirstLocalVideoFrame", "width": 480, "height": 640, "elapsed": 0}
```

18.远端音频流状态发生改变回调(onRemoteAudioStateChanged)
```
{"engineEvent": "onRemoteAudioStateChanged", "uid": "123", "state": 0, "reason": 0, "elapsed": 0}
```

19.本地音频状态发生改变回调(onLocalAudioStateChanged)
```
{"engineEvent": "onLocalAudioStateChanged", "state": 0, "error": 0}
```

20.已显示远端视频首帧回调(onFirstRemoteVideoFrame)
```
{"engineEvent": "onFirstRemoteVideoFrame", "uid": "123", "width": 480, "height": 640, "elapsed": 0}
```

21.音频发布状态改变回调(onAudioPublishStateChanged)
```
{"engineEvent": "onAudioPublishStateChanged", "channel": "909090", "oldState": 0, "newState": 1, "elapseSinceLastState": 0}
```

22.视频发布状态改变回调(onVideoPublishStateChanged)
```
{"engineEvent": "onVideoPublishStateChanged", "channel": "909090", "oldState": 0, "newState": 1, "elapseSinceLastState": 0}
```

23.音频订阅状态发生改变回调(onAudioSubscribeStateChanged)
```
{"engineEvent": "onAudioSubscribeStateChanged", "channel": "909090", "oldState": 0, "newState": 1, "elapseSinceLastState": 0}
```

24.视频订阅状态发生改变回调(onVideoSubscribeStateChanged)
```
{"engineEvent": "onVideoSubscribeStateChanged", "channel": "909090", "oldState": 0, "newState": 1, "elapseSinceLastState": 0}
```

25.本地或远端视频大小和旋转信息发生改变回调(onVideoSizeChanged)
```
{"engineEvent": "onVideoSizeChanged", "uid": "123", "width": 480, "height": 640, "rotation": 0}
```

26.远端视频状态发生改变回调(onRemoteVideoStateChanged)
```
{"engineEvent": "onRemoteVideoStateChanged", "uid": "123", "state": 0, "reason": 0, "elapsed": 0}
```

27.地视频状态发生改变回调(onLocalVideoStateChanged)
```
{"engineEvent": "onLocalVideoStateChanged", "state": 0, "error": 0}
```

28.通话中远端音频流的统计信息回调(onRemoteAudioStats)
```
{"engineEvent": "onRemoteAudioStats", "uid": "123", "quality": 0, "networkTransportDelay": 0, "jitterBufferDelay": 0, "audioLossRate": 0, "numChannels": 0, "receivedSampleRate": 0, "receivedBitrate": 0, "totalFrozenTime": 0, "frozenRate": 0}
```

29.当前通话统计回调。 该回调在通话或直播中每两秒触发一次。(onRtcStats)
```
{"engineEvent": "onRtcStats", "duration": 0, "txBytes": 0, "rxBytes": 0, "txAudioBytes": 0, "txVideoBytes": 0,
 "rxAudioBytes": 0, "rxVideoBytes": 0, "txKBitrate": 0, "rxKBitrate": 0, "txAudioKBitrate": 0, "rxAudioKBitrate": 0, "txVideoKBitrate": 0, "rxVideoKBitrate": 0, "lastmileDelay": 0, "txPacketLossRate": 0, "rxPacketLossRate": 0, "userCount": 0, "cpuAppUsage": 0, "cpuTotalUsage": 0.0, "gatewayRtt": 0, "memoryAppUsageRatio": 0.0, "memoryTotalUsageRatio": 0.0, "memoryAppUsageInKbytes": 0}
```

30.通话中每个用户的网络上下行 last mile 质量报告回调(onNetworkQuality)
```
{"engineEvent": "onNetworkQuality", "uid": "123", "txQuality": 0, "rxQuality": 0}
```

31.本地视频流统计信息回调(onLocalVideoStats)
```
{"engineEvent": "onLocalVideoStats", "sentBitrate": 0, "sentFrameRate": 0, "encoderOutputFrameRate": 0, "rendererOutputFrameRate": 0, "sentTargetBitrate": 0, "sentTargetFrameRate": 0, "qualityAdaptIndication": 0, "encodedBitrate": 0, "encodedFrameWidth": 640, "encodedFrameHeight": 480, "encodedFrameCount": 0, "codecType": 0}
```

32.通话中本地音频流的统计信息回调(onLocalAudioStats)
```
{"engineEvent": "onLocalAudioStats", "numChannels": 0, "sentSampleRate": 0, "sentBitrate": 0}
```

33.通话中远端视频流的统计信息回调(onRemoteVideoStats)
```
{"engineEvent": "onRemoteVideoStats", "uid": "123", "delay": 0, "width": 480, "height": 640, "receivedBitrate": 0, "decoderOutputFrameRate": 0, "rendererOutputFrameRate": 0, "packetLossRate": 0, "rxStreamType": 0, "totalFrozenTime": 0, "frozenRate": 0}

```

34.本地音乐文件播放已结束回调(onAudioMixingFinished)
```
{"engineEvent": "onAudioMixingFinished"}
```

35.本地音效文件播放已结束回调(onAudioEffectFinished)
```
{"engineEvent": "onAudioEffectFinished", "soundId": 6060}
```

36.RTMP 推流状态发生改变回调(onRtmpStreamingStateChanged)
```
{"engineEvent": "onRtmpStreamingStateChanged", "url": "", "state": 0, "errorCode": 0}
```

37.RTMP 推流事件回调(onRtmpStreamingEvent)
```
{"engineEvent": "onRtmpStreamingEvent", "url": "", "eventCode": 0}
```

38.开启旁路推流的结果回调(onStreamPublished)
```
{"engineEvent": "onStreamPublished", "url": "", "errorCode": 0}
```

39.停止旁路推流的结果回调(onStreamUnpublished)
```
{"engineEvent": "onStreamUnpublished", "url": ""}
```

40.旁路推流设置被更新回调(onTranscodingUpdated)
```
{"engineEvent": "onTranscodingUpdated"}
```

41.输入外部视频流状态回调(onStreamInjectedStatus)
```
{"engineEvent": "onStreamInjectedStatus", "url": "", "uid": "123", "status": 0}
```

42.音视频流回退事件回调(onRemoteSubscribeFallbackToAudioOnly)
```
{"engineEvent": "onRemoteSubscribeFallbackToAudioOnly", "isFallbackOrRecover": true, "uid": "123"}
```

43.媒体设备事件回调(onAudioRouteChanged)
```
{"engineEvent": "onAudioRouteChanged", "routing": 0}
```

44.报告本地人脸检测结果(onFacePositionChanged)
```
{"engineEvent": "onFacePositionChanged", "width": 640, "height": 480, "faces": facesArr}
```

45.跨频道媒体流转发状态发生改变回调(onChannelMediaRelayStateChanged)
```
{"engineEvent": "onChannelMediaRelayStateChanged", "state": 0, "error": 0}
```

46.跨频道媒体流转发事件回调(onChannelMediaRelayEvent)
```
{"engineEvent": "onChannelMediaRelayEvent", "event": 0}
```

47.已完成远端视频首帧解码回调(onFirstRemoteVideoDecoded)
```
{"engineEvent": "onFirstRemoteVideoDecoded", "uid": "123", "width": 640.0, "height": 480.0, "elapsed": 0}
```

48.已接收远端音频首帧的回调(onFirstRemoteAudioFrame)
```
{"engineEvent": "onFirstRemoteAudioFrame", "uid": "123", "elapsed": 0}
```

49.已解码远端音频首帧的回调(onFirstRemoteAudioDecoded)
```
{"engineEvent": "onFirstRemoteAudioDecoded", "uid": "123", "elapsed": 0}
```

50.远端用户暂停/重新发送视频回调(onUserMuteVideo)
```
{"engineEvent": "onUserMuteVideo", "uid": "123", "muted": true}
```

51.远端用户音频静音回调(onUserMuteAudio)
```
{"engineEvent": "onUserMuteAudio", "uid": "123", "muted": true}
```

52.其他用户启用/关闭视频回调(onUserEnableVideo)
```
{"engineEvent": "onUserEnableVideo", "uid": "123", "enabled": true}
```

53.其他用户启用/关闭本地视频回调(onUserEnableLocalVideo)
```
{"engineEvent": "onUserEnableLocalVideo", "uid": "123", "enabled": true}
```

54.麦克风状态已改变回调(onMicrophoneEnabled)
```
{"engineEvent": "onMicrophoneEnabled", "enabled": true}
```

55.网络连接中断回调(onConnectionInterrupted)
```
{"engineEvent": "onConnectionInterrupted"}
```

56.连接已被禁止回调(onConnectionBanned)
```
{"engineEvent": "onConnectionBanned"}
```

57.通话中远端音频流传输的统计信息回调(onRemoteAudioTransportStats)
```
{"engineEvent": "onRemoteAudioTransportStats", "uid": "123", "delay": 0, "lost": 0, "rxKBitRate": 0}
```

58.通话中远端视频流传输的统计信息回调(onRemoteVideoTransportStats)
```
{"engineEvent": "onRemoteVideoTransportStats", "uid": "123", "delay": 0, "lost": 0, "rxKBitRate": 0}
```

59.远端音频质量回调(onAudioQuality)
```
{"engineEvent": "onAudioQuality", "uid": "123", "quality": 0, "delay": 0, "lost": 0}
```

60.摄像头就绪回调(onCameraReady)
```
{"engineEvent": "onCameraReady"}
```

61.发生错误回调(onVideoStopped)
```
{"engineEvent": "onVideoStopped"}
```
