<template>
	<view class="content" :style="{width: windowWidth + 'px',height: windowHeight + 'px'}">
		<view style="padding: 120px 20px;">
			<!-- 场景选择 -->
			<radio-group @change="radioChange" style="display: flex;justify-content: space-around;padding: 30px 0;">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in scenarioLits" :key="item.value">
					<radio :value="item.value" :checked="index === scenario" />
					<text style="color: #FFFFFF;">{{item.name}}</text>
				</label>
			</radio-group>
			<!-- 频道输入 -->
			<view style="padding-bottom: 30px;">
				<input v-model="channel" class="channel" type="number" placeholder="请输入频道号" :maxlength="64" focus />
			</view>
			<view class="streaming" v-if="scenario === 1">
				<button :type="roleChoices === 1 ? 'primary' : 'default'" @click="roleChoices = 1">我是主播</button>
				<button :type="roleChoices === 2 ? 'primary' : 'default'" @click="roleChoices = 2">我是游客</button>
			</view>
			<view style="padding: 30px 0;">
				<button type="primary" @click="goBack">加入频道</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Config from "../../utils/config.js";
	export default {
		data() {
			return {
				// 输入的频道
				channel: "",
				// 场景选择
				scenarioLits: [{
						value: 0,
						name: '通信场景',
					},
					{
						value: 1,
						name: '直播场景',
					},
				],
				scenario: 0,
				// 直播场景下 角色选择 1 (主播) 2 (游客)
				roleChoices: 1,

				windowWidth: 200,
				windowHeight: 200,
			}
		},
		created() {
			// 默认频道
			this.channel = Config.channel;
			this.init();
		},
		methods: {
			async init() {
				const oInfo = await this.$Utils.getWidthHeight();
				this.windowWidth = oInfo.windowWidth;
				this.windowHeight = oInfo.windowHeight;
			},
			goBack() {
				// 没有填写 appid
				if (!Config.appid) {
					uni.showToast({
						title: '请前往 utils 文件夹的 config.js 文件中配置 appid',
						icon: 'none',
						duration: 3000
					});
					return
				}
				// 没有填写频道
				if (!this.channel) {
					uni.showToast({
						title: '请输入频道',
						icon: 'none',
						duration: 3000
					});
					return
				}
				// 传递数据
				const oInfo = JSON.stringify({
					appid: Config.appid,
					// anyRTC 实现通话的频道
					channel: this.channel + '',
					token: Config.token,
					// 默认 uid 标识或随机生成 uid 标识
					uid: Config.uid ?  Config.uid : this.$Utils.randomFn(6),
					scenario: this.scenario, // 通信场景
					roleChoices: this.roleChoices, // 直播场景下 角色选择 1 (主播) 2 (游客)
					// 旁路推流
					liveUrl: Config.liveUrl,
				})
				uni.reLaunch({
					url: 'rtcPage?info=' + oInfo,
					success(res) {
						console.log("成功", res);
					},
					fail(res) {
						console.log("失败", res);
					}
				});

			},
			// 场景选择
			radioChange(evt) {
				for (let i = 0; i < this.scenarioLits.length; i++) {
					if (this.scenarioLits[i].value === evt.detail.value) {
						this.scenario = i;
						break;
					}
				}
			},

		}
	}
</script>

<style scoped>
	.content {
		background-color: #0A1621;
	}

	.channel {
		height: 110rpx;
		padding: 0 26px;
		background-color: #2F3041;
		border-radius: 6px;
		color: #FFFFFF;
	}

	/* 直播场景 */
	.streaming {
		display: flex;
	}
</style>
