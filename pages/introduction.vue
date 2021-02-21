<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgIntroduce.aboutUs | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="head-title"><span>问政宝</span><span>传递中国政能量</span></div>
      </div>
    </div>

    <div class="introduction">
      <p class="title">平台简介</p>
      <div class="des">问政宝采用云计算、大数据、人工智能等科技手段，与权威专家倾力打造的一站式政策信息，政策咨询服务智能云平台。致力于通过互联网技术让政策落实的“最后一公里”越发通畅。</div>
      <div class="des">智能推荐算法根据企业不同的业务场景精准触达所需政策，涵盖中央及各省市最新政策，并首创超强政策检索功能，真正提供全过程政策信息及配套增值服务，打造国内企业政策信息第一品牌。</div>
      <div class="des">我们衷心的期望能得到您的持续关注和宝贵意见！</div>
    </div>
  </div>
</template>

<script>
  import ImgIntroduce from '@/assets/introduce'
  import {imgbg} from '@/components/utils/filters'


  export default {
    name: 'introduction',
    components: {},
    head() {
      return {
        title: '问政宝 - 关于我们'
      }
    },
    filters: {imgbg},
    data() {
      return {
        ImgIntroduce
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  @import "../style/conf.scss";
  .container {
    margin: 0 auto;
    @include flex-align-center();
    flex-direction: column;
    text-align: center;
    min-width: $PAGE_MAX_WIDTH;
    background: #F4F7F9;
    padding-bottom: 44px;
  }
  .head-img-bg {
    height: 341px;
    padding-top: 100px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    .container-screen-width {
      text-align: center;
      .head-title {
        font-size: 30px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 41px;
        text-align: center;
        span {
          &:first-of-type {
            margin-right: 70px;
          }
        }
      }
    }
  }

  .introduction {
    width: 1125px;
    height: 488px;
    margin: 0 auto;
    position: relative;
    margin-top: -95px;
    padding: 35px 59px 0 59px;
    background: #ffffff;
    text-align: left;
    .title {
      font-size: 30px;
      font-weight: 400;
      color: #1F1F1F;
      line-height: 41px;
      margin-bottom: 35px;
      text-align: center;
    }
    .des {
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: 400;
      color: #1F1F1F;
      line-height: 25px;
    }
  }
</style>
