<template>
  <div class="container solution-high-paid">
    <!-- 头图 -->
    <div
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="desc">
          <p>投资界富豪云集，常见的是以自然人名义、有限公司、有限合伙来投资。</p>
        </div>
      </div>
    </div>

    <!-- 就自然人股权投资而言: -->
    <div class="full-box scene-box">
      <div class="container-screen-width border-bottom">
        <div class="box-title">就自然人股权投资而言:</div>
        <div class="flex-row two-cols">
          <div v-for="(card, index) in repectList" :key="index" class="margin-card scene-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
              </div>
              <!-- <div class="card-title">{{ card.title }}</div> -->
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 如何给自然人提供税务解决方案呢？ -->
      <div class="container-screen-width plan-box">
        <div class="box-title">如何给自然人提供税务解决方案呢？</div>
        <div class="flex-row two-cols">
          <div v-for="(card, index) in plans" :key="index" class="card plan-card">
            <div :style="card.img | imgbg" class="imgbox">
              <div class="text easing">
                <div class="card-title">{{ card.title }}</div>
                <div class="card-desc">{{ card.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="box-title-bottom">一个良好的投资架构和模式，将极大程度上帮助个人投资人在不同阶段，控制现金流出，控制利润水平和税赋水平。</div>
      </div>
    </div>
  </div>
</template>
<script>
import { imgbg } from '@/components/utils/filters'
import solutionData from '@/components/config/solution'

export default {
  name: 'SolutionInvestment',
  filters: { imgbg, },
  head () {
    return {
      title: '完税金 - 投资收益型解决方案',
    }
  },
  data () {
    return {
      repectList: solutionData.investment.repectList,
      plans: solutionData.investment.plans,
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "../../style/conf.scss";

// .solution-high-paid {
//   background-image: linear-gradient(#FB5A40, #FB7940);
// }
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-width: $PAGE_MAX_WIDTH;
}

.head-img-bg {
  background-color: #FB7940;
  background-image: linear-gradient(#FB5A40, #FB7940);
  background-image: url('/fallback/img-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  height: 217.44px;
  padding-top: 96px - 4px;

  .desc {
    // width:770px;
    height:26px;
    font-size:25px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:32px;

    margin-bottom: 91.8px - 4px;
  }
}

.scene-box {
  height: 1350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  // padding-top: 143px;

  .border-bottom {
    height: 559px;
    border-bottom: 1px solid rgba(210,210,210,1);
  }

  .box-title {
    // margin-bottom: 50px;
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .box-title-bottom {
    margin-top: 71px - 3.5px;

    font-size:18px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:25px;
  }

  // cards
  .two-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    .scene-card {
      width: 428px;
      margin-right: 100px;
      margin-left: 100px;
      text-align: center;

      .align-center {
        text-align: center;
        height: 113px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin-bottom: 51px;
      }
      .icon {
        height: 113px;
      }

      .card-desc {
        width:100%;
        // height:17px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:$GRAY;
        line-height:25px;
        // opacity:;

        text-align: center;
      }
    }
  }

}
// 如何给自然人提供税务解决方案呢？
.plan-box {
  // margin-top: 132.7px;

  .box-title {
    // margin-bottom: 120px;
  }

  .two-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .plan-card {
      cursor: pointer;
      width: 690px;
      height: 386px;
      margin-bottom: 20px;

      &:nth-child(odd) {
        margin-right: 20px;
      }

      &:hover {
        .imgbox {
        }
        .text {
          background-color: rgba(0,0,0,0.4);
        }
      }

      .imgbox {
        width: 100%;
        height: 100%;
        // margin-right: 131px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);

        &:last-of-type {
          margin-right: 0px;
        }
      }
      .text {
        text-align: left;
        // margin-top: 65px;
        padding-left: 76px;
        padding-right: 194px;
        padding-top: 258px - 4px;

        height: 100%;

        .card-desc {
          // width:424px;
          height:65px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:500;
          color: rgba(255,255,255,0.8);
          line-height:25px;
        }
      }
    }
  }
}

</style>
