<template>
  <div
    v-show="isShow"
    :class="{show: isShowing}"
    :style="{zIndex: zIndex}"
    class="contact-form easing"
    @wheel.stop.prevent="()=>{}"
    @scroll.stop.prevent="()=>{}"
    @touchmove.stop.prevent="()=>{}"
    @keyup.esc="onEsc">

    <!-- 默认form -->
    <div v-if="type === ''" class="content">
      <img :src="imgClose" alt="" class="btn-close" @click="closeThis">

      <!-- content -->
      <div class="form">
        <div class="title">获取定制方案</div>
        <div class="actions">
          <FInput v-model="formUsername" type="text" class="form-row" placeholder="请输入您的姓名" />
          <FInput v-model="formPhone" type="text" class="form-row" placeholder="请输入可联系到您的手机号码" />
          <div v-show="formErrorMessage" class="error-message">{{ formErrorMessage }}</div>
          <FButton class="form-row" @click="submitForm">免费获取精准方案</FButton>
        </div>
      </div>
    </div>

    <!-- Error -->
    <div v-if="type === 'error'" class="content error-content">
      <img :src="imgClose" alt="" class="btn-close" @click="closeThis">

      <!-- content -->
      <div class="form">
        <img :src="ImgContactForm.iconWarning" alt="" class="icon">
        <div class="sub-title">提交失败</div>
        <div class="desc">{{ desc }}</div>
      </div>
    </div>

    <!-- success -->
    <div v-if="type === 'success'" class="content success-content">
      <img :src="imgClose" alt="" class="btn-close" @click="closeThis">

      <!-- content -->
      <div class="form">
        <img :src="ImgContactForm.iconCheck" alt="" class="icon">
        <div class="sub-title">提交成功</div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgHome from '@/assets/home'
import ImgContactForm from '@/assets/contactForm'
import FInput from '@/components/FInput'
import FButton from '@/components/FButton'
// check Form
import { SubmitForm } from '@/api/index'
import { CheckForm } from '@/components/config/checkForm'

let _timeoutCounter = 0
const TIMEOUT_DURATION = 20
export default {
  name: 'ContactForm',
  components: {
    FInput,
    FButton,
  },
  props: {
    isShow: {
      type: Boolean,
      default () {
        return false
      },
    },
    type: {
      type: String,
      default () {
        // '' 默认
        // 'error' 错误
        // 'success' 警告
        return ''
      }
    },
    desc: {
      type: String,
      default () {
        return '提交成功'
      }
    },
    zIndex: {
      type: [Number, String],
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      formUsername: '',
      formPhone: '',
      imgClose: ImgHome.iconBtnClose,
      ImgContactForm,
      isShowing: false,

      formErrorMessage: '',
    }
  },
  watch: {
    isShow () {
      if (this.isShow) {
        clearTimeout(_timeoutCounter)
        _timeoutCounter = setTimeout(() => {
          this.isShowing = true
        }, TIMEOUT_DURATION)
      }
    },
    isShowing () {
      if (!this.isShowing) {
        clearTimeout(_timeoutCounter)
        _timeoutCounter = setTimeout(() => {
          // this.isShow = false
          this.$emit('close', true)
        }, TIMEOUT_DURATION)
      }
    }
  },
  methods: {
    closeThis () {
      this.isShowing = false
      this.$emit('close', this.type)
      this.reset()
    },
    onEsc () {
      this.isShowing = false
      this.$emit('close', this.type)
      this.reset()
    },
    reset () {
      this.formUsername = ''
      this.formPhone = ''
    },
    async submitForm () {
      this.formErrorMessage = ''

      try {
        CheckForm(this.formUsername, this.formPhone)

        await SubmitForm(this.formUsername, this.formPhone)
        this.$emit('submit', true)
      } catch (err) {
        this.formErrorMessage = err.message
      }
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../style/conf.scss";

.contact-form {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: $PAGE_MAX_WIDTH;
  background-color: rgba(0,0,0,0);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &.show {
    background-color: rgba(0,0,0,0.5);
  }
}

.content {
  position: relative;
  background-color: #F2F2F2;
  width:760px;
  height:540px;
  background:rgba(242,242,242,1);
  border-radius:4px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 96px - 5px;
  // 小屏幕可以滑动查看全部
  // max-height: 90vh;
  // overflow: auto;

  .btn-close {
    width: 20px;
    width: 20px;

    position: absolute;
    top: 10px;
    right: -35px;
  }

  .error-message {
    // width:143px;
    // height:17px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:red;
    // line-height:50px;

    text-align: left;
    padding-left: 23px;
    margin-bottom: 20px;
  }

  // 错误的content
  &.error-content {
    height: 358px;
    padding-top: 77px;

    .icon {
      width: 105px;
      height: 105px;

      margin-bottom: 50px - 8px;
    }
    .sub-title {
      // width:102px;
      // height:25px;
      font-size:26px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(0,0,0,1);
      line-height:34px;

      margin-bottom: 12px;
    }
    .desc {
      // width:143px;
      // height:17px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:24px;
    }
  }

  // 成功 Success 的content
  &.success-content {
    height: 358px;
    padding-top: 102px;

    .icon {
      width: 105px;
      // height: 105px;

      margin-bottom: 75px - 8px;
    }
    .sub-title {
      // width:102px;
      // height:25px;
      font-size:26px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(0,0,0,1);
      line-height:34px;

      margin-bottom: 12px;
    }
    .desc {
      // width:143px;
      // height:17px;
      font-size:18px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:24px;
    }
  }
}

.title {
  font-size:40px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(0,0,0,1);
  line-height:50px;
  padding-bottom: 72px - 5px;
}
.actions {
  width: 567px;

  .form-row {
    margin-bottom: 20px;
  }
}
</style>
