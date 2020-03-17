<template>
  <div class="lucky">
    <div class="container">
      <div class="turntable-wrapper">
        <div class="luck-wrapper">
          <p class="integral">我的积分: <span>1000</span></p>
          <ul class="nineGrid">
            <li class="row">
              <div
                v-for="(n, key) in 3"
                :key="n"
                :class="index === key ? `active` : ``"
              >
                <div class="wrapper">
                  <img :src="luckIcon" alt="" />
                  <p>8金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div :class="index === 7 ? 'active' : ''">
                <div class="wrapper">
                  <img :src="luckIcon" alt="" />
                  <p>128金转</p>
                </div>
                <div class="mask"></div>
              </div>
              <div class="getLuck" @click="startLottery">
                <p>立即<br />抽奖</p>
              </div>
              <div :class="index === 3 ? 'active' : ''">
                <div class="wrapper">
                  <img :src="luckIcon" alt="" />
                  <p>128金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div
                v-for="(n, key) in 3"
                :key="n"
                :class="index === 6 - key ? `active` : ``"
              >
                <div class="wrapper">
                  <img :src="luckIcon" alt="" />
                  <p>256金转</p>
                </div>
                <div class="mask"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="rule">
          <p class="rule-title">活动规则</p>
          <ul class="rule-main">
            <li>1、活动时间：2017年9月8日起；</li>
            <li>2、活动期间，股事汇用户每次抽奖消耗20积分，抽奖次数不限</li>
            <li>3、金钻可用于向投顾提问、送礼、赞赏；</li>
            <li>
              4、积分赚取：每日签到、分享文章/问答/直播间、点赞、金钻充值均可获得积分哦
            </li>
            <li>5、活动最终解释权归股事汇所有。</li>
          </ul>
        </div>
        <van-overlay :show="showToast" @click="closeToast">
          <div class="toastWrapper" @click.stop>
            <van-icon
              name="close"
              @click="closeToast"
              size="0.6rem"
              color="grey"
              class="toastIcon"
            ></van-icon>
            <div class="toastContent">拉了</div>
          </div>
        </van-overlay>
      </div>
    </div>
  </div>
</template>
<script>
import { Overlay, Icon } from "vant";
export default {
  name: "lucky",
  components: {
    "van-overlay": Overlay,
    "van-icon": Icon
  },
  data() {
    return {
      title: "积分转盘",
      index: -1, // 当前转动到哪个位置，起点位置
      count: 8, // 总共有多少个位置
      timer: 0, // 每次转动定时器
      speed: 200, // 初始转动速度
      times: 0, // 转动次数
      cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1, // 中奖位置
      click: true,
      showToast: false,
      toastType: "luck",
      luckIcon: require("../assets/lucky/luck-icon.png")
    };
  },
  methods: {
    // 开始抽奖
    startLottery() {
      if (!this.click) {
        return;
      }
      this.closeToast();
      this.speed = 200;
      this.click = false;
      this.startRoll();
    },

    // 开始转动
    startRoll() {
      this.times += 1; // 转动次数
      this.oneRoll(); // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer); // 清除转动定时器，停止转动
        this.prize = -1;
        this.times = 0;
        this.click = true;
        this.showToast = true;
        this.toastType = "comeOn";
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10; // 加快转动速度
        } else if (this.times === this.cycle) {
          // 随机获得一个中奖位置
          const index = parseInt(Math.random() * 10, 0) || 0;
          this.prize = index;
          if (this.prize > 7) {
            this.prize = 7;
          }
        } else if (
          this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.index === 7) ||
            this.prize === this.index + 1)
        ) {
          this.speed += 110;
        } else {
          this.speed += 20;
        }

        if (this.speed < 40) {
          this.speed = 40;
        }
        this.timer = setTimeout(this.startRoll, this.speed);
      }
    },

    // 每一次转动
    oneRoll() {
      let index = this.index; // 当前转动到哪个位置
      const count = this.count; // 总共有多少个位置
      index += 1;
      if (index > count - 1) {
        index = 0;
      }
      this.index = index;
    },

    // 关闭弹出框
    closeToast() {
      this.showToast = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.lucky {
  background: greenyellow;
  height: 100vh;
  .turntable-wrapper {
    padding: 0 0.38rem;
    position: relative;
    // @include background-cover("background-luck.png");
    padding-top: 1.21rem;

    .luck-wrapper {
      width: 3rem;
      height: 3.77rem;
      margin: 0 auto;
      position: relative;
      // @include background-cover("background-turntable.png");

      .integral {
        width: 100%;
        color: #6d2d00;
        font-size: 0.16rem;
        font-weight: normal;
        text-align: center;
        position: absolute;
        top: 0.58rem;

        span {
          font-weight: 600;
          color: #ff2f4d;
        }
      }

      .nineGrid {
        position: absolute;
        top: 0.86rem;
        left: 50%;
        margin-left: -1.3rem;
        width: 2.6rem;
        height: 2.6rem;

        li {
          height: 0.8rem;
          display: flex;
          margin-top: 0.05rem;
          > div {
            flex: 1;
            margin-right: 0.05rem;
            height: 100%;
            text-align: center;
            position: relative;

            .wrapper {
              width: 100%;
              height: 100%;
              margin: 0;
              // @include background-cover("background-grid.png");
            }

            img {
              width: 0.46rem;
              height: 0.38rem;
              vertical-align: middle;
              margin-top: 0.08rem;
            }

            .mask {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.5;
              border-radius: 0.1rem;
              background-color: #000;
              display: none;
            }
          }

          > div.active {
            .mask {
              display: block;
            }
          }

          > div:first-child {
            margin-left: 0.05rem;
          }

          > div.getLuck {
            background: blue;
            font-size: 0;

            p {
              font-size: 0.2rem;
              font-weight: 600;
              color: #fff;
              line-height: 1.1;
              margin-top: 0.11rem;
            }
          }
        }

        li:last-child {
          margin-bottom: 0.05rem;
        }
      }
    }

    .share {
      width: 1.6rem;
      height: 0.42rem;
      margin: 0 auto;
      text-align: center;
      line-height: 0.42rem;
      // @include background-cover("luckShrae.png");
      margin-top: 0.22rem;
      color: #6d2d00;
      font-size: 0.16rem;
      font-weight: 600;

      .icon-go {
        @include size(0.3rem);
        // @include background-cover("goShare-icon.png");
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 0.02rem;
      }
    }

    .rule {
      margin-top: 0.14rem;
      color: #fff;
      font-size: 0.14rem;
      padding-bottom: 0.39rem;

      .rule-title {
        text-align: center;
        position: relative;
        font-size: 0.16rem;
        margin-bottom: 0.14rem;
      }

      .rule-title:before,
      .rule-title:after {
        content: "";
        position: absolute;
        top: 52%;
        background: #fff;
        width: 30%;
        height: px3rem(1);
      }

      .rule-title:before {
        left: 0;
      }

      .rule-title:after {
        right: 0;
      }
    }
    .toastWrapper {
      position: relative;
      width: 5rem;
      height: 5rem;
      margin: 0 auto;
      margin-top: calc(50vh - 2.5rem);
      background: #fff;
      border-radius: 10px;
    }
    .toastIcon {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
    }
    .toastContent {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
    }
  }
}
</style>
