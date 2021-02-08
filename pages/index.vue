<template>
  <div class="container">
    <!-- 头图 -->
    <div
      :style="ImgHome.imgHomeTop | imgbg"
      class="head-img-bg imgbg full-box">
      <div class="container-screen-width">
        <div class="head-title">问政宝 正式上线</div>
        <p class="advisory">专业的咨询服务</p>
        <p>大数据、云计算、人工智能等新兴前沿技术</p>
        <p>助力企业数字化转型升级</p>
      </div>
    </div>

    <div class="project">
      <div class="project-item" v-for="(item, key) in projectList" :key="key">
        <img :src="item.icon" alt="">
        <div class="project-des">
          <p class="title">{{item.title}}</p>
          <p class="des">{{item.des}}</p>
        </div>
      </div>
    </div>

    <div class="double-des">
      <p class="des">TAX ADMINISTRATION</p>
      <p class="title">问政宝税务云平台</p>
    </div>

    <div :style="ImgHome.platform | imgbg" class="platform"></div>

    <div class="solve-question">
      <p class="solve-title">问政宝解决了哪些问题</p>
      <div class="question-content">
        <div class="question-item left">
          <div class="title">文件收集难</div>
          <div class="des">
            <p>文件来源多，每天要收集</p>
            <p>文件不完整，文件查找难</p>
          </div>
        </div>
        <div class="question-right">
          <div class="question-item btn-1">
            <div class="title">文件看不懂</div>
            <div class="des">
              <p>知识量庞大，阅读耗时多</p>
              <p>专业术语多，要点抓不住</p>
            </div>
          </div>
          <div class="question-item btn-2">
            <div class="title">文件吃不透</div>
            <div class="des">
              <p>未消化理解，灵活运用难</p>
              <p>匹配不精准，项目易遗漏</p>
            </div>
          </div>
          <div class="question-item btn-3">
            <div class="title">文件编写难</div>
            <div class="des">
              <p>质量要求高，报告撰写难</p>
              <p>工作量较大，编写时间紧</p>
            </div>
          </div>
          <div class="question-item btn-4">
            <div class="title">管理工作难</div>
            <div class="des">
              <p>绩效考评难，计划预算难</p>
              <p>依赖程度高，工作交接难</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson">
      <div class="lesson-title">
        <p class="des">EXCELLENT COURSE</p>
        <p class="title">精 品 课</p>
      </div>
      <div class="lesson-list">
        <div class="lesson-top">
          <img class="left" :src="ImgHome.lessonLeft" alt="">
          <p class="lesson-des">为财税高端精英打造 <span>3000+课程</span> 快速提升税务专业能力</p>
          <img class="right"  :src="ImgHome.lessonRight" alt="">
        </div>
        <div class="lesson-info first">
          <div class="lesson-item" v-for="(item,key) in lessonTopList" :key="key">
            <img :src="item.icon" alt="">
            <p class="title">{{item.title}}</p>
          </div>
        </div>

        <div class="lesson-top">
          <img class="left" :src="ImgHome.lessonLeft" alt="">
          <img class="seven" :src="ImgHome.lessonSeven" alt="">
          <p class="lesson-des">大主题财税内容全覆盖</p>
          <img class="right"  :src="ImgHome.lessonRight" alt="">
        </div>
        <div class="lesson-info">
          <div class="lesson-item" v-for="(item,key) in lessonMiddleList" :key="key">
            <img :src="item.icon" alt="">
            <p class="title">{{item.title}}</p>
          </div>
        </div>

        <div class="lesson-info">
          <div class="lesson-item" v-for="(item,key) in lessonBotList" :key="key">
            <img :src="item.icon" alt="">
            <div v-if="!item.title" class="details" :style="item.img | imgbg">
              <p class="detail-btn">查看详情</p>
            </div>
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="table-content">
      <div class="table-info">
        <el-table :data="tableData" style="width: 100%" :stripe="true">
          <el-table-column prop="module" label="模块" width="180" align="center"></el-table-column>
          <el-table-column prop="function" label="功能" width="180" align="center"></el-table-column>
          <el-table-column prop="user" label="注册用户" align="center">
            <template slot-scope="scope">
              <img class="table-right" v-if="scope.row.user == 'right'" :src="ImgHome.tableRight" alt="">
              <img class="table-error" v-else-if="scope.row.user == 'error'" :src="ImgHome.tableError" alt="">
              <span v-else>{{scope.row.user}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="primary" label="初级会员" align="center" width="150">
            <template slot-scope="scope">
              <img class="table-right" v-if="scope.row.primary == 'right'" :src="ImgHome.tableRight" alt="">
              <img class="table-error" v-else-if="scope.row.primary == 'error'" :src="ImgHome.tableError" alt="">
              <template v-else-if="scope.row.primary == 'buy'">
                <p class="buy-money">19800.00元/年</p>
                <p class="buy-now">立即购买</p>
              </template>
              <span v-else>{{scope.row.primary}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="middle" label="中级会员" align="center" width="150">
            <template slot-scope="scope">
              <img class="table-right" v-if="scope.row.middle == 'right'" :src="ImgHome.tableRight" alt="">
              <img class="table-error" v-else-if="scope.row.middle == 'error'" :src="ImgHome.tableError" alt="">
              <template v-else-if="scope.row.middle == 'buy'">
                <p class="buy-money">19800.00元/年</p>
                <p class="buy-now">立即购买</p>
              </template>
              <span v-else>{{scope.row.middle}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="advanced" label="高级会员" align="center" width="150">
            <template slot-scope="scope">
              <img class="table-right" v-if="scope.row.advanced == 'right'" :src="ImgHome.tableRight" alt="">
              <img class="table-error" v-else-if="scope.row.advanced == 'error'" :src="ImgHome.tableError" alt="">
              <template v-else-if="scope.row.advanced == 'buy'">
                <p class="buy-money">19800.00元/年</p>
                <p class="buy-now">立即购买</p>
              </template>
              <span v-else>{{scope.row.advanced}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="super" label="超级会员" align="center" width="150">
            <template slot-scope="scope">
              <img class="table-right" v-if="scope.row.super == 'right'" :src="ImgHome.tableRight" alt="">
              <img class="table-error" v-else-if="scope.row.super == 'error'" :src="ImgHome.tableError" alt="">
              <template v-else-if="scope.row.super == 'buy'">
                <p class="buy-money">19800.00元/年</p>
                <p class="buy-now">立即购买</p>
              </template>
              <span v-else>{{scope.row.super}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="feedback">
      <div class="feedback-des">
        <p class="des">CUSTOMER FEEDBAC</p>
        <p class="title">客户反馈</p>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,key) in feedBackList" :key="key">
            <div class="feedBack-list">
              <div class="feedBack-top">
                <img :src="item.icon" alt="">
                <div class="feedBack-info">
                  <p class="title">{{item.name}}</p>
                  <p class="company">{{item.company}}</p>
                </div>
              </div>
              <div>{{item.des}}</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import ImgHome from '@/assets/home'
  import {imgbg} from '@/components/utils/filters'


  export default {
    name: 'Contract',
    components: {},
    head() {
      return {
        title: '问政宝 - 首页'
      }
    },
    filters: {imgbg},
    data() {
      return {
        ImgHome,
        projectList: [
          {
            icon: ImgHome.project2,
            title: '15000+',
            des: '服务商使用中'
          },
          {
            icon: ImgHome.project1,
            title: '90%',
            des: '提升工作效率'
          },
          {
            icon: ImgHome.project3,
            title: '95%',
            des: '资讯存储量'
          }
        ],
        lessonTopList: [
          {
            icon: ImgHome.lessonTop1,
            title: '资深财税专家'
          },
          {
            icon: ImgHome.lessonTop2,
            title: '全面系统'
          },
          {
            icon: ImgHome.lessonTop3,
            title: '专业实用'
          },
          {
            icon: ImgHome.lessonTop4,
            title: '权威最新'
          },
          {
            icon: ImgHome.lessonTop5,
            title: '精心打造'
          }
        ],
        lessonMiddleList: [
          {
            icon: ImgHome.lessonMiddle1,
            title: '税法解读'
          },
          {
            icon: ImgHome.lessonMiddle2,
            title: '税务风险'
          },
          {
            icon: ImgHome.lessonMiddle3,
            title: '行业税务'
          },
          {
            icon: ImgHome.lessonMiddle4,
            title: '税务专题'
          }
        ],
        lessonBotList: [
          {
            icon: ImgHome.lessonBot1,
            title: '财务管理'
          },
          {
            icon: ImgHome.lessonBot2,
            title: '会计与报告'
          },
          {
            icon: ImgHome.lessonBot3,
            title: '职场发展'
          },
          {
            img: ImgHome.lessonBot4,
            icon: '',
            title: ''
          }
        ],
        tableData: Object.freeze([
          {
          module: '收费标准',
          function: '',
          user: '免费',
          primary: 'buy',
          middle: 'buy',
          advanced: 'buy',
          super: 'buy'
        },
          {
            module: '体验专区',
            function: '体验专区',
            user: 'right',
            primary: 'right',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '政策文库',
            function: '政策搜索',
            user: 'error',
            primary: 'right',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '',
            function: '项目解读',
            user: 'error',
            primary: 'right',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '功能专区',
            function: '模糊搜索',
            user: 'error',
            primary: 'error',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '',
            function: '专属客户服务',
            user: 'error',
            primary: 'error',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '',
            function: '智能机器人',
            user: 'error',
            primary: 'error',
            middle: 'right',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '精品课',
            function: '精品课',
            user: 'error',
            primary: 'error',
            middle: 'error',
            advanced: 'right',
            super: 'right'
          },
          {
            module: '软件OEM',
            function: '软件OEM',
            user: 'error',
            primary: 'error',
            middle: 'error',
            advanced: 'error',
            super: 'right'
          },
          {
            module: '使用账户数',
            function: '使用账户数',
            user: 'error',
            primary: '1',
            middle: '3',
            advanced: '5',
            super: '无限制'
          }
        ]),
        feedBackList: [
          {
            icon: ImgHome.feedBack,
            name: 'Lesa',
            company: '上海市**税务咨询有限公司',
            des: '成为问政宝的忠实粉丝是朋友推荐的。因为自己刚刚从事这个行业，很多东西也不太了解。自己想提升一下朋友就推荐了问政宝，自己也找了其他同类型平台对比发现还是问政宝好。对工作和学习都好很大的帮助，希望问政宝越办越好。'
          },
          {
            icon: ImgHome.feedBack,
            name: '李*',
            company: '深圳市**科技有限公司',
            des: '最近公司有做这方面的业务，领导说要找一个好的平台给员工培训一下这方面的知识，然后在网上看到问政宝这个平台就加工作人员聊了一下。看得出来很专业，也去公司看过，价格也便宜，想着反正要用就买了问政宝的会员。内部培训同事用完以后都说买对了很好用，里面的内容很系统全面还有智能机器人随时能解答问题。'
          },
          {
            icon: ImgHome.feedBack,
            name: 'Lesa',
            company: '上海市**税务咨询有限公司',
            des: '成为问政宝的忠实粉丝是朋友推荐的。因为自己刚刚从事这个行业，很多东西也不太了解。自己想提升一下朋友就推荐了问政宝，自己也找了其他同类型平台对比发现还是问政宝好。对工作和学习都好很大的帮助，希望问政宝越办越好。'
          },
          {
            icon: ImgHome.feedBack,
            name: 'Lesa',
            company: '上海市**税务咨询有限公司',
            des: '成为问政宝的忠实粉丝是朋友推荐的。因为自己刚刚从事这个行业，很多东西也不太了解。自己想提升一下朋友就推荐了问政宝，自己也找了其他同类型平台对比发现还是问政宝好。对工作和学习都好很大的帮助，希望问政宝越办越好。'
          },
          {
            icon: ImgHome.feedBack,
            name: '李*',
            company: '深圳市**科技有限公司',
            des: '最近公司有做这方面的业务，领导说要找一个好的平台给员工培训一下这方面的知识，然后在网上看到问政宝这个平台就加工作人员聊了一下。看得出来很专业，也去公司看过，价格也便宜，想着反正要用就买了问政宝的会员。内部培训同事用完以后都说买对了很好用，里面的内容很系统全面还有智能机器人随时能解答问题。'
          }
        ]
      }
    },
    mounted() {
      this.makeSwiper()
    },
    methods: {
      makeSwiper () {
        let mySwiper = new Swiper('.swiper-container', {
          // autoplay: true,//可选选项，自动滑动
          slidesPerView: 1.6,
          // loop: true,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/conf.scss";
  .finance-img-bg {
    .finance-tilte {
      font-size:30px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:35px;
      margin: 50px 0 40px 0;
    }
    .finance-destail {
      font-size:14px;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:18px;
      margin-bottom: 35px;
    }
    .finance-list-container {
      @include flex-align-center();
      .finance-list {
        @include flex-just();
        align-items: flex-start;
        flex-direction: column;
        &:first-of-type {
          margin-right: 260px;
        }
        .finance-img {
          width: 300px;
          height: 550px;
          position: relative;
          .finance-des-ft, .finance-des-sd {
            position: absolute;
            font-size:11px;
            font-weight:600;
            color:rgba(97,97,97,0.9);
            line-height:16px;
            text-align: center;
            background-color: #FAF5F2;
            bottom: 0;
            z-index: 2;
            padding: 3px 10px;
          }
          .finance-des-ft {
            left: 50px;
          }
          .finance-des-sd {
            right: 10px;
          }
          .finance-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
          }
        }
        .finance-title {
          font-size:18px;
          font-weight:600;
          color:rgba(0,0,0,1);
          line-height:30px;
          margin: 40px 0 20px 30px;
        }
        .finance-des {
          font-size:12px;
          font-weight:600;
          color:rgba(97,97,97,1);
          line-height:20px;
          margin-left: 30px;
          margin-bottom: 50px;
        }
      }
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
    height: 418px;
    padding: 96px 0 0 114px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
    .container-screen-width {
      text-align: left;
      .head-title {
        font-size: 38px;
        line-height: 53px;
        color: #FFFFFF;
      }
      p {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.63);
        line-height: 25px;
      }
      .advisory {
        margin: 43px 0 23px 0;
      }
    }
  }

  .project {
    position: relative;
    z-index: 1;
    margin-top: -44px;
    width: 100%;
    padding: 0 38px;
    background: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;
    .project-item {
      width: 358px;
      padding-left: 84px;
      display: flex;
      align-items: center;
      height: 88px;
      background: #FFFFFF;
      margin-right: 26px;
      box-shadow: 0px 0px 10px 0px rgba(146,150,191,0.5);
      &:last-of-type {
        margin-right: 0;
      }
      img {
        width: 40px;
        height: auto;
      }
      .project-des {
        margin-left: 30px;
        text-align: left;
        .title {
          font-size: 27px;
          font-weight: 400;
          color: #2469F3;
          line-height: 38px;
        }
        .des {
          font-size: 14px;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 20px;
        }
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

  .platform {
    width: 1170px;
    height: 45px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% 100%;
  }

  .solve-question {
    width: 100%;
    .solve-title {
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      color: #1F1F1F;
      line-height: 21px;
      padding: 31px 0 16px 0;
    }
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
        padding: 44px 33px;
        text-align: left;
        display: inline-block;
        &.left {
          width: 293px;
          height: 473px;
          margin-right: 15px;
          background: linear-gradient(180deg, #50B7D7 0%, #88C9E4 100%);
        }
        &.btn-1 {
          width: 263px;
          height: 236px;
          margin-bottom: 15px;
          margin-right: 10px;
          background: linear-gradient(180deg, #706EDC 0%, #9B9AE6 100%);
        }
        &.btn-2 {
          width: 540px;
          height: 236px;
          background: linear-gradient(180deg, #50B7D7 0%, #87C8E3 100%);
        }
        &.btn-3 {
          width: 540px;
          height: 221px;
          margin-right: 10px;
          background: linear-gradient(180deg, #42A6F3 0%, #60B2F5 100%);
        }
        &.btn-4 {
          width: 263px;
          height: 221px;
          background: linear-gradient(180deg, #706EDC 0%, #9B9AE6 100%);
        }

        .title {
          font-size: 20px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 27px;
          padding-bottom: 10px;
          border-bottom: 1px solid #98D7EF;
        }
        .des {
          font-size: 15px;
          font-weight: 400;
          color: #EBFAFF;
          line-height: 21px;
          padding-top: 35px;
        }
      }
    }

  }

  .lesson {
    width: 100%;
    background: linear-gradient(180deg, #1298BC 0%, #346DCF 100%);
    padding: 38px 0;
    margin-top: 44px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .lesson-title {
      width: 1125px;
      height: 125px;
      background: #0D465E;
      text-align: center;
      .des {
        font-size: 53px;
        font-weight: 400;
        color: #135E7E;
        line-height: 125px;
        letter-spacing: 5px;
      }
      .title {
        font-size: 30px;
        font-weight: 400;
        color: #FFD102;
        line-height: 41px;
        position: relative;
        z-index: 1;
        margin-top: -65px;
      }
    }
    .lesson-list {
      width: 1125px;
      background: #ffffff;
      .lesson-top {
        width: 100%;
        display: flex;
        justify-content: flex-start;
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
        .seven {
          width: 16px;
          height: 23px;
        }
        img {
          width: 40px;
          height: 8px;
        }
        span {
          font-size: 20px;
          font-weight: 400;
          color: #079F5F;
          line-height: 27px;
          margin: 0 20px 0 30px;
        }
      }
      .lesson-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 60px 0;
        &:last-of-type {
          padding-top: 0;
        }
        &.first {
          padding: 60px 90px;
          justify-content: space-between;
        }
        .lesson-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;

          .details {
            width: 238px;
            height: 45px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 0;
            cursor: pointer;
            .detail-btn {
              font-size: 18px;
              font-weight: 400;
              color: #336ECE;
              line-height: 25px;
              position: absolute;
              width: 80px;
              left: 35px;
              bottom: 10px;
            }
          }

          img {
            width: 70px;
            height: auto;
          }
          .title {
            font-size: 18px;
            font-weight: 400;
            color: #1F1F1F;
            line-height: 25px;
            margin-top: 20px;
          }
        }
      }
    }
  }

  .table-content {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 43px 38px;
    background: #F0F4F5;
    .table-info {
      width: 1125px;
      background: #ffffff;
      padding: 25px;

      .buy-now {
        font-size: 16px;
        font-weight: 400;
        color: #336ECE;
        line-height: 25px;
        margin-top: 10px;
        cursor: pointer;
      }
      .table-right {
        width: 21px;
        height: 15px;
      }
      .table-error {
        width: 18px;
        height: 18px;
      }

      /deep/ .el-table {
        .el-table__header-wrapper {
          tr {
            background-color: #2E3139 !important;
            height: 21px;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            .cell {
              color: #FFFFFF !important;
            }
          }
        }
        .cell {
          font-size: 15px;
          font-weight: 400;
          color: #1F1F1F;
          line-height: 21px;
        }
        .el-table__row--striped {
          td {
            background: #F0F4F5 !important;
          }
        }
      }
    }
  }

  .feedback {
    width: 100%;
    background: #0F1012;
    padding-top: 40px;

    .feedback-des {
      text-align: center;
      margin-bottom: 60px;
      .des {
        font-size: 53px;
        font-weight: 400;
        color: #3C4048;
        line-height: 74px;
        letter-spacing: 5px;
      }
      .title {
        font-size: 30px;
        font-weight: 400;
        color: #ffffff;
        line-height: 41px;
        position: relative;
        z-index: 1;
        margin-top: -38px;
      }
    }

    .feedBack-list {
      width: 475px;
      height: 288px;
      padding: 30px 26px 0 26px;
      font-size: 15px;
      font-weight: 400;
      color: #A8A8A8;
      line-height: 21px;
      text-align: left;
      border-top: 1px solid #2A41C5;
      background: #303647;

      .feedBack-top {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img {
          width: 85px;
          height: 85px;
          margin-right: 20px;
        }
      }
      .feedBack-info {
        .title {
          font-size: 18px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 25px;
        }
      }
    }
  }

  .swiper-container {
    width: 1200px;
    height: 320px;
    margin: 0 auto;
    margin-bottom: 30px;
    .swiper-slide {
      width: 500px !important;
    }
    /deep/ .swiper-pagination-bullet {
      width: 38px;
      height: 5px;
      border-radius: unset;
      background: rgba(255, 255, 255, 0.4);
      opacity: unset;
      margin-right: 13px;
    }
    /deep/ .swiper-pagination-bullet-active {
      background: #1E66D7;
    }
    /deep/ .swiper-pagination {
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }

</style>
