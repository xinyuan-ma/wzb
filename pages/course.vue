<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgCourse.courseTop | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="head-title">精 品 课</div>
        <div class="lesson-top">
          <img class="left" :src="ImgHome.lessonLeft" alt="">
          <p class="lesson-des">为财税高端精英打造 <span>3000+课程</span> 快速提升税务专业能力</p>
          <img class="right"  :src="ImgHome.lessonRight" alt="">
        </div>
        <div class="course-tap">
          <span>资深财税专家</span>
          <span>全面系统</span>
          <span>专业实用</span>
          <span>权威最新</span>
          <span>精心打造</span>
        </div>
        <div class="buy-now" @click="buy">立即购买</div>
      </div>
    </div>
    <div class="lesson">
      <div class="lesson-title">
        <p class="des">COURSE DESCRIPTION</p>
        <p class="title">课程介绍</p>
      </div>
      <p class="lesson-tap">紧跟市场热点，精心打造税务精品课程</p>
      <div class="lesson-list">
        <div class="lesson-info first">
          <div class="lesson-item" v-for="(item,key) in lessonTopList" :key="key">
            <img :src="item.icon" alt="">
            <p class="title" :class="{titleTop: key == 0 || key == 1}">{{item.title}}</p>
            <p class="des">{{item.des}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="superiority-content">
      <div class="superiority">
        <div class="lesson-title">
          <p class="des">COURSE ADVANTAGE</p>
          <p class="title">课程优势</p>
        </div>
        <p class="lesson-tap">性价比超高的税务课程 终生学习睿智的选择</p>
        <div class="lesson-list lesson-middle">
          <div class="lesson-info middle">
            <div class="lesson-item" v-for="(item,key) in lessonMiddleList" :key="key">
              <img :src="item.icon" alt="">
              <div>
                <p class="title">{{item.title}}</p>
                <p class="des" v-html="item.des"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <buy-dialog ref="buyDialog"></buy-dialog>
  </div>
</template>

<script>
  import ImgCourse from '@/assets/course'
  import ImgHome from '@/assets/home'
  import {imgbg} from '@/components/utils/filters'
  import buyDialog from "@/components/buyDialog";

  export default {
    name: 'Contract',
    components: {
      buyDialog
    },
    head() {
      return {
        title: '问政宝 - 精 品 课'
      }
    },
    filters: {imgbg},
    data() {
      return {
        ImgCourse,
        ImgHome,
        lessonTopList: [
          {
            icon: ImgCourse.courseMiddle1,
            title: '1000多课时',
            des: '课程不断更新，有效期一年'
          },{
            icon: ImgCourse.courseMiddle2,
            title: '多方位讲解税务知识',
            des: '全方位掌握税务知识'
          },{
            icon: ImgCourse.courseMiddle3,
            title: '行业专家授课',
            des: '帮你解决实际工作问题'
          },{
            icon: ImgCourse.courseMiddle4,
            title: '高端的品质',
            des: '高清录制，量身定制'
          },{
            icon: ImgCourse.courseMiddle5,
            title: '量身定制课程',
            des: '为税务高端人才量身定制'
          },{
            icon: ImgCourse.courseMiddle5,
            title: '实时关注税务热点',
            des: '税务热点解读和分析'
          }
        ],
        lessonMiddleList: [
          {
            icon: ImgCourse.courseBot1,
            title: '完整的体系',
            des: '按税种，专题明确<br>分类方便快捷'
          },
          {
            icon: ImgCourse.courseMiddle1,
            title: '1000多课时',
            des: '热门岗位，系统化<br>修炼 针对性提升'
          },
          {
            icon: ImgCourse.courseMiddle3,
            title: '行业专家授课',
            des: '专精问题突破，高效<br>解决实际工作问题'
          },
          {
            icon: ImgCourse.courseBot2,
            title: '专业快速提升',
            des: '全方位、系统化、高效<br>率替身职业技能'
          }
        ],
      }
    },
    methods: {
      buy () {
        this.$refs.buyDialog.dialogVisible = true
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/conf.scss";
  .lesson-top {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    color: #1F1F1F;
    line-height: 21px;
    padding: 25px 0 0 65px;
    .right {
      position: relative;
      top: 18px
    }
    .left {
      position: relative;
      top: 2px;
      left: 5px;
    }
    img {
      width: 40px;
      height: 8px;
    }
    span {
      font-size: 20px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 27px;
      padding: 0 30px 0 26px;
    }
  }
  .container {
    margin: 0 auto;
    @include flex-align-center();
    flex-direction: column;
    text-align: center;
    min-width: $PAGE_MAX_WIDTH;
  }
  .head-img-bg {
    height: 341px;
    padding-top: 56px;
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
      }
      p {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.63);
        line-height: 25px;
      }
      .advisory {
        margin: 43px 0 23px 0;
      }
      .course-tap {
        text-align: center;
        height: 25px;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 25px;
        margin: 21px 0 36px 0;
        span {
          position: relative;
          padding-right: 105px;
          &::after {
            position: absolute;
            content: '';
            display: inline-block;
            width: 48px;
            height: 1px;
            background-color: #43859E;
            right: 25px;
            top: 12px;
          }
          &:last-of-type {
            &::after {
              display: none;
            }
            padding-right: 0;
          }
        }
      }

      .buy-now {
        width: 170px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        background: #00A4FF;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        margin: 0 auto;
        cursor: pointer;
      }
    }
  }

  .double-des {
    width: 100%;
    padding: 40px 0 28px 0;
    text-align: center;
    .des {
      font-size: 53px;
      font-weight: 400;
      color: rgba(236, 241, 244, 0.8);
      line-height: 74px;
      letter-spacing: 5px;
    }
    .title {
      font-size: 30px;
      font-weight: 400;
      color: #1F1F1F;
      line-height: 41px;
      position: relative;
      z-index: 1;
      margin-top: -38px;
    }
  }



  .lesson {
    width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .superiority-content {
    width: 100%;
    background: #F4F7F9;
    .superiority {
      width: 1200px;
      margin: 0 auto;
    }
  }

    .lesson-title {
      width: 100%;
      height: 125px;
      text-align: center;
      .des {
        font-size: 53px;
        font-weight: 400;
        color: #ECF1F4;
        line-height: 125px;
        letter-spacing: 5px;
      }
      .title {
        font-size: 30px;
        font-weight: 400;
        color: #1F1F1F;
        line-height: 41px;
        position: relative;
        z-index: 1;
        margin-top: -65px;
      }
    }
    .lesson-tap {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      color: #A8A8A8;
      line-height: 27px;
    }
    .lesson-list {
      width: 1200px;
      background: #ffffff;
      &.lesson-middle {
        background: #F4F7F9;
      }
      .lesson-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 60px 0;
        &:last-of-type {
          padding-top: 0;
        }
        &.first {
          padding: 60px 90px;
          justify-content: space-between;
        }
        &.middle {
          margin-top: 10px;
          margin-bottom: 44px;
          padding: 0;
          .lesson-item {
            width: 273px;
            height: 268px;
            border-top: 3px solid #2A41C5;
            border-image:linear-gradient(90deg, #2A41C5 0%, #06AEFC 100%) 1 10;
            margin-top: 0 !important;
            padding: 43px 30px 30px 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
              margin: 0 0 9px 0;
            }
          }
        }
        .lesson-item {
          width: 30%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6) {
            margin-top: 75px;
          }
          img {
            width: 80px;
            height: auto;
          }
          .title {
            font-size: 20px;
            font-weight: 400;
            color: #1F1F1F;
            line-height: 27px;
            margin: 25px 0 4px 0;
            &.titleTop {
              margin-top: 40px;
            }
          }
          .des {
            font-size: 20px;
            font-weight: 400;
            color: #A8A8A8;
            line-height: 27px;
          }
        }
      }
    }

</style>
