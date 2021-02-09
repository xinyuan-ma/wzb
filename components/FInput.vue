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
    }
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
  width: 300px;
  height: 33px;
  font-size:14px;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:33px;
  padding: 13px;
  border-radius: 0;
  border: 1px solid #CCCCCC;

  &:focus {
    outline-color: #108CEE;
  }

  &::placeholder {
    color: #8E8E8E;
  }
}
</style>
