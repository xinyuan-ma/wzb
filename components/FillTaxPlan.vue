<template>
  <div class="fill-tax-container">
    <div class="full-box submit-form">
      <slot></slot>
      <div class="container-screen-width flex-center">
        <div class="form-box">
          <FInput v-model="formUsername" type="text" class="input-row" placeholder="请输入姓名"/>
          <FInput v-model="formPhone" type="text" class="input-row" placeholder="请输入手机号码"/>
          <FButton class="input-row" @click="submitForm">获取服务</FButton>
        </div>
      </div>
    </div>
    <!-- modal -->
    <ContactForm
      :isShow="isFormShow"
      :desc="formDesc"
      :type="formType"
      @submit="showSuccess"
      @close="closeForm" />
  </div>

</template>

<script>
  import FButton from './FButton'
  import FInput from './FInput'
  import ContactForm from './ContactForm'
  import {SubmitForm} from '@/api/index'
  import {CheckForm} from '@/components/config/checkForm'

export default {
  name: 'FillTaxPlan',
  props: {},
  data () {
    return {
      formUsername: '',
      formPhone: '',
      isFormShow: false,
      formDesc: '',
      formType: '',
      isNext: false
    }
  },
  components: {
    FInput,
    FButton,
    ContactForm
  },
  methods: {
    async submitForm() {
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
    showForm(type = 'success', desc = '') {
      this.formType = type
      this.formDesc = desc
      this.isFormShow = true
    },
    showSuccess() {
      this.showForm('success')
    },
    closeForm(formType) {
      this.isFormShow = false
      this.formDesc = ''
      this.formType = ''

      if (formType === 'success') {
        // 清空两个输入框
        this.formUsername = ''
        this.formPhone = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .fill-tax-container {
    width: 100%;
  }
.submit-form {
  background: rgba(242, 242, 242, 1);
  padding: 60px 0 40px 0;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-box {
    width: 567px;
    display: flex;
    flex-direction: column;

    .input-row {
      margin-bottom: 20px;
    }
  }
}
</style>
