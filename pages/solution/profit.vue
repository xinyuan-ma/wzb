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
          <p class="title">目前我们国家对于企业利润的征税方式主要如下：</p>
          <p class="sub-title">企业利润征收25%的企业所得税。根据利润扣除所得税后的金额，作为股东分红收益，转到个人账户需要收取20%的个人所得税。</p>
        </div>
      </div>
    </div>

    <!-- 就自然人股权投资而言: -->
    <div class="full-box scene-box">
      <div class="container-screen-width border-bottom">
        <div class="title-sub-title">举个例子：一个企业实现了一年100万的利润，其应交企业所得税为25万元，剩余的75万需要在分红时缴纳15万个人所得税，所以对于企业的股东而言，从利润到最终的利润分取，一共缴纳了40%的税金。</div>
      </div>

      <!-- 如何给自然人提供税务解决方案呢？ -->
      <div class="container-screen-width plan-box">
        <div class="box-title">
          <p>对于企业利润高、所得税多的问题，</p>
          <p>完税金有如下税务筹划方案：</p>
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

        <!-- <div class="box-title-bottom">一个良好的投资架构和模式，将极大程度上帮助个人投资人在不同阶段，控制现金流出，控制利润水平和税赋水平。</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { imgbg } from '@/components/utils/filters'
import solutionData from '@/components/config/solution'
import ImgProfit from '@/assets/solution-profit'
import ImgHighLabor from '@/assets/solution-high-labor'

export default {
  name: 'SolutionProfit',
  filters: { imgbg, },
  head () {
    return {
      title: '完税金 - 企业利润型解决方案',
    }
  },
  data () {
    return {
      // repectList: solutionData.profit.repectList,
      plans: solutionData.profit.plans,
      ImgProfit,
      imgRetangle: ImgHighLabor.imgBgRetangleMulti,
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
  // background-image: url('/fallback/img-bg.png');
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
      // width:926px;
      // height:17px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,0.8);
      line-height:25px;
      // opacity:0.8;

      margin-top: 30px;
    }
  }
}

.scene-box {
  height: 965px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .border-bottom {
    height: 260px;
    border-bottom: 1px solid rgba(210,210,210,1);
    padding-top: 101px;
    text-align: center;
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
        // background-size: 108%;
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
