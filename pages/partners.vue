<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgPartners.imgBg | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="intro">
          <div class="intro-title">
            人脉变钱脉
          </div>
          <div class="intro-title">
            完税金邀您共享万亿级市场高额红利
          </div>
          <div class="intro-detail">
            共赢未来，共同成长
          </div>
        </div>
      </div>
    </div>

    <!-- 类型选择 -->
    <div class="tabs-box full-box">
      <div class="container-screen-width">
        <div class="btns">
          <FButton :class="{blank: selectedTab !== 'channel'}" class="tab-btn" @click="selectedTab = 'channel'">渠道合伙人</FButton>
          <FButton :class="{blank: selectedTab !== 'personal'}" class="tab-btn" @click="selectedTab = 'personal'">人脉合伙人</FButton>
        </div>

        <div v-show="selectedTab === 'channel'" class="desc">
          <p>完税金自创建以来，渠道伙伴们都取得了不俗的成绩，为了进一步扩大市场占有率，</p>
          <p>公司决定开辟更多的渠道合伙人，携手共同开拓新市场。</p>
        </div>
        <div v-show="selectedTab === 'personal'" class="desc">
          <p>如您有庞大的人脉资源、完税金将充分为您提供一个资源变现的平台，只要引荐介绍关键角色，</p>
          <p>签单成功即可获取可观酬劳，实现资源变现。</p>
        </div>
      </div>
    </div>

    <!-- 渠道合伙人要求 -->
    <div class="req-box full-box">
      <div class="container-screen-width">
        <div class="box-title">{{ reqTitle }}</div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in reqData" :key="index" class="card req-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
                <img :src="card.iconL" alt="" class="icon selected">
              </div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们将提供 -->
    <div class="full-box provide-box">
      <div class="container-screen-width">
        <div class="box-title">我们将提供</div>
        <div class="flex-row four-cols">
          <div v-for="(card, index) in provideData" :key="index" class="card provide-card easing">
            <div class="text easing">
              <div class="align-center">
                <img :src="card.icon" alt="" class="icon">
                <!-- <img :src="card.iconL" alt="" class="icon selected"> -->
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
        <div class="form-box">
          <FInput v-model="formUsername" type="text" class="input-row" placeholder="请输入姓名" />
          <FInput v-model="formPhone" type="text" class="input-row" placeholder="请输入手机号码" />
          <FButton class="input-row" @click="submitForm">立即加入</FButton>
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
import ImgAboutUs from '@/assets/aboutUs'
import ImgPartners from '@/assets/partners'
import ContactData from '@/components/config/contact-data'
import PartnersData from '@/components/config/partners-data'

// componets
import FButton from '@/components/FButton'
import FInput from '@/components/FInput'
import ContactForm from '@/components/ContactForm'

import { SubmitForm } from '@/api/index'
// check Form
import { CheckForm } from '@/components/config/checkForm'

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
      title: '完税金 - 合伙人计划',
    }
  },
  filters: { imgbg, },
  data () {
    return {
      ...ContactData,
      ...PartnersData,
      ImgAboutUs,
      ImgPartners,

      formUsername: '',
      formPhone: '',

      selectedTab: 'channel', // channel personal

      isFormShow: false,
      formDesc: '',
      formType: '',
      isNext: false
    }
  },
  computed: {
    reqData () {
      if (this.selectedTab === 'channel') {
        return PartnersData.channelReq
      } else {
        return PartnersData.personalReq
      }
    },
    provideData () {
      if (this.selectedTab === 'channel') {
        return PartnersData.channelProvide
      } else {
        return PartnersData.personalProvide
      }
    },
    reqTitle () {
      if (this.selectedTab === 'channel') {
        return '渠道合伙人要求'
      } else {
        return '人脉合伙人要求'
      }
    },
  },
  methods: {
    async submitForm () {
      try {
        CheckForm(this.formUsername, this.formPhone)
        if (!this.isNext) {
          this.isNext = true
          setTimeout(() => {
            this.isNext = false
          }, 1500)
        } else {
          return
        }
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
  height: 409px;
  padding-top: 129px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  .intro {
    padding-left: 123px;
    text-align: left;

    .intro-title {
      // width:198px;
      // height:38px;
      font-size:40px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:50px;

      // margin-bottom: 51px;
      margin-bottom: 10px;
    }

    .intro-detail {
      // width:160px;
      // height:19px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:24px;

      margin-top: 30px;
    }
  }
}

.tabs-box {
  height: 405px;
  padding-top: 89px;

  .btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 102px;

    margin-bottom: 80px;

    button {
      margin: 0 31px;
      width: 446px;
      height: 100%;

      font-size: 24px;

      // width:121px;
      // height:23px;
      font-size:25px;
      font-family:PingFang SC;
      font-weight:bold;
      // color:rgba(0,0,0,1);
      // line-height:51px;

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

.req-box {
  height: 618px;
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

    .req-card {
      cursor: pointer;
      width: 450px;
      height:316px;
      background:rgba(255,255,255,1);
      border-radius:4px;

      margin-bottom: 24px;
      margin-right: 24px;
      border-radius:4px;

      padding-top: 69px;
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
        height: 95px;

        margin-bottom: 51px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .icon {
        max-height: 98px;

        &.selected {
          display: none;
        }
      }

      .card-desc {
        width:100%;
        height:42px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,1);
        line-height:26px;
        opacity:0.6;
      }
    }
  }
}

.provide-box {
  height: 637px;
  background-color: white;
  display: flex;
  flex-direction: column;
  // padding-top: 188px - 5px;
  // padding-top: 117px - 5px;

  .box-title {
    // margin-bottom: 95px - 5px;
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .four-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    .provide-card {
      height:349px;
      width:335px;
      background:rgba(245,245,245,1);
      border-radius:4px;

      margin-bottom: 04px;
      margin-right: 20px;
      border-radius:4px;

      padding-top: 50px;
      padding-left: 48px;
      padding-right: 48px;

      text-align: center;

      &:nth-child(4n) {
        margin-right: 0px;
      }

      &:hover {
        box-shadow:0px 18px 38px 0px rgba(22,25,32,0.1);
        transform: translateY(-20px);
      }
      .align-center {
        text-align: center;
        height: 75px;

        margin-bottom: 61px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .icon {
        max-height: 100px;
      }

      .card-title {
        font-size:30px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:36px;
        width: 100%;
        text-align: left;

        margin-bottom: 20px;
      }
      .card-desc {
        width:100%;
        height:16px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,0.6);
        line-height:26px;
        // opacity:0.6;

        text-align: left;
      }
    }
  }
}

.submit-form {
  height:411px;
  background:rgba(242,242,242,1);
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-box {
    width: 567px;
    display: flex;
    flex-direction: column;

    padding-top: 92px;

    .input-row {
      margin-bottom: 20px;
    }
  }
}
</style>
