<template>
  <el-dialog
    title="购买"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    width="568px">
    <div class="info">
      <p class="title"><span>24小时之内</span>会有工作人员与您对接</p>
      <div class="input-content">
        <div class="tap">用户名</div>
        <JobInput :value="name" placeholder="请输入您的姓名"></JobInput>
      </div>
      <div class="input-content">
        <div class="tap">密码</div>
        <JobInput :value="phone" placeholder="请输入可联系到您的手机号"></JobInput>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import JobInput from "./FInput";
export default {
  name: 'buyDialog',
  components: {
    JobInput
  },
  data () {
    return {
      dialogVisible: false,
      name: '',
      phone: ''
    }
  },
  watch: {
    tempValue () {
      this.$emit('input', this.tempValue)
    },
    value () {
      if (this.value !== this.tempValue) {
        this.tempValue = this.value
      }
    },
  },
  mounted () {},
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";
  /deep/ .el-dialog__body {
    padding: 0;
  }
  /deep/ .el-dialog__header {
    padding: 0;
    text-align: left;
    background: #F6F7FB;
    .el-dialog__title {
      font-size: 15px;
      font-weight: 400;
      color: #3B3B3B;
      line-height: 38px;
      padding-left: 28px;
    }
    .el-dialog__headerbtn {
      right: 10px;
      top: 10px;
    }
  }
  /deep/ .el-dialog__footer {
    padding: 15px 0 18px 0;
    .dialog-footer {
      margin-right: 86px;
      button {
        width: 83px;
        height: 33px;
        line-height: 33px;
        border-radius: 0;
        padding: 0;
        text-align: center;
      }
      .el-button--default {
        background: #EBF6FE;
      }
    }
  }
  .info {
    width: 468px;
    margin: 0 auto;
    padding: 30px 0 26px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #E8E9F0;
    .title {
      font-size: 15px;
      font-weight: 400;
      color: #3B3B3B;
      line-height: 21px;
      padding-bottom: 25px;
      text-align: center;
      span {
        color: #E9762E;
      }
    }
    .input-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-of-type {
        margin-bottom: 15px;
      }
      .tap {
        width: 40px;
        text-align: right;
        font-size: 13px;
        font-weight: 400;
        color: #3B3B3B;
        line-height: 18px;
        margin-right: 8px;
      }
    }
  }
</style>
