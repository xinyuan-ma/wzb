<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgAboutUs.imgBg | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="intro">
          <div class="intro-title">
            平台简介
          </div>
          <div class="intro-detail">
            <p class="intent-2">完税金——专注完税交付 提升完税价值，目前已经获得上市公司NEXION TECH(08420)战略入股投资。</p>
            <p class="intent-2">平台基于各类人群收入的税负痛点，专注为企业、个人及资本市场提供综合化、专业化、定制化、合规化的完税交付解决方案，并依据完税结果的大数据分析，帮助企业和个人获取更多的增值服务，从而提升完税价值。</p>
            <p class="intent-2">在不久的未来，纳税服务会成为中国每一个企业、每一个家庭必需的专业服务，不纳税、偷税漏税都将行不通。顺应时代，完税金将打造一站式“合规、安全、共享”的完税综合服务平台，助力大众创业万众创新。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 企业愿景 -->
    <div class="full-box bg-gray vision-box">
      <div class="container-screen-width">
        <div class="box-title">企业愿景</div>
        <div class="flex-row three-cols">
          <div v-for="(card, index) in visionList" :key="index" class="card vision-card">
            <div class="text easing">
              <div class="align-left">
                <img :src="card.icon" alt="" class="icon">
                <img :src="card.iconL" alt="" class="icon selected">
              </div>
              <div class="card-desc">{{ card.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地图 -->
    <div
      class="full-box bg-white map-box">
      <div
        :style="ImgAboutUs.imgMap | imgbg"
        class="container-screen-width height-100">
        <div class="positioning">
          <img :src="ImgAboutUs.imgMapPoint" alt="" class="icon-position">
          <div class="position-title">上海浦东陆家嘴东路166号中国保险大厦2704室</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// filter
import { imgbg } from '@/components/utils/filters'

// assets
import ImgAboutUs from '@/assets/aboutUs'
import ContactData from '@/components/config/contact-data'

/* eslint-disable no-console */
export default {
  name: 'Contract',
  head () {
    return {
      title: '完税金 - 关于我们',
    }
  },
  filters: { imgbg, },
  data () {
    return {
      ...ContactData,
      ImgAboutUs,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "../style/conf.scss";

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-width: $PAGE_MAX_WIDTH;
}

.head-img-bg {
  height: 651px;
  padding-top: 138px;
  height: 409px;
  padding-top: 66px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  .intro {
    padding-left: 123px;
    text-align: left;

    .intro-title {
      // width:157px;
      // height:38px;
      font-size:40px;
      font-family:PingFang SC;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:50px;

      margin-bottom: 51px;
    }

    .intro-detail {
      width:928px;
      // height:185px;
      font-size:16px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:24px;

      .intent-2 {
        margin-bottom: 1em;
        &:before {
          display: inline-block;
          content: ' ';
          width: 36px;
          height: 24px;
        }
      }
    }
  }
}

.vision-box {
  height: 792px;
  background-color: white;
  display: flex;
  flex-direction: column;
  // padding-top: 188px - 5px;

  .box-title {
    display: block;
    text-align: center;
    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }

  .three-cols {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    .vision-card {
      cursor: pointer;
      width: 453px;
      height: 222px;
      margin-bottom: 21px;
      margin-right: 21px;
      background:rgba(245,245,245,1);
      border-radius:4px;

      padding-top: 40px;
      padding-left: 52px;
      padding-right: 52px;

      &:nth-child(n + 1) {
        margin-right: 0px;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        .align-left {
          margin-bottom: 36px;
        }
      }

      &:hover {
        background-color: $THEME_ORANGE;

        .icon {
          display: none;

          &.selected {
            display: block;
          }
        }
        .card-desc {
          color: #FFFFFF;
        }
      }
      .align-left {
        text-align: left;
        height: 75px;

        margin-bottom: 46px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .icon {
        max-width: 83px;

        &.selected {
          display: none;
        }
      }

      .card-desc {
        font-size:16px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(78,78,78,1);
        line-height:24px;
        text-align: left;
      }
    }
  }
}

.map-box {
  height: 419px;
  position: relative;
  text-align: center;
  margin-bottom: 112px;

  .height-100 {
    height: 100%;
    padding-top: 115px;
    // 地图，需要居中
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .positioning {
    position: relative;
    display: inline-block;
  }
  .icon-position {
    width: 154px;
    height: 154px;
    position: relative;
    left: -30px;
  }
  .position-title {
    position: absolute;
    left: 83px;
    top: 65px;

    width: 350px;
    text-align: left;

    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:24px;
  }
}

</style>
