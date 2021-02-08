<template>
  <div class="container solution-high-paid">
    <!-- 头图 -->
    <div
      :style="imgRetangle|imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="icon">
          <img :src="ImgProfit.iconMoney" alt="" class="icon">
        </div>
        <div class="desc">
          <p class="sub-title margin-bottom-line">经大数据分析显示，2017年共享服务提供者7000万人，2018年共享服务提供者7500万人，预计到2020年，中国自由职业者兼职人数将占总劳动力的43%。</p>

          <p class="sub-title">在这一庞大的服务提供者群体中，绝大多数都是兼职人员。但随着市场的发展，部分领域的服务提供者出现了专职化趋势，一批基于共享平台的专职司机、直销、骑手、主播等开始大量涌现。</p>
          <p class="sub-title">共享经济平台也成为“双创”活动的重要平台， 为一批有梦青年的创业式就业提供了大量机会。</p>
        </div>
      </div>
    </div>

    <!-- 就自然人股权投资而言: -->
    <div class="full-box scene-box">
      <div class="container-screen-width border-bottom">
        <div class="box-title">
          <p>但在双方合作时，</p>
          <p>财务和税务方面的问题却是无法避免的：</p>
        </div>
        <LaborGraph></LaborGraph>

        <div class="scene-bottom">
          <div class="title">企业痛点</div>
          <div class="desc">用工风险、报税风险、劳动关系风险、票据问题、企业账务平账问题、劳务费税点高</div>
        </div>
      </div>

      <div class="container-screen-width plan-box">
        <div class="box-title">
          有没有合规低成本的税务解决方案呢？
          <!-- <p>对于企业利润高、所得税多的问题，</p> -->
          <!-- <p>完税金有如下税务筹划方案：</p> -->
        </div>
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
      </div>
    </div>
  </div>
</template>
<script>
import { imgbg } from '@/components/utils/filters'
import solutionData from '@/components/config/solution'
import ImgProfit from '@/assets/solution-profit'
import ImgHighLabor from '@/assets/solution-high-labor'
import LaborGraph from '@/components/LaborGraph'

export default {
  name: 'SolutionProfit',
  components: {
    LaborGraph,
  },
  filters: { imgbg, },
  head () {
    return {
      title: '完税金 - 劳务收入型解决方案',
    }
  },
  data () {
    return {
      plans: solutionData.highLabor.plans,
      ImgProfit,
      imgRetangle: ImgHighLabor.imgBgRetangleMulti,
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "../../style/conf.scss";

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
  background-color: #FB5640;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-position: 50%;

  height: 510px;
  padding-top: 107px;

  .icon {
    width: 115px;
    height: 115px;

    margin: 0 auto;
    margin-bottom: 76px;
  }
  .desc {
    text-align: center;
    margin: 0 auto;

    .title {
      // width:520px;
      // height:23px;
      font-size:25px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:25px;
    }
    .sub-title {
      margin: 0 auto;

      width:913px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,0.8);
      line-height:25px;

      &.margin-bottom-line {
        margin-bottom: 30px;
      }
    }
  }
}

.scene-box {
  height: 1547px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .border-bottom {
    height: 888px;
    border-bottom: 1px solid rgba(210,210,210,1);
    text-align: center;
    // padding-top: 172px - 3px;

    .box-title {
    }
    .scene-bottom {
      margin-top: 81px - 3px;

      .title {
        font-size:35px;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(251,75,66,1);
        line-height:33px;
      }
      .desc {
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:25px;

        margin-top: 25px;
      }
    }
  }

  .title-sub-title {
    margin: 0 auto;
    width:921px;
    // height:42px;
    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    // color:rgba(0,0,0,0.8);
    color:$GRAY;
    line-height:25px;
    // opacity:0.8;
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
      // height: 510.42px;
      height: 386px;
      margin-bottom: 20px;

      &:nth-child(odd) {
        margin-right: 20px;
      }

      &:hover {
        .text {
          background-color: rgba(0,0,0,0.4);
        }
      }

      .imgbox {
        width: 100%;
        height: 100%;
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
        padding-top: 273px - 4px;

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
