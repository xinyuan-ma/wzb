<template>
  <div class="container">
    <!-- 头图 -->

    <div
    :style="ImgPersonalTax.imgTaxBg | imgbg"
    class="head-img-bg imgbg full-box">
    <div class="container-screen-width">
      <p class="head-title">个税汇算清缴痛点</p>
      <div class="head-list-container">
        <div class="head-list" v-for="(item, key) in headerList" :key="key">
          <div class="img-box" :style="item.img | imgbg"></div>
          <div class="head-des" v-html="item.des"></div>
        </div>
      </div>
    </div>
    </div>

    <!-- 我们将提供 -->
    <div class="full-box provide-box">
      <div class="container-screen-width">
        <div class="box-title">提供服务</div>
        <div class="flex-row four-cols">
          <div v-for="(card, index) in provideServer" :key="index" class="card provide-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
              </div>
              <div class="card-title" v-html="card.title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--赋能金融机构-->
    <div class="finance-img-bg imgbg full-box">
      <div class="container-screen-width">
        <p class="finance-tilte">赋能金融机构</p>
        <p class="finance-destail">个税通服务目前已陆续入驻银行与保险机构。在官方APP应用的会员权益商城中，可通过积分兑换的方式领取服务包。</p>
        <div class="finance-list-container">
          <div class="finance-list" v-for="(item, key) in financeList" :key="key">
            <div class="finance-img imgbg" :style="item.img | imgbg">
              <!--<div class="finance-bg">-->
                <div class="finance-des-ft" v-if="key == 1">
                  <p>个人完税权益</p>
                  <p>9900积分</p>
                </div>
                <div class="finance-des-sd" v-if="key == 1">
                  <p>个人汇算清缴权益</p>
                  <p>19800积分</p>
                </div>
              <!--</div>-->
            </div>
            <div class="finance-title">{{item.title}}</div>
            <div class="finance-des">{{item.des}}</div>
          </div>
        </div>
      </div>
    </div>

    <!--输入电话框-->
    <FillTaxPlan></FillTaxPlan>
  </div>
</template>

<script>
  // filter
  import ImgPersonalTax from '@/assets/personalTax'
  import {imgbg} from '@/components/utils/filters'
  // componets
  import FButton from '@/components/FButton'
  import FInput from '@/components/FInput'
  import FillTaxPlan from '@/components/FillTaxPlan'

  import {CheckForm} from '@/components/config/checkForm'

  export default {
    name: 'Contract',
    components: {
      FButton,
      FInput,
      FillTaxPlan
    },
    head() {
      return {
        title: '完税金 - 合伙人计划'
      }
    },
    filters: {imgbg,},
    data() {
      return {
        ImgPersonalTax,
        headerList: [
          {
            img: ImgPersonalTax.imgHeader2,
            des: '个税申报明细：<br>您的申报记录都是真实的吗？<br>有没有被公司多扣个税？<br>有没有被冒用身份信息申报？'
          },
          {
            img: ImgPersonalTax.imgHeader1,
            des: '个税汇算清缴申报：<br>汇算清缴正确申报了吗？<br>是否以合理的方式申报了？'
          }
        ],
        provideServer: [
          {
            icon: ImgPersonalTax.imgServer1,
            title: '个税计算工具包'
          },
          {
            icon: ImgPersonalTax.imgServer2,
            title: '退税/补税测评系统'
          },
          {
            icon: ImgPersonalTax.imgServer3,
            title: '个税汇算清缴课程<br>免费学习'
          },
          {
            icon: ImgPersonalTax.imgServer4,
            title: '专业税务专家一对一指导<br>在线解答个税问题'
          },
        ],
        financeList: [
          {
            img: ImgPersonalTax.imgFinance1,
            title: '入口一',
            des: '在权益中心页面，内置banner'
          },
          {
            img: ImgPersonalTax.imgFinance2,
            title: '入口二',
            des: '在积分兑换页面，上架商品'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/conf.scss";
  .finance-img-bg {
    .finance-tilte {
      font-size:30px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:35px;
      margin: 50px 0 40px 0;
    }
    .finance-destail {
      font-size:14px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:18px;
      margin-bottom: 35px;
    }
    .finance-list-container {
      @include flex-align-center();
      .finance-list {
        @include flex-just();
        align-items: flex-start;
        flex-direction: column;
        &:first-of-type {
          margin-right: 260px;
        }
        .finance-img {
          width: 300px;
          height: 550px;
          position: relative;
          .finance-des-ft, .finance-des-sd {
            position: absolute;
            font-size:11px;
            font-weight:600;
            color:rgba(97,97,97,0.9);
            line-height:16px;
            text-align: center;
            background-color: #FAF5F2;
            bottom: 0;
            z-index: 2;
            padding: 3px 10px;
          }
          .finance-des-ft {
            left: 50px;
          }
          .finance-des-sd {
            right: 10px;
          }
          .finance-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
          }
        }
        .finance-title {
          font-size:18px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:30px;
          margin: 40px 0 20px 30px;
        }
        .finance-des {
          font-size:12px;
          font-weight:600;
          color:rgba(97,97,97,1);
          line-height:20px;
          margin-left: 30px;
          margin-bottom: 50px;
        }
      }
    }
  }
  .container {
    margin: 0 auto;
    @include flex-align-center();
    flex-direction: column;
    text-align: center;
    min-width: $PAGE_MAX_WIDTH;
  }
  .head-img-bg {
    height: 409px;
    padding-top: 53px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    .container-screen-width {
      @include flex-align-center();
      flex-direction: column;
      .head-title {
        font-size: 30px;
      }
    }
    .head-list-container {
      @include flex-align-center();
      .head-list {
        background-color: #FFFFFF;
        border-radius:3px;
        font-size:13px;
        font-weight:600;
        color:rgba(0,0,0,1);
        line-height:20px;
        padding: 46px 135px 46px 26px;
        @include flex-align-center();
        &:first-of-type {
          margin-right: 20px;
        }
        .img-box {
          width: 84px;
          height: 84px;
          flex-shrink: 0;
          border-radius: 50%;
          margin-right: 56px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center;
          transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }
        .head-des {
          text-align: left;
          font-weight: 400;
        }
        &:hover {
          .img-box {
            box-shadow:0px 40px 80px 0px rgba(255, 0, 68, 0.35);
            transform: translateY(-20px);
          }
          .head-des {
            color: $THEME_ORANGE;
          }
        }

      }
    }

    p {
      font-size:25px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:35px;
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .provide-box {
    height: 480px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;

    .box-title {
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      padding-top: 55px !important;
      padding-bottom: 40px !important;
    }

    .four-cols {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;

      .provide-card {
        height: 260px;
        width: 250px !important;
        background: #FFFFFF;
        border-radius: 4px;
        margin-bottom: 4px;
        margin-right: 20px;

        padding-top: 50px;
        padding-left: 20px;
        padding-right: 20px;

        text-align: center;

        &:nth-child(4n) {
          margin-right: 0px;
        }

        &:hover {
          box-shadow: 0px 18px 38px 0px rgba(22, 25, 32, 0.1);
          transform: translateY(-20px);
        }

        .align-center {
          text-align: center;
          height: 75px;

          margin-bottom: 60px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .icon {
          max-height: 100px;
        }

        .card-title {
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
          font-size:16px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:23px;
        }

        .card-desc {
          width: 100%;
          height: 16px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.6);
          line-height: 26px;
          // opacity:0.6;

          text-align: left;
        }
      }
    }
  }
</style>
