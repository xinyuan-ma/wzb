<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgIntroduce.aboutUs | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="head-title"><span>财税问政</span><span>就找问政宝</span></div>
      </div>
    </div>

    <div class="introduction">
      <p class="title">平台简介</p>
      <div class="des">问政宝采用云计算、大数据、人工智能等科技手段，与数位财税行业大咖倾力打造的一站式税务内容，纳税咨询服务智能税务云平台。致力于通过互联网技术解决企业、财税从业者、社会公众的工作、学习、就业等各方面的问题。</div>
      <div class="des">在未来，我们希望问政宝能够成为每个财税领域从业者的优秀伙伴：当纳税人用户需要涉税服务的时候，只需要到问政宝，简单搜索就能找到合适的服务信息，联系到对应的服务提供商，获得优质的涉税服务体验；当税务师用户需要解决某一专业疑难时，也只需登录问政宝，通过搜索、社群服务等功能，快速找到问题的解决方法；当广大财税从业者登录问政宝时，问政宝可为其提供从学习、提升、答疑解惑等全方位的服务。希望通过问政宝的不懈努力，能够使繁琐的财税工作和财税服务变得简单、快捷和更有乐趣。 我们衷心的期望能得到您的持续关注和宝贵意见！</div>
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
