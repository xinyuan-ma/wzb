<template>
  <div class="container">
    <!-- 头图 -->
    <div class="search-top">
      <FInput placeholder="搜索工作岗位" :value="inputValue"></FInput>
    </div>
    <div class="job-info">
      <div class="job-name">
        <div class="main-title">
          <div class="title">{{jobInfo.title}}</div>
          <div class="join-us group">
            <img :src="ImgJoinUs.group" alt=""><span>分享</span>
          </div>
          <div class="join-us path">
            <img :src="ImgJoinUs.path" alt=""><span>收藏</span>
          </div>
        </div>
        <div class="apply">申请岗位</div>
      </div>
      <div class="job-des">{{jobInfo.des}}</div>
      <div class="job-duty">
        <p class="job-title">岗位职责</p>
        <div class="detail" v-html="jobInfo.duty"></div>
      </div>
      <div class="job-duty">
        <p class="job-title">任职资格</p>
        <div class="detail" v-html="jobInfo.qualifications"></div>
      </div>

      <p class="detail mark">薪资面议如有意向，请备注好姓名，应聘职位后，将简历投致邮箱：<span class="email">zhouhong@wanshuijin.com</span></p>
    </div>
  </div>
</template>

<script>
  import ImgJoinUs from '@/assets/joinUs'
  import FInput from '@/components/JobInput'
  export default {
    name: 'jobDuty',
    components: {
      FInput
    },
    head() {
      return {
        title: '问政宝 - 工作详情'
      }
    },
    data() {
      return {
        ImgJoinUs,
        inputValue: '',
        jobList: [
          {
            type: 'taxation',
            title: '税务专家',
            info: '上海｜本科及以上｜经验不限｜2021-01-01',
            des: '职责描述：专职参与财税知识库整体规划(全税种、全行业)、问答库的规划及内容梳理；知识问答与智能机器人的链接、知识图谱的方向性研究等；深入研究中大型集团企业税务风险管控模式，梳理大型企业税务风险管理标准化流程，推动财税风险管控模式创新；针对公司付费客户群体分类，就知识付费及专项财税服务进行规划，结合财税服务市场主流模式，策划产品输出形态；',
            jobDuty: {
              title: '税务专家',
              des: '上海｜本科及以上｜经验不限｜2021-01-01',
              duty: '1、专职参与财税知识库整体规划(全税种、全行业)、问答库的规划及内容梳理；<br>2、知识问答与智能机器人的链接、知识图谱的方向性研究等；<br>3、深入研究中大型集团企业税务风险管控模式，梳理大型企业税务风险管理标准化流程，推动财税风险管控模式创新；<br>4、针对公司付费客户群体分类，就知识付费及专项财税服务进行规划，结合财税服务市场主流模式，策划产品输出形态；',
              qualifications: '1、财务、会计、税务相关专业本科及以上学历，持有注册会计师、注册税务师证书；<br>2、熟悉财务、会计、审计、税务等相关知识和政策法规；<br>3、具备5年以上财税咨询相关工作经验，参与具体咨询工作及交付物编写，具有带领团队经验的优先；<br>4、在大型企业工作中、或为大型企业服务中，实际参与并熟悉企业发票管理、纳税申报管理、风险分析等实操工作；<br>5、具有扎实的文档编写、书面表达和沟通协调能力，以及具有参与专业演讲的经验及良好形象。<br>6、熟悉常见ERP系统操作，对财税信息化系统的规划和设计有经验者优先；<br>7、良好的数据统计分析能力；<br>8、良好的英文水平。'
            }
          },
          {
            type: 'technology',
            title: '技术专家',
            info: '上海｜本科及以上｜经验不限｜2021-01-01',
            des: '职责描述：主导财税商业智能平台的技术搭建；主导财税数据仓或数据平台的技术搭建；配合管理开发团队，带领团队完成信息化建设的各项工作；制定本产品的技术落地方法论；制定技术开发规范，并主导本产品开发与后续迭代 6、制定测试验收标准，并主导本产品测试工作进展；制定运维运营服务水平，并主导本产品后续运维运营工作；团队管理公司现有财税信息系统和数据，保障正常运营、治理和持续优化；带领团队完成项目管理，保障项目正常交付；配合团队完成各项系统数据监控和分析',
            jobDuty: {
              title: '技术专家',
              des: '上海｜本科及以上｜经验不限｜2021-01-01',
              duty: '1、主导财税商业智能平台的技术搭建；<br>2、主导财税数据仓或数据平台的技术搭建；<br>3、配合管理开发团队，带领团队完成信息化建设的各项工作；<br>4、制定本产品的技术落地方法论；<br>5、制定技术开发规范，并主导本产品开发与后续迭代；<br>6、制定测试验收标准，并主导本产品测试工作进展；<br>7、制定运维运营服务水平，并主导本产品后续运维运营工作；<br>8、团队管理公司现有财税信息系统和数据，保障正常运营、治理和持续优化；<br>9、带领团队完成项目管理，保障项目正常交付；<br>10、配合团队完成各项系统数据监控和分析',
              qualifications: '1、本科及以上学历，扎实的计算机基础；<br>2、5年及以上工作经验，1年以上相关团队管理经验；<br>3、深入使用Java，熟练掌握常用的Java类库及框架，如多线程、并发处理、I/O与网络通讯，Spring、iBatis等，对 Java虚拟机有较深了解，有JVM分析及调优的实际经验；<br>4、精通 MySQL 应用开发，熟悉数据库原理和常用性能优化技术，以及 NoSQL、Hive 的原理、使用场景以及限制；<br>5、擅长分布式、搜索引擎、缓存、JVM 调优、序列化、NIO、RPC 调用框架等，并且有相关实践经验；<br>6、参与过大型复杂分布式互联网 WEB 系统的设计开发者优先，拥有和工作年限相称的广度和（或）深度；<br>7、具备良好的分析解决问题能力，有较完善的逻辑思维框架，能独立承担任务和有系统进度把控能力；<br>8、熟悉互联网行业，主导或参与过多项大型互联网公司的财税信息化建设相关项目'
            }
          },
          {
            type: 'market',
            title: '营销专家',
            info: '上海｜本科及以上｜经验不限｜2021-01-01',
            des: '职责描述：对品牌进行线上和线下特色营销方案体系(含新用户获取方案)的搭建和制定； 对品牌进行节日、爆款和阶段性主推产品等营销方案的制定； 根据项目定位，制定和实施项目整体营销计划、广告宣传计划及相应费用方案的制定； 对项目的策划落地进度和销售进行动态监控,并对活动开展的外界环境、客观条件进行全面的分析； 负责年度、季度营销报告的编写,阶段性营销思路调整和策略方案的制定,并负责实施与评估； 负责整合活动成果、提炼活动亮点，制定有助于提升企业形象的方案策划,并协助执行； 完成上级交办的其他任务',
            jobDuty: {
              title: '营销专家',
              des: '上海｜本科及以上｜经验不限｜2021-01-01',
              duty: '1.对品牌进行线上和线下特色营销方案体系(含新用户获取方案)的搭建和制定；<br>2.对品牌进行节日、爆款和阶段性主推产品等营销方案的制定；<br>3.根据项目定位，制定和实施项目整体营销计划、广告宣传计划及相应费用方案的制定；<br>4.对项目的策划落地进度和销售进行动态监控,并对活动开展的外界环境、客观条件进行全面的分析；<br>5.负责年度、季度营销报告的编写,阶段性营销思路调整和策略方案的制定,并负责实施与评估；<br>6.负责整合活动成果、提炼活动亮点，制定有助于提升企业形象的方案策划,并协助执行；<br>7.完成上级交办的其他任务',
              qualifications: '1.本科及以上学历，广告类、电子商务、传播学、市场营销、经济或企业管理等相关专业优先；<br>2.五年以上市场营销策划工作经验,有财税产品经验优先；<br>3.擅长线上及线下活动策划，有过成功独立策划营销推广活动经验者优先；<br>4.能熟练使用各种营销推广工具(含ps软件) ,能够科学地制定和审核媒介计划,能合理有效的利用各类营销资源；<br>5.有较强的市场咸知能力.敏锐地把握市场动态。'
            }
          }
        ],
        jobInfo: {}
      }
    },
    created() {
      this.jobInfo = this.jobList.filter(item => item.type == this.$route.query.type)[0].jobDuty
    },
    methods: {
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
  .search-top {
    width: 100%;
    padding: 15px 0;
    background: #ffffff;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 90px;
    z-index: 1;
    border-bottom: 1px solid #DADCE0;
  }

  .detail {
    font-size: 15px;
    font-weight: 400;
    color: #1F1F1F;
    line-height: 25px;
    &.mark {
      padding: 30px 0 44px 0;
    }
  }
  .job-title {
    font-size: 27px;
    font-weight: 400;
    color: #1F1F1F;
    line-height: 38px;
    margin: 30px 0 11px 0;
  }

  .email {
    color: #108CEE;
  }

  .job-info {
    margin: 0 auto;
    width: 1125px;
    text-align: left;
    padding-top: 28px;
    .job-des {
      padding: 9px 0 36px 0;
      border-bottom: 1px solid #DADCE0;
      font-size: 20px;
      font-weight: 400;
      color: #1F1F1F;
      line-height: 27px;
    }
    .job-name {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .main-title {
      display: flex;
      align-items: center;
      .title {
        font-size: 35px;
        font-weight: 400;
        color: #1F1F1F;
        line-height: 50px;
        margin-right: 30px;
      }
      .join-us {
        margin-right: 24px;
        display: flex;
        align-items: center;
        &.group {
          img {
            width: 26px;
            height: 26px;
          }
        }
        &.path {
          img {
            width: 20px;
            height: 27px;
          }
        }
        span {
          margin-left: 10px;
          font-size: 15px;
          font-weight: 400;
          color: #1F1F1F;
          line-height: 21px;
        }
      }
    }
    .apply {
      width: 258px;
      height: 45px;
      background: #108CEE;
      font-size: 18px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 45px;
      text-align: center;
    }
  }
</style>
