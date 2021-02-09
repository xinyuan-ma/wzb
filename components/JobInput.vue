<template>
  <div class="job-input">
    <input
      v-model="tempValue"
      :placeholder="placeholder"
      type="text"
      class="f-input" />
    <img class="img-search" :src="ImgJoinUs.jobSearch" alt="">
    <div class="imgGo">
      <span>查看工作岗位</span>
      <img class="img-go" :src="ImgJoinUs.jobGo" alt="">
    </div>
  </div>
</template>

<script>
import ImgJoinUs from '@/assets/joinUs'

export default {
  name: 'JObInput',
  props: {
    placeholder: {
      type: String,
      default () {
        return ''
      }
    },
    value: {
      type: String,
      default () {
        return ''
      }
    },
  },
  data () {
    return {
      tempValue: '',
      ImgJoinUs
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
  mounted () {
    this.tempValue = this.value
  },
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";

.job-input {
  width: 1125px;
  height: 45px;
  position: relative;
}
input {
  width: 100%;
  height: 45px;
  font-size:15px;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:45px;
  padding: 0 135px 0 50px;
  border: none;
  background: #E5E5E5;

  &:focus {
    outline-color: #108CEE;
  }

  &::placeholder {
    color: #878787;
  }
}

  .img-search {
    cursor: pointer;
    position: absolute;
    width: 21px;
    height: 23px;
    left: 18px;
    bottom: 10px;
  }
  .imgGo {
    cursor: pointer;
    right: 0;
    bottom: 10px;
    position: absolute;
    font-size: 15px;
    font-weight: 400;
    color: #108CEE;
    line-height: 21px;
    .img-go {
      width: 8px;
      height: 13px;
      margin: 0 15px 0 10px;
    }
  }
</style>
