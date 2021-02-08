<template>
  <div class="container">
    <!-- 头图 -->
    <el-carousel height="664px" :interval="5000">
      <el-carousel-item>
        <div
          :style="ImgHome.imgCoverBg | imgbg"
          class="head-img-bg imgbg full-box">
          <div class="container-screen-width">
            <div class="title">
              <p>完税金</p>
              <p>专注完税交付  提升完税价值</p>
            </div>
            <div class="desc">
              <p>一站式“合规、安全、共享”的完税综合服务平台</p>
              <p>助力企业数字化转型升级，让财税创造价值更智能</p>
            </div>

            <div class="submit-box">
              <FInput v-model="formUsername" type="text" class="name" placeholder="请输入姓名" />
              <FInput v-model="formPhone" type="text" class="form" placeholder="请输入手机号码" />
              <FButton class="submit" @click="submitForm">免费获取精准方案</FButton>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div
          :style="ImgHome.imgCoverBg2 | imgbg"
          class="head-img-bg imgbg full-box" @click="jumpTax">
          <div class="container-screen-width">
            <div class="title">
              <p>赋能金融机构</p>
              <p> </p>
            </div>
            <div class="desc tax">
              <p>为个人税务提供深度体检</p>
              <p>助力个税汇算清缴平稳落地</p>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>



    <!-- 使命 -->
    <div class="full-box bg-white ambition-box">
      <div class="container-screen-width">
        <div class="box-title">完税金的使命</div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in amibitionList" :key="index" class="card ambition-card">
            <div :style="card.img | imgbg" class="imgbox"></div>

            <div class="text">
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 专业服务 -->
    <div class="full-box bg-gray service-box">
      <div class="container-screen-width">
        <div class="box-title">专业服务</div>
        <div class="flex-row four-cols">
          <div v-for="(card, index) in serviceList" :key="index" class="service-card">
            <div :style="card.img | imgbg" class="imgbox"></div>

            <div class="text">
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 安全合规 -->
    <div class="full-box bg-gray safty-box">
      <div class="container-screen-width">
        <div class="box-title">安全合规</div>
        <div class="flex-row two-cols">
          <div v-for="(card, index) in ruleList" :key="index" class="card safty-card">
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

    <!-- 创新科技 -->
    <div :style="ImgHome.imgHomeMiddleBg | imgbg" class="full-box bg-gray enovation-box">
      <div class="container-screen-width">
        <div class="box-title">创新科技</div>
        <div class="flex-row four-cols">
          <div v-for="(card, index) in enovationList" :key="index" class="enovation-card">
            <div class="imgbox">
              <div class="text easing">
                <div class="align-right">
                  <img :src="card.icon" alt="" class="icon">
                  <img :src="card.iconL" alt="" class="icon selected">
                </div>
                <div class="card-title">{{ card.title }}</div>
                <div class="card-desc">{{ card.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们服务哪些群体？ -->
    <div class="full-box bg-white group-box">
      <div class="container-screen-width">
        <div class="box-title">
          我们服务哪些群体？
          <div class="box-title-mini">为不同的人群定制专业解决方案</div>
        </div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in groupList" :key="index" class="card group-card">
            <div :style="card.img | imgbg" class="imgbox">
              <div class="text">
                <div class="card-title">{{ card.title }}</div>

                <button class="show-form" @click="showFormToFill">定制方案</button>
              </div>
            </div>
          </div>
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
import { imgbg } from '@/components/utils/filters'
import ImgHome from '@/assets/home'

// components
import ContactForm from '@/components/ContactForm'
import FButton from '@/components/FButton'
import FInput from '@/components/FInput'
import HomeData from '@/components/config/home-data'
import { SubmitForm } from '@/api/index'
// check Form
import { CheckForm } from '@/components/config/checkForm'

/* eslint-disable no-console */
export default {
  name: 'IndexPage',
  components: {
    ContactForm,
    FButton,
    FInput,
  },
  filters: { imgbg, },
  data () {
    return {
      ...HomeData,
      ImgHome,
      // form
      formUsername: '',
      formPhone: '',

      isFormShow: false,
      formDesc: '',
      formType: '',
      isNext: false
    }
  },
  methods: {
    jumpTax () {
      this.$router.push('./perTax')
    },
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
<style>
  .el-carousel__item, .el-carousel {
    width: 100vw;
  }
</style>

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
  height: 664px;
  padding-top: 141px;

  .title {
    font-size:40px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:50px;
    margin-bottom: 7px;
  }
  .desc {
    // width:432px;
    // height:45px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
    margin-bottom: 2px;
    margin-top: 15px;
    &.tax {
      font-size:30px;
      line-height:50px;
    }
  }

  .submit-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 58px;

    input {
      width: 297px;
      margin-right: 10px;
    }

    .submit {
      width: 219px;
    }
  }
}

.ambition-box {
  height: 820px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .box-title {
    display: block;
    text-align: center;
  }

  .three-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .ambition-card {
      cursor: pointer;

      margin-right: 18px;
      &:last-of-type {
        margin-right: 0px;
      }

      &:hover {
        .imgbox {
          background-size: auto 110%;
        }
        .text .card-title {
          color: $THEME_ORANGE;
        }
      }

      .imgbox {
        width: 100%;
        height: 289px;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
        background-size: auto 100%;
        // background-size: cover;
        background-position: 50% 50%;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }
      .text {
        text-align: left;
        padding-left: 21px;
        // padding-right: 82px;
        padding-right: 40px;
        padding-top: 72px - 3px;

        .card-title {
          // width:214px;
          // height:23px;
          font-size:24px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:30px;
          margin-bottom: 23px;
        }
        .card-desc {
          // width:352px;
          // height:112px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(0,0,0,1);
          line-height:24px;
          opacity:0.7;
        }
      }
    }
  }
}

.service-box {
  height: 720px;
  background-color: #FBFBFB;
  display: flex;
  flex-direction: column;

  .box-title {
    display: block;
    text-align: center;
  }

  .four-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .service-card {
      cursor: pointer;
      width: 239px;

      &:hover {
        .imgbox {
          // background-size: 110%;
          box-shadow:0px 40px 80px 0px rgba(255, 0, 68, 0.35);
          transform: translateY(-20px);

        }
        .text .card-title {
          color: $THEME_ORANGE;
        }
      }

      .imgbox {
        width: 176px;
        height: 176px;
        margin-right: 131px;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
        background-size: 108%;
        background-position: 50% 50%;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);

        margin: 0 auto;
        border-radius: 50%;

        &:last-of-type {
          margin-right: 0px;
        }
      }
      .text {
        text-align: center;
        margin-top: 65px;

        .card-title {
          // width:95px;
          // height:23px;
          font-size:24px;
          font-family:PingFang SC;
          font-weight:500;
          color:black;
          line-height:30px;

          margin-bottom: 23px;
        }
        .card-desc {
          font-size:16px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(0,0,0,0.7);
          line-height:24px;
          padding-left: 12px;
          padding-right: 12px;
        }
      }
    }
  }
}

.safty-box {
  height: 1300px;
  background-color: white;
  display: flex;
  flex-direction: column;

  .box-title {
    display: block;
    text-align: center;
  }

  .two-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .safty-card {
      cursor: pointer;
      width: 690px;
      height: 464px;
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
        margin-right: 131px;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
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
        padding-left: 76px;
        padding-right: 194px;
        padding-top: 268px - 4px;

        height: 100%;

        .card-title {
          font-size:28px;
          font-family:PingFang;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height: 36px;

          margin-bottom: 23px;
        }
        .card-desc {
          // width:421px;
          // height:41px;
          font-size:16px;
          font-family:PingFang;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:24px;
        }
      }
    }
  }
}

.enovation-box {
  height: 760px;
  display: flex;
  flex-direction: column;
  // padding-top: 140px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  .box-title {
    // margin-bottom: 92px - 5px;
    display: block;
    text-align: center;
    color: white;
  }

  .four-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .enovation-card {
      cursor: pointer;
      width: 335px;
      height: 440px;
      margin-right: 18px;

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
        padding-left: 40px;
        padding-right: 32px;
        // padding-top: 268px - 4px;
        height: 100%;

        .align-right {
          text-align: right;
        }
        .icon {
          width: 126px;
          height: 126px;
          // float: right;

          &.selected {
            display: none;
          }
        }

        .card-title {
          font-size:24px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:32px;

          margin-bottom: 23px;
          margin-top: 100px - 6px;
        }
        .card-desc {
          // width:244px;
          // height:40px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(0,0,0,1);
          line-height:24px;
          opacity:0.7;
        }
      }
    }
  }
}

.group-box {
  height: 880px;
  background-color: white;
  display: flex;
  flex-direction: column;
  // padding-top: 140px;

  .box-title {
    // margin-bottom: 82px - 5px;
    display: block;
    text-align: center;
  }

  .box-title-mini {
    font-size:20px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:30px;

    margin-top: 23px;
    // margin-bottom: 111px - 4px;
  }

  .three-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .group-card {
      cursor: pointer;
      margin-right: 20px;
      width: (1400px - 40px) / 3;

      @media (max-width: 1500px) {
        width: (1200px - 40px) / 3;
      }
      &:last-of-type {
        margin-right: 0px;
      }

      &:hover {
        .imgbox {
          background-size: auto 110%;
        }
        .text {
          .show-form {
            background-color: $THEME_ORANGE_HOVER;
          }
        }
      }

      .imgbox {
        // width: 453px;
        height: 500px;
        // margin-right: 20px;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
        background-size: auto 100%;
        background-position: 50% 50%;
        transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }
      .text {
        text-align: center;
        // padding-left: 21px;
        // padding-right: 82px;
        // padding-top: 72px - 3px;
        padding-top: 310px;

        .card-title {
          // width:125px;
          // height:25px;
          font-size:26px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:32px;

          margin-bottom: 30px;
        }
        .show-form {
          height: 41px;
          width: 106px;
          border-radius: 20.5px;
          text-align: center;
          background-color: $THEME_ORANGE;
          border-color:$THEME_ORANGE;
          font-size:14px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:39px;

          display: inline-block;

          cursor: pointer;
          outline: none;
        }
        .card-desc {
          // width:352px;
          // height:112px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(0,0,0,1);
          line-height:24px;
          opacity:0.7;
        }
      }
    }
  }
}

</style>
