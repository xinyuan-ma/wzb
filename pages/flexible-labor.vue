<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgFlexibleLabor.imgBg | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="intro">
          <div class="intro-title">
            什么是灵活用工？
          </div>
          <div class="intro-detail">
            灵活用工，即指企业将某项任务或职能的执行或服务内容转由第三方来完成。
            双方遵循“风险共担、利益共享”的原则，建立平等的业务承揽合作。
            企业利用灵活用工这种弹性模式，能够灵活地因需而变，满足快速变化的业务需求。
          </div>
        </div>
      </div>
    </div>

    <!-- 他们都选择了灵活用工 -->
    <div class="example-box full-box">
      <div class="container-screen-width">
        <div class="box-title">他们都选择了灵活用工</div>
        <div class="flex-row four-cols">
          <div v-for="(card, index) in exampleList" :key="index" class="card example-card easing">
            <div class="text easing">
              <div class="align-right">
                <img :src="card.icon" alt="" class="icon">
              </div>
              <div class="card-title">{{ card.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 解决了企业哪些问题 -->
    <div class="problem-box full-box">
      <div class="container-screen-width">
        <div class="box-title">解决了企业哪些问题</div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in problem" :key="index" class="card problem-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
              </div>
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们的解决方案 -->
    <div class="solution-box full-box">
      <div class="container-screen-width">
        <div class="box-title">
          我们的解决方案
          <div class="box-sub-title">帮助企业/平台在自身遇到严重的财务及税务风险时，解决支付给自由职业者的报酬如何入账问题，及如何完税问题。</div>
        </div>

        <div :style="GraphURL|imgbg" class="graph-content">
          <!-- <img :src="GraphURL" alt="" class="graph"> -->
        </div>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div class="choice-box full-box">
      <div class="container-screen-width">
        <div class="box-title">为什么选择我们</div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in choice" :key="index" class="card choice-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
              </div>
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 框 -->
    <div class="full-box submit-form">
      <div class="container-screen-width flex-center">
        <div class="form-title">免费获取精准的节税方案，完税金专家为您详细解答。</div>
        <div class="form-box">
          <FInput v-model="formUsername" type="text" class="input-row" placeholder="请输入姓名" />
          <FInput v-model="formPhone" type="text" class="input-row" placeholder="请输入手机号码" />
          <FButton class="input-row" @click="submitForm">免费获取精准方案</FButton>
        </div>
      </div>
    </div>
    <!-- modal -->
    <ContactForm
      :isShow="isFormShow"
      :desc="formDesc"
      :type="formType"
      @submit="showSuccess"
      @close="closeForm"></ContactForm>
  </div>
</template>

<script>
// filter
import { imgbg } from '@/components/utils/filters'

// assets
import ImgFlexibleLabor from '@/assets/flexible-labor'
import FlexibleLaborData from '@/components/config/flexibleLabor'

// componets
import FButton from '@/components/FButton'
import FInput from '@/components/FInput'
import ContactForm from '@/components/ContactForm'

import { SubmitForm } from '@/api/index'
// check Form
import { CheckForm } from '@/components/config/checkForm'
import ImgHome from '@/assets/home'

/* eslint-disable no-console */
export default {
  name: 'Contract',
  components: {
    ContactForm,
    FButton,
    FInput,
  },
  head () {
    return {
      title: '完税金 - 灵活用工',
    }
  },
  filters: { imgbg, },
  data () {
    return {
      ...FlexibleLaborData,
      ImgFlexibleLabor,

      formUsername: '',
      formPhone: '',
      GraphURL: ImgHome.imgPosition,
      selectedTab: 'channel', // channel personal

      isFormShow: false,
      formDesc: '',
      formType: '',
    }
  },
  methods: {
    async submitForm () {
      try {
        CheckForm(this.formUsername, this.formPhone)

        const data = await SubmitForm(this.formUsername, this.formPhone)
        console.log(data)
        this.showForm('success')
      } catch (err) {
        console.log(err)
        this.showForm('error', err.message)
      }
    },
    showFormToFill () {
      this.showForm('')
    },
    showForm (type = 'success', desc = '') {
      this.formType = type
      this.formDesc = desc
      this.isFormShow = true
    },
    showSuccess () {
      this.showForm('success')
    },
    closeForm (formType) {
      this.isFormShow = false
      this.formDesc = ''
      this.formType = ''

      if (formType === 'success') {
        // 清空两个输入框
        this.formUsername = ''
        this.formPhone = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";

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
  height: 651px;
  padding-top: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  .intro {
    padding-left: 123px;
    text-align: left;

    .intro-title {
      font-size:40px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:50px;

      // margin-bottom: 51px;
      margin-bottom: 10px;
    }

    .intro-detail {
      width:582px;
      // height:65px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:24px;

      margin-top: 56px;
    }
  }
}

.tabs-box {
  height: 507px;
  padding-top: 139px;

  .btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 78px;

    button {
      margin: 0 31px;
      width: 437px;
      height: 100%;

      font-size: 24px;

      &.blank {
         background-color: #F1F1F1;
         border-color: #F1F1F1;
         color: black;

         &:hover {
           background-color: $THEME_ORANGE;
           border-color: $THEME_ORANGE;
           color: white;
         }
      }
    }
  }

  .desc {
    // width:580px;
    // height:41px;
    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height:24px;
  }
}
// 他们都选择了灵活用工

.example-box {
  height: 1160px;
  display: flex;
  flex-direction: column;
  // padding-top: 140px;
  background-color: white;

  .box-title {
    // margin-bottom: 92px - 5px;
    display: block;
    text-align: center;
  }

  .four-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .example-card {
      cursor: pointer;
      width: 350px - 6.75px;
      height:283px;
      background:rgba(245,245,245,1);
      border-radius:4px;

      margin-right: 9px;
      margin-bottom: 10px;

      &:nth-of-type(4n) {
        margin-right: 0px;
      }

      &:hover {
        .imgbox {
        }
      }

      .text {
        text-align: left;
        padding-top: 49px;
        padding-left: 49px;
        padding-right: 39px;
        // padding-top: 268px - 4px;
        height: 100%;

        .align-right {
          text-align: right;
          height: 117px;
        }
        .icon {
          width: auto;
          max-height: 110px;
          max-width: 192px;
        }

        .card-title {
          // width:72px;
          // height:17px;
          font-size:18px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(78,78,78,1);
          line-height: 24px;

          margin-top: 60px - 3px;
        }
      }
    }
  }
}

.problem-box {
  height: 637px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;

  .box-title {
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .three-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    .problem-card {
      cursor: pointer;
      width: 450px;
      height:350px;
      background:rgba(255,255,255,1);
      border-radius:4px;

      margin-bottom: 24px;
      margin-right: 24px;
      border-radius:4px;

      padding-top: 49px;
      padding-left: 60px;
      padding-right: 60px;

      text-align: center;

      &:nth-child(3n) {
        margin-right: 0px;
      }

      &:hover {
        box-shadow:0px 18px 38px 0px rgba(22,25,32,0.1);
        transform: translateY(-20px);
      }
      .align-center {
        text-align: center;
        height: 83px;

        margin-bottom: 47px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .icon {
        max-width: 128px;
        max-height: 87px;

        &.selected {
          display: none;
        }
      }

      .card-desc {
        width:100%;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,0.5);
        line-height:24px;

        text-align: left;
      }
      .card-title {
        font-size:30px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:24px;

        margin-bottom: 22px;
        text-align: left;
      }
    }
  }
}

.solution-box {
  min-height: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column;

  // padding-top: 162px - 5px;
  // @media (max-width: 1500px) {
  //   min-height: 1000px;
  // }

  .box-title {
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .box-sub-title {
    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,0.7);
    line-height:24px;

    margin-top: 25px;
  }

  .graph-content {
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 733px;
  }
}

.choice-box {
  height: 800px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;

  .box-title {
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .three-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    .choice-card {
      cursor: pointer;
      width: 450px;
      height: 509px;
      background:rgba(255,255,255,1);
      border-radius:4px;

      margin-bottom: 24px;
      margin-right: 24px;
      border-radius:4px;

      padding-top: 67px;
      padding-left: 60px;
      padding-right: 60px;

      text-align: center;

      &:nth-child(3n) {
        margin-right: 0px;
      }

      &:hover {
        box-shadow:0px 18px 38px 0px rgba(22,25,32,0.1);
        transform: translateY(-20px);
      }
      .align-center {
        text-align: center;
        height: 76px;

        margin-bottom: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .icon {
        // width: 128px;
        max-width: 92px;
        max-height: 84px;

        &.selected {
          display: none;
        }
      }

      .card-desc {
        width:100%;
        height:137px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,0.5);
        line-height:24px;

        text-align: left;

        white-space: pre-line;
      }
      .card-title {
        font-size:30px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:24px;

        margin-bottom: 27px;
        text-align: left;
      }
    }
  }
}

.submit-form {
  height:476px;
  background:rgba(242,242,242,1);

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form-box {
    width: 567px;
    display: flex;
    flex-direction: column;

    .input-row {
      margin-bottom: 20px;
    }
  }

  .form-title {
    // width:608px;
    // height:27px;
    font-size:26px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:30px;

    margin-bottom: 65px;
    margin-top: 59px;
  }
}
</style>
