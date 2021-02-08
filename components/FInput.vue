<template>
  <input
    v-model="tempValue"
    :placeholder="placeholder"
    type="text"
    class="f-input" />
</template>

<script>
export default {
  name: 'FButton',
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

input {
  // width: 297px;
  width: 100%;
  height: 61px;

  font-size:14px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:50px;
  padding: 23.5px 30px;
  border-radius: 3px;
  border: none;

  &:focus {
    outline-color: $THEME_ORANGE;
  }

  &::placeholder {
    opacity:0.5;
  }
}
</style>
