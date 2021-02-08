<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgTaxPlan.imgTaxBg | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <p class="head-title">保就业 稳企业 完善平台经济</p>
        <p class="head-title">助力更多劳动者通过从事个人生产经营活动实现脱贫目标，全面建成小康社会</p>
      </div>
    </div>

    <div class="finance-list-container">
      <div class="finance-list" v-for="(item, key) in financeList" :key="key">
        <div class="finance-img imgbg" :style="item.img | imgbg"></div>
        <div class="finance-title">{{item.title}}</div>
        <div class="finance-des" v-html="item.des"></div>
      </div>
    </div>

    <div class="full-box bg-gray enovation-box">
      <div class="container-screen-width">
        <div class="eno-box-title">
          <p>依法诚信纳税是中国公民义务；严厉打击通过不合理商业安排躲避监管的违法违规行为。</p>
          <p> 基于业务特点，完税金将通过多维度审慎业务真实性，一经发现违法行为，在24个小时内上报相关国家机关，并追究责任主体相关法律责任。</p>
        </div>
        <div class="flex-row eno-four-cols">
          <div v-for="(card, index) in entionList" :key="index" class="enovation-card">
            <div class="imgbox">
              <div class="text easing">
                <div class="align-right">
                  <img :src="card.icon" alt="" class="icon" :class="{type: index == 2}">
                  <img :src="card.iconL" alt="" class="icon selected" :class="{type: index == 2}">
                </div>
                <div class="card-title" :class="{type: index == 2}">{{ card.title }}</div>
                <div class="card-desc" v-html="card.desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--<div-->
      <!--:style="imgWorkBg | imgbg"-->
      <!--class="head-img-bg imgbg full-box img-work">-->
      <!--<div class="container-screen-width">-->
        <!--<p class="work-title">灵活用工主要应用行业</p>-->
        <!--<p class="work-des">行业纵深、直达痛点，全行业定制化解决方案帮您解决业务难题</p>-->
        <!--<div class="work-title-list">-->
          <!--<div class="work-list" :class="{active: workIndex == key}" v-for="(item, key) in imgWorkTitle" :key="key" @click="changeWork(key)">{{item.title}}</div>-->
        <!--</div>-->
        <!--<div class="work-tap">-->
          <!--<p class="work-tap-title">{{workInfo.title}}</p>-->
          <!--<p class="work-tap-des">{{workInfo.des}}</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="full-box provide-box">-->
      <!--<div class="container-screen-width">-->
        <!--<div class="pro-box-title">灵活用工——保险行业解决方案</div>-->
        <!--<div class="pro-box-des">中国保险行业30多年来，保费收入年平均复合增长率达到28%以上，已经成为整个国民经济体系中发展最快、重要性程度不断提高的行业之一。</div>-->
        <!--<div class="flex-row four-cols">-->
          <!--<div v-for="(card, index) in provideServer" :key="index" class="card provide-card easing">-->
            <!--<div class="align-center">-->
              <!--<img :src="card.icon" alt="" class="icon">-->
            <!--</div>-->
            <!--<div class="card-title" v-html="card.title"></div>-->
            <!--<div class="card-title-des" v-html="card.des"></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="full-box provide-box trade-plan">-->
      <!--<div class="container-screen-width">-->
        <!--<div class="pro-box-title">灵活用工——直销行业解决方案</div>-->
        <!--<div class="pro-box-des trade-des">直销的营销团队全部是个人代理关系，在获取佣金提成时，市场遇到个人结算无发票或未完税、合规难度高等等涉税风险。<br>完税金基于行业痛点定制推出：</div>-->
        <!--<div class="flex-row">-->
          <!--<img class="trade-img" :src="ImgTaxPlan.imgTrade" alt="">-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--输入电话框-->
    <FillTaxPlan>
      <!--<p class="tax-plan">免费获取精准的节税方案，完税金专家为您详细解答</p>-->
    </FillTaxPlan>
    <div style="display: none">
      <img :src="item" alt="" v-for="(item,key) in imgWorklist" :key="key" style="width: 50px; height: 50px">
    </div>
  </div>
</template>

<script>
  import ImgTaxPlan from '@/assets/taxPlan'
  import {imgbg} from '@/components/utils/filters'
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
    filters: {imgbg},
    data() {
      return {
        ImgTaxPlan,
        provideServer: [
          {
            icon: ImgTaxPlan.imgPro1,
            title: '保险行业特点',
            des: '1、保险行业同质化的产品和服务使竞争异常激烈<br>2、保险公司保险业务的利润率一直较低<br>3、保险公司机构庞大、分布广泛，难于监管'
          },
          {
            icon: ImgTaxPlan.imgPro2,
            title: '急需解决的问题',
            des: '1、经纪/代理公司资金周转不够灵活<br>2、市场资金难以进入保险佣金应收账款市场'
          },
          {
            icon: ImgTaxPlan.imgPro3,
            title: '完税金解决方案',
            des: '1、享受完税金取得的税收优惠政策，降低税务成本<br>2、合作银行垫资解决保单佣金资金压力问题<br>3、业务合作四流合一，财务达到合规<br>4、API接口对接，实现实时结算'
          }
        ],
        financeList: [
          {
            img: ImgTaxPlan.imgFin1,
            title: '保就业',
            des: '<p>加大减税降费政策解读与宣传力度，<span>留得青山，赢得未来。</span></p>' +
              '<p>助力企业创新经营模式，打造数字化平台经济，以组织结构优化、数字技术、数据驱动等为手段，提高企业运作效率、降低运行成本。</p>' +
              '<p>实体经济和数字经济深度融合，使得传统领域可以借助数字经济获得生机，催生新岗位新职业，为灵活就业者提供线上服务。</p>'
          },
          {
            img: ImgTaxPlan.imgFin2,
            title: '惠民生',
            des: '<p>探索开发小微企业、个体工商户在线登记功能，互联网一键注册、享受扶持政策。</p>' +
              '<p>运用科技手段深挖行业，为个体经营者提供服务分包、收入结算、智能报税等综合服务，打造数字经济优势。</p>' +
              '<p>个体经营者的日子过得好不好，获得感、幸福感、安全感强不强，是平台经济同业者、社会各界不懈努力、拼搏奋斗的目标。</p>'
          }
        ],
        entionList: [
          {
            icon: ImgTaxPlan.imgEno1,
            iconL: ImgTaxPlan.imgEnoL1,
            title: '事前分析系统',
            desc: '1、关联信息比对<br>2、税局数据比对企业数据甄别<br>3、排除恶意欺诈',
          },
          {
            icon: ImgTaxPlan.imgEno2,
            iconL: ImgTaxPlan.imgEnoL2,
            title: '事中监测系统',
            desc: '1、交易异常数据智能预警，着重分析<br>2、提炼风险值，分析自查<br>3、黑、白、灰名单管理',
          },
          {
            icon: ImgTaxPlan.imgEno3,
            iconL: ImgTaxPlan.imgEnoL3,
            title: '事后管理系统',
            desc: '1、限额、冻结、延迟结算处理<br>2、多维度行业、税务数据分析<br>3、黑名单库实时同步更新名单',
          }
        ],
        imgWorkBg: ImgTaxPlan.imgWork3,
        imgWorkTitle: [
          {
            title: '电商平台',
            des: '电商平台的店主和平台之间是个人合作关系'
          }, {
            title: '房地产经纪',
            des: '门店经纪人与经纪公司是个人合作关系'
          }, {
            title: '直销行业',
            des: '直销的营销团队全部是个人代理关系'
          }, {
            title: '保险行业',
            des: '保险经纪人与保险公司是个人合作关系'
          }, {
            title: 'O2O平台',
            des: '上门服务提供人员和平台之间是个人合作关系'
          }
        ],
        workInfo: {
          title: '直销行业',
          des: '直销的营销团队全部是个人代理关系'
        },
        imgWorklist: [
          ImgTaxPlan.imgWork1, ImgTaxPlan.imgWork2, ImgTaxPlan.imgWork3, ImgTaxPlan.imgWork4, ImgTaxPlan.imgWork5
        ],
        workIndex: 2
      }
    },
    methods: {
      changeWork (key) {
        this.workIndex = key
        this.workInfo = this.imgWorkTitle[key]
        let index = `imgWork${key + 1}`
        this.imgWorkBg = ImgTaxPlan[index]
      }
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
      font-weight:500;
      color:rgba(0,0,0,1);
      line-height:18px;
      margin-bottom: 35px;

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
    padding-top: 150px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    &.img-work {
      height: 338px;
      padding-top: 0;
    }
    .container-screen-width {
      @include flex-align-center();
      flex-direction: column;
      .head-title {
        font-size: 23px;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:30px;
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
    height: 558px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;

    .pro-box-title {
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      line-height:35px;
      color: rgba(0, 0, 0, 1);
      margin: 50px 0 16px 0;
    }
    .pro-box-des {
      font-size:13px;
      font-weight:600;
      color:rgba(97,97,97,1);
      line-height:18px;
      margin-bottom: 43px;
    }

    .four-cols {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;

      .provide-card {
        height: 300px;
        width: 280px;
        background: #FFFFFF;
        border-radius: 4px;
        margin-bottom: 4px;
        margin-right: 20px;

        padding-top: 24px;
        padding-left: 20px;
        padding-right: 20px;

        text-align: center;

        &:nth-child(4n) {
          margin-right: 0px;
        }

        &:hover {
          box-shadow: 0px 18px 60px 0px rgba(22, 25, 32, 0.1);
          transform: translateY(-20px);
        }

        .align-center {
          text-align: center;
          margin-bottom: 40px;
          height: 80px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 78px;
          height: auto;
          max-height: 100px;
        }

        .card-title {
          width: 100%;
          text-align: left;
          margin-bottom: 15px;
          font-size:18px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:25px;
        }

        .card-title-des {
          text-align: left;
          width: 100%;
          height: 16px;
          font-size: 10px;
          font-weight: 500;
          color:rgba(97,97,97,1);
          line-height: 20px;
        }
      }
    }
  }
  .finance-list-container {
    @include flex-align-center(center, flex-start);
    padding: 85px 0 50px 0;
    overflow: hidden;
    .finance-list {
      @include flex-just();
      align-items: flex-start;
      flex-direction: column;
      transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      margin: 0 20px;
      &:nth-child(2) {
        margin-left: 0;
      }
      &:hover {
        .finance-img {
          box-shadow:0px 10px 25px 0px rgba(255, 0, 68, 0.35);
          transform: translateY(-20px);
        }
        .finance-des,.finance-title {
          color: $THEME_ORANGE;
        }
      }
      .finance-img {
        width: 431px;
        height: 175px;
        position: relative;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
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
        margin: 40px 0 15px 13px;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }
      .finance-des {
        margin-left: 13px;
        width: 395px;
        font-size:15px;
        font-weight:600;
        color:#616161;
        line-height: 20px;
        text-align: left;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        /deep/ p {
          margin-bottom: 10px;
        }
        /deep/ span {
          color: #FB5640;
        }
      }
    }
  }
  .enovation-box {
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    padding: 56px 0 75px 0;
    // padding-top: 140px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    .eno-box-title {
      // margin-bottom: 92px - 5px;
      display: block;
      text-align: center;
      color: white;
      margin-bottom: 40px;
      p {
        font-size: 20px;
        font-weight:600;
        color:rgba(0,0,0,1);
        line-height:30px;
      }
    }

    .eno-four-cols {
      @include flex-align-center();

      .enovation-card {
        cursor: pointer;
        width: 280px;
        height: 300px;
        margin-right: 16px;

        &:last-of-type {
          margin-right: 0px;
        }

        &:hover {
          .imgbox {
          }
          // .text .card-title {
          //   color: $THEME_ORANGE;
          // }
          .text {
            // background-color: rgba(0,0,0,0.4);
            border-bottom: 8px solid $THEME_ORANGE;
            .icon {
              display: none;

              &.selected {
                display: inline-block;
              }
            }
          }
        }

        .imgbox {
          width: 100%;
          height: 100%;
          background-color: white;

          &:last-of-type {
            margin-right: 0px;
          }
        }
        .text {
          text-align: left;
          padding-top: 56px;
          padding-left: 30px;
          padding-right: 30px;
          // padding-top: 268px - 4px;
          height: 100%;

          .align-right {
            text-align: right;
          }
          .icon {
            width:75px;
            height: 59px;
            &.type {
              width:78px;
              height: 70px;
            }
            // float: right;

            &.selected {
              display: none;
            }
          }

          .card-title {
            font-size:16px;
            font-weight:600;
            color:rgba(0,0,0,1);
            line-height:20px;
            margin-bottom: 16px;
            margin-top: 38px;
            &.type {
              margin-top: 25px;
            }
          }
          .card-desc {
            font-size:16px;
            color:rgba(97,97,97,1);
            line-height:20px;
            font-weight:400;
          }
        }
      }
    }
  }
  .img-work {
    .work-title {
      font-size:21px;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:30px;
      text-align: center;
      margin: 56px 0 8px 0;
    }
    .work-des {
      font-size:11px;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:16px;
      text-align: center;
      margin-bottom: 30px;
    }
    .work-title-list {
      @include flex-center();
      .work-list {
        width: 175px;
        font-size:14px;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:20px;
        padding: 8px 0;
        border-bottom: 3px solid #FFFFFF;
        cursor: pointer;
        /*transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28); */
        &.active {
          border-bottom: 3px solid #FB5640;
        }
      }
    }
    .work-tap {
      text-align: center;
      font-weight:600;
      .work-tap-title {
        font-size:14px;
        line-height:20px;
        color:rgba(255,255,255,1);
        margin: 35px 0 11px 0;
      }
      .work-tap-des {
        font-size:11px;
        line-height:16px;
        color:rgba(255,255,255,1);
      }
    }
  }
  .trade-plan {
    height: 504px;
    background-color: #FFFFFF;
    .trade-img {
      width: 820px;
      margin: 0 auto;
    }
    .trade-des {
      width: 100%;
      margin: 0 auto 55px;
      color:rgba(97,97,97,1);
      line-height:30px;
    }
  }
  .tax-plan {
    text-align: center;
    margin-top: -20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,.6);
  }
</style>
