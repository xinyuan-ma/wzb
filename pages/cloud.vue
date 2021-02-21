<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgIntroduce.introduceTop | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="head-title">问政宝旗下一站式政策信息云平台</div>
        <div class="buy-now" @click="buy">立即购买</div>
      </div>
    </div>
    <div class="lesson">
      <div class="lesson-title">
        <p class="des">SERVICE ADVANTAGES</p>
        <p class="title">问政宝服务优势</p>
      </div>
      <div class="lesson-list">
        <div class="lesson-info first">
          <div class="lesson-item" v-for="(item,key) in lessonTopList" :key="key">
            <img :src="item.icon" alt="">
            <div>
              <p class="title">{{item.title}}</p>
              <p class="des" v-html="item.des"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="superiority-content">
      <div class="superiority">
        <div class="lesson-title">
          <p class="des">SOLVE THE PROBLEM</p>
          <p class="title">问政宝解决了哪些问题</p>
        </div>
        <div class="solve-question">
          <div class="question-content">
            <div class="question-right">
              <div class="question-item btn-2">
                <div class="title">文件吃不透</div>
                <div class="des">
                  <p>未消化理解，灵活运用难</p>
                  <p>匹配不精准，项目易遗漏</p>
                </div>
              </div>
              <div class="question-item btn-1">
                <div class="title">文件看不懂</div>
                <div class="des">
                  <p>知识量庞大，阅读耗时多</p>
                  <p>专业术语多，要点抓不住</p>
                </div>
              </div>
              <div class="question-item btn-4">
                <div class="title">管理工作难</div>
                <div class="des">
                  <p>绩效考评难，计划预算难</p>
                  <p>依赖程度高，工作交接难</p>
                </div>
              </div>
              <div class="question-item btn-3">
                <div class="title">文件编写难</div>
                <div class="des">
                  <p>质量要求高，报告撰写难</p>
                  <p>工作量较大，编写时间紧</p>
                </div>
              </div>

            </div>
            <div class="question-item left">
              <div class="title">文件收集难</div>
              <div class="des">
                <p>文件来源多，每天要收集</p>
                <p>文件不完整，文件查找难</p>
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
  import ImgIntroduce from '@/assets/introduce'
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
        title: '问政宝 - 税务云平台'
      }
    },
    filters: {imgbg},
    data() {
      return {
        ImgIntroduce,
        ImgCourse,
        ImgHome,
        lessonTopList: [
          {
            icon: ImgIntroduce.introduce1,
            title: '专业权威',
            des: '税务专业人士的最好工具<br>第一时间传递财税'
          },{
            icon: ImgIntroduce.introduce2,
            title: '高效智能',
            des: '采用领先的人工智能技术打造<br>操作便捷一键'
          },{
            icon: ImgIntroduce.introduce3,
            title: '内容全面',
            des: '财税信息全覆盖，内容定期更新<br>最新政策分析与解答'
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
  .container {
    margin: 0 auto;
    @include flex-align-center();
    flex-direction: column;
    text-align: center;
    min-width: $PAGE_MAX_WIDTH;
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
        font-size: 35px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 50px;
        margin-bottom: 49px;
      }
      p {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.63);
        line-height: 25px;
      }
      .advisory {
        margin: 43px 0 23px 0;
      }

      .buy-now {
        cursor: pointer;
        width: 170px;
        height: 43px;
        line-height: 43px;
        text-align: center;
        background: #00A4FF;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        margin: 0 auto;
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
    width: 100%;
    background: #F4F7F9;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 44px;
  }

  .superiority-content {
    width: 100%;
    background: #ffffff;
    padding-bottom: 44px;
    .superiority {
      width: 1200px;
      margin: 0 auto;
    }
  }

    .lesson-title {
      width: 100%;
      height: 125px;
      margin-bottom: 30px;
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
    .lesson-list {
      width: 1200px;
      background: #F4F7F9;
      .lesson-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .lesson-item {
          padding: 50px 0 30px 0;
          border-top: 3px solid #2A41C5;
          border-image:linear-gradient(90deg, #2A41C5 0%, #06AEFC 100%) 1 10;
          width: 358px;
          height: 268px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          position: relative;
          background: #ffffff;
          transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          &:hover {
            transform: translateY(-20px);
          }
          img {
            width: 78px;
            height: auto;
          }
          .title {
            font-size: 20px;
            font-weight: 400;
            color: #1F1F1F;
            line-height: 27px;
            margin-bottom: 4px;
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

  .solve-question {
    width: 100%;
    .question-content {
      margin: 0 auto;
      height: 473px;
      padding: 0 38px;
      display: flex;
      align-items: center;
      width: fit-content;
      .question-right {
        width: 820px;
      }
      .question-item {
        text-align: center;
        display: inline-block;
        border:1px dashed #888888;
        &:hover {
          .title {
            transition: all 0.3s linear;
            color: rgba(31,31,31,0.8);
          }
        }
        &.left {
          width: 293px;
          height: 473px;
          margin-left: 15px;
        }
        &.btn-1 {
          width: 263px;
          height: 236px;
          margin-bottom: 15px;
        }
        &.btn-2 {
          width: 540px;
          height: 236px;
          margin-right: 10px;
        }
        &.btn-3 {
          width: 540px;
          height: 221px;
        }
        &.btn-4 {
          width: 263px;
          height: 221px;
          margin-right: 10px;
        }

        .title {
          font-size: 18px;
          font-weight: 400;
          color: #FFFFFF;
          width: 100%;
          height: 125px;
          line-height: 125px;
          text-align: center;
          background: linear-gradient(94deg, #5489F9 0%, #4D9DF1 100%);
        }
        .des {
          padding-top: 30px;
          font-size: 15px;
          font-weight: 400;
          color: #6E6B84;
          line-height: 21px;
        }
      }
    }

  }
</style>
