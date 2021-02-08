<template>
  <div :style="{backgroundImage: `url('${ImgHome.imgFooterBg}')`}" class="footer">
    <div class="container">
      <div class="flex-row">
        <div class="contact">
          <img :src="ImgHome.imgFooterLogoWhite" alt="" class="logo">
          <p class="contact-us">联系我们</p>
          <p class="position">上海总部：上海浦东陆家嘴东路166号中国保险大厦2704室</p>
        </div>
        <div class="right">
          <img :src="ImgHome.imgQrcode" alt="" class="qrcode">
          <p class="qrcode-desc">扫描二维码 了解更多</p>
        </div>
        <div class="right">
          <img :src="ImgHome.imgSmQrcode" alt="" class="qrcode">
          <p class="qrcode-desc">扫描二维码 进入小程序</p>
        </div>
      </div>
      <p class="bottom">
        <span>Copyright <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">沪ICP备19039348号-1</a> © 2006-2019 WANSHUIJIN完税金</span>
        <a href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020190828153229000004976296-SAIC_SHOW_310000-2c9be8bd710251bb017163f61e9e3bb1900&signData=MEUCIQCZ6sNbwCqQL581oXBA4xr4IHU38h34i45N50Xk9lWnAwIgTtMEykgf589OQ/pTUgbdlFPHRqorPH/wNgBvmIUMetY=" target="_blank">
<!--        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">-->
          <img :src="ImgHome.imgPolice" alt="">
        </a>
      </p>
    </div>
  </div>
</template>
<script>
// import { imgbg } from './utils/filters'
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
  // min-width: 1028px;

  min-width: $PAGE_MAX_WIDTH;
  // height: 491px;
  height: 326px;
  background-color: #FB5640;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 100%;

  .container {
    min-width: $PAGE_MAX_WIDTH;
  }

  .flex-row {
    // height: 450px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding-top: 51px;
  }
  .contact {
    flex: 1;
  }
  .right {
    // padding-top: 51px;
    text-align: right;
    flex-shrink: 0;
    &:last-of-type {
      margin-left: 30px;
    }

    .qrcode {
      background-color: white;
      width: 147px;
      height: 147px;
    }
    .qrcode-desc {
      font-size:16px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:24px;

      margin-top: 26px - 4px;
    }
  }

  .logo {
    width:188px;
    height:72px;
  }
  .position {
    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:24px;
    margin-top: 12px;
  }
  .contact-us {
    // width:88px;
    // height:21px;
    font-size:22px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:25px;

    margin-top: 37px;
  }
  .bottom {
    margin: 40px 0 20px 0;
    @include flex-align-center();
    a {
      color: white;
      text-decoration: none;
    }
    span {
      text-align: center;
      font-size:7px;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      // line-height:12px;
      // width:315px;
      // height:14px;
      font-size:14px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:25px;
    }
    img {
      cursor: pointer;
      width:40px;
      height: 45px;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
}
</style>
