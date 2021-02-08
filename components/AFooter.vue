<template>
  <div class="footer">
    <div class="container">
      <div class="link-content">
        <div class="link-item btn">
          <p class="title">友情链接</p>
          <a href="https://www.wanshuijin.com/" target="_blank">完税金</a>
        </div>
        <div class="link-item btn">
          <p class="title">产品与服务</p>
          <a href="https://www.wanshuijin.com/" target="_blank">税务云平台</a>
          <a href="https://www.wanshuijin.com/" target="_blank">精品课</a>
        </div>
        <div class="link-item">
          <p class="title">联系我们</p>
          <span>邮箱：zhouhong@wanshuijin.com</span>
        </div>
      </div>
      <div class="home-footer">
        上海添青科技有限公司 备案号:12345
      </div>
    </div>
  </div>
</template>
<script>
import ImgHome from '@/assets/home'

export default {
  name: 'AFooter',
  data () {
    return {
      ImgHome,
      // qrcode,
    }
  },
  methods: {
    goPolice () {
      window.location.href = 'http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020190828153229000004976296-SAIC_SHOW_310000-2c9be8bd710251bb017163f61e9e3bb1900&signData=MEUCIQCZ6sNbwCqQL581oXBA4xr4IHU38h34i45N50Xk9lWnAwIgTtMEykgf589OQ/pTUgbdlFPHRqorPH/wNgBvmIUMetY='
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";

.footer {
  position: relative;
  display: flex;
  width: 100%;

  min-width: $PAGE_MAX_WIDTH;
  // height: 491px;
  height: 326px;
  /*background-color: #FB5640;*/
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 100%;

  .container {
    min-width: $PAGE_MAX_WIDTH;
  }

  .link-content {
    width: 100%;
    background: #131C33;
    padding: 0 38px;
    .link-item {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
      color: #A8A8A8;
      &.btn {
        border-bottom: 1px solid #353C50;
      }
      padding: 28px 0 26px 0;
      .title {
        font-size: 15px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 21px;
        width: 75px;
        margin-right: 50px;
      }

      a {
        text-decoration: none;
        margin-right: 38px;
        color: #A8A8A8;
        &:hover {
          color: #FFFFFF;
        }
      }
    }
  }

  .home-footer {
    width: 100%;
    height: 75px;
    line-height: 75px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #A8ADB6;
    background: #303645;
  }
}
</style>
