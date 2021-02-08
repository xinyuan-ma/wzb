<template>
  <button class="submit" @click="emitClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'FButton',
  methods: {
    emitClick (ev) {
      this.$emit('click', ev)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";

button {
  // width: 219px;
  width: 100%;
  height: 63px;
  border-radius: 3px;
  background-color: $THEME_ORANGE;
  border-color: $THEME_ORANGE;

  font-size:14px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height: 63px;

  cursor: pointer;
  outline: none;

  &:hover {
    background-color: $THEME_ORANGE_HOVER;
  }
}
</style>
