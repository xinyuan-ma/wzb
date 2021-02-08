<template>
  <div class="container solution-high-paid">
    <!-- 头图 -->
    <div
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="desc">
          <p>担任企业老板、股东或高管们，按照现行个税税率纳税，年所得96万元以上的税率达到45%，</p>
          <p>扣除税款后，年薪百万的高管实际拿到手只有50多万元。</p>
        </div>

        <div class="table">
          <div class="table-row table-header-row">
            <span v-for="(c, idx) in tableData.header" :key="idx" :class="[`col-${idx}`]" class="col">{{ c }}</span>
          </div>
          <div v-for="(row, idx) in tableData.rows" :key="idx" class="table-row">
            <span v-for="(c, i) in row" :key="i" :class="[`col-${i}`]" class="col">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 角度 -->
    <div class="full-box scene-box">
      <div class="container-screen-width border-bottom">
        <div class="flex-row two-cols">
          <div v-for="(card, index) in repectList" :key="index" class="card-mini scene-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
                <img :src="ImgHighPaid.iconWarning" alt="" class="icon-warning">
              </div>
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-screen-width text-rows">
        <p class="text">在大众创业万众创新的时代，国家为了鼓励创业、扶持中小微企业，相继推出了各种税收优惠政策。顺应国家政策、协助高管、创业者、</p>
        <p class="text margin-bottom-rows">自由职业者等高收入人群进行税筹优化的工具完税金应运而生。</p>

        <p class="text">企业通过资源整合，内部人力结构优化，和高管之间由劳动关系转变为合作关系，双方约定工作任务并且交付验收，当需要下发资金和缴</p>
        <p class="text">纳税款时，找到完税金，由完税金帮助解决报酬如何入账，及税务如何完成的问题。</p>
      </div>

      <div class="container-screen-width partner-box">
        <div class="box-title">合作模式</div>
        <div class="flex-row two-cols">
          <div v-for="(card, index) in partnerType" :key="index" class="card partner-card">
            <div :style="card.bg | imgbg" class="imgbox">
              <img :src="card.icon" alt="" class="icon">
            </div>
            <div class="text easing">
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imgbg } from '@/components/utils/filters'
import ImgHighPaid from '@/assets/solution-high-paid'
import solutionData from '@/components/config/solution'

export default {
  name: 'SolutionHighPaid',
  filters: { imgbg, },
  head () {
    return {
      title: '完税金 - 高新收入型解决方案',
    }
  },
  data () {
    return {
      ImgHighPaid,
      tableData: solutionData.highPaid.table,
      repectList: solutionData.highPaid.repectList,
      partnerType: solutionData.highPaid.partnerType,
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

  height: 838px;
  padding-top: 76px - 4px;

  .desc {
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
    margin-bottom: 68px - 4px;
  }

  .table {
    width: 1020px;
    margin: 0 auto;

    .table-row {
      height: 69.42px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      border-radius:4px;
      background:rgba(245,245,245,0.25);
      // width:166px;
      // height:17px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:25px;
      margin-bottom: 1px;

      // header
      &.table-header-row {
        background:rgba(245,245,245,1);
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,1);
        line-height:25px;

        .col::after {
            background-color: black;
          }
      }

      .col {
        display: inline-block;
        position: relative;
        padding-left: 25px;

        &::after {
          display: inline-block;
          content: ' ';
          width: 1px;
          height: 14px;
          // background-color: black;
          background-color:rgba(255,255,255,1);
          position: absolute;
          top: 5.5px;
          right: 0px;
        }
      }
      .col-0 { width: 171.5px; text-align: center; padding-left: 0px; }
      .col-1 { width: 400.17px; text-align: left; }
      .col-2 { width: 208.25px; text-align: left; }
      .col-3 {
        width: 237.85px;
        text-align: left;

        &::after {
          display: none;
        }
      }
    }
  }
}

.scene-box {
  height: 1265px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  .border-bottom {
    height: 401px;
    border-bottom: 1px solid rgba(210,210,210,1);
  }

  .box-title {
    // margin-bottom: 95px - 5px;
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .two-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    .scene-card {
      width:320px;
      margin-right: 310px;
      // margin-left: (310px/2);
      text-align: center;

      &:last-of-type {
        margin-right: 0px;
      }

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
        width: auto;

        position: relative;
        right: (-23px / 2);
      }
      .icon-warning {
        width: 23px;
        height: auto;
        position: relative;
        top: -60px;
        left: (23px/2);
      }

      .card-title {
        // width:184px;
        width:100%;
        height:26px;
        font-size:27px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:25px;
        text-align: center;

        margin-bottom: 28.58px - 5px;
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

  .text-rows {
    padding-top: 98px;

    p.text {
      // width:979px;
      // height:164px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:$GRAY;
      line-height:25px;
    }
    .margin-bottom-rows {
      margin-bottom: 50px;
    }
  }
}

// 合作模式
.partner-box {
  // margin-top: 219px;

  .two-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .partner-card {
      cursor: pointer;
      width:690px;
      height:214px;
      background:rgba(245,245,245,1);
      border-radius:4px;
      margin-bottom: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      padding-left: 36px;

      &:nth-child(odd) {
        margin-right: 20px;
      }

      &:hover {
      }

      .imgbox {
        width: 145px;
        height: 145px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 87px;

        &:last-of-type {
          margin-right: 0px;
        }

        .icon {
          width: 47px;
          height: 47px;
        }
      }
      .text {
        text-align: left;

        .card-desc {
          width:364px;
          // height:90px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:25px;
        }
      }
    }
  }
}
</style>
