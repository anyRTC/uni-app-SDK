// 推流封装
"use strict";
Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.LiveTranscoding = exports.Color = exports.TranscodingUser = exports.RtcImage = void 0;

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

class LiveTranscoding {

	constructor(transcodingUsers, params) {
		_defineProperty(this, "width", void 0);

		_defineProperty(this, "height", void 0);

		_defineProperty(this, "videoBitrate", void 0);

		_defineProperty(this, "videoFramerate", void 0);

		_defineProperty(this, "lowLatency", void 0);

		_defineProperty(this, "videoGop", void 0);

		_defineProperty(this, "watermark", void 0);

		_defineProperty(this, "backgroundImage", void 0);

		_defineProperty(this, "audioSampleRate", void 0);

		_defineProperty(this, "audioBitrate", void 0);

		_defineProperty(this, "audioChannels", void 0);

		_defineProperty(this, "audioCodecProfile", void 0);

		_defineProperty(this, "videoCodecProfile", void 0);

		_defineProperty(this, "backgroundColor", void 0);

		_defineProperty(this, "userConfigExtraInfo", void 0);

		_defineProperty(this, "transcodingUsers", void 0);

		if (params) {
			this.width = params.width;
			this.height = params.height;
			this.videoBitrate = params.videoBitrate;
			this.videoFramerate = params.videoFramerate;
			this.lowLatency = params.lowLatency;
			this.videoGop = params.videoGop;
			this.watermark = params.watermark;
			this.backgroundImage = params.backgroundImage;
			this.audioSampleRate = params.audioSampleRate;
			this.audioBitrate = params.audioBitrate;
			this.audioChannels = params.audioChannels;
			this.audioCodecProfile = params.audioCodecProfile;
			this.videoCodecProfile = params.videoCodecProfile;
			this.backgroundColor = params.backgroundColor;
			this.userConfigExtraInfo = params.userConfigExtraInfo;
		}

		this.transcodingUsers = transcodingUsers;
	}

}
exports.LiveTranscoding = LiveTranscoding;

class TranscodingUser {

	constructor(uid, params) {
		_defineProperty(this, "uid", void 0);

		_defineProperty(this, "x", void 0);

		_defineProperty(this, "y", void 0);

		_defineProperty(this, "width", void 0);

		_defineProperty(this, "height", void 0);

		_defineProperty(this, "zOrder", void 0);

		_defineProperty(this, "alpha", void 0);

		_defineProperty(this, "audioChannel", void 0);

		this.uid = uid;

		if (params) {
			this.x = params.x;
			this.y = params.y;
			this.width = params.width;
			this.height = params.height;
			this.zOrder = params.zOrder;
			this.alpha = params.alpha;
			this.audioChannel = params.audioChannel;
		}
	}

}
exports.TranscodingUser = TranscodingUser;

class Color {

	constructor(red, green, blue) {
		_defineProperty(this, "red", void 0);

		_defineProperty(this, "green", void 0);

		_defineProperty(this, "blue", void 0);

		this.red = red;
		this.green = green;
		this.blue = blue;
	}

}
exports.Color = Color;

class RtcImage {

	constructor(url, params) {
		_defineProperty(this, "url", void 0);

		_defineProperty(this, "x", void 0);

		_defineProperty(this, "y", void 0);

		_defineProperty(this, "width", void 0);

		_defineProperty(this, "height", void 0);

		this.url = url;

		if (params) {
			this.x = params.x;
			this.y = params.y;
			this.width = params.width;
			this.height = params.height;
		}
	}
}

exports.RtcImage = RtcImage;
