import ImgHightPaid from '@/assets/solution-high-paid'
import ImgInvestment from '@/assets/solution-investment'
import ImgProfit from '@/assets/solution-profit'
import ImgHighLabor from '@/assets/solution-high-labor'

export default {
  highPaid: {
    table: {
      header: [
        '级别',
        '累计预扣预缴应纳税所得额',
        '预扣税(%)',
        '速算扣除数',
      ],
      rows: [
        [1, '不超过36,000元的部分', 3, 0],
        [2, '超过36,000元至144,000元的部分', 10, 2520],
        [3, '超过144,000元至300,0000元的部分', 20, 16920],
        [4, '超过300,000元至420,000元的部分', 25, 31920],
        [5, '超过420,000元至660,000元的部分', 30, 52920],
        [6, '超过660,000元至960,000元的部分', 35, 85920],
        [7, '超过960,000元的部分', 45, 181920],
      ],
    },
    repectList: [
      {
        icon: ImgHightPaid.iconLiviingCost,
        title: '生活成本压力大',
        desc: '房租房贷孩子上学，物价上涨，生活成本太高',
      },
      {
        icon: ImgHightPaid.iconPersonalCost,
        title: '从公司角度看',
        desc: '社保和个税按工资实际金额缴纳，社保与税收成本高',
      },
    ],
    partnerType: [
      {
        bg: ImgHightPaid.iconCircleBg,
        icon: ImgHightPaid.iconLink,
        desc: '企业与完税金平台达成合作，结算费用通过完税金平台下发，平台将为企业开具增值税专用发票',
      },
      {
        bg: ImgHightPaid.iconCircleBg,
        icon: ImgHightPaid.iconDetails,
        desc: '高管转变为临时纳税人，享受月收入10万以下个人经营所得税0.6%~1.5%的国家优惠政策。且高管转变为商事主体，具备自行购买社保的资格，可以进行灵活社保',
      },
    ],
  },
  investment: {
    repectList: [
      {
        icon: ImgInvestment.iconInvestment,
        desc: '个人取得的股息性质的投资收益属于利息、股息、红利所得，应按20%的税率缴纳个人所得税',
      },
      {
        icon: ImgInvestment.iconCost,
        desc: '在项目风险上，个人会承担无限责任，当年出现的亏损，不可以冲抵以后年度的收益',
      },
    ],
    plans: [
      {
        img: ImgInvestment.imgWork,
        desc: '通过公司制投资可以帮助解决所有自然人投资带来的问题，通过有线公司投资项目，可以通过有限公司的注册资本，成功规避可能因为项目公司带来的进一步风险',
      },
      {
        img: ImgInvestment.imgBusiness,
        desc: '投资收益分配给个人投资人时使用完税金产品，将投资收益通过服务费方式输送出',
      },
    ],
  },
  profit: {
    plans: [
      {
        img: ImgProfit.imgBg1,
        desc: '在企业所得税税率较低的税收资源地注册新公司，将企业旗下部分业务转移到新公司中，降低企业所得税税率',
      },
      {
        img: ImgProfit.imgBg2,
        desc: '通过企业间业务合作的方式，将费用结算到税收资源地设立的新公司中',
      },
    ],
  },
  highLabor: {
    plans: [
      {
        img: ImgHighLabor.imgBg1,
        desc: '完税金灵活用工产品将自由职业者注册为临时纳税人，实行核定征收税率0.6%~1.5%',
      },
      {
        img: ImgHighLabor.imgBg2,
        desc: '企业与完税金平台达成合作，结算费用通过完税金平台下发，平台将为企业开具增值税专用发票',
      },
    ],
    graphEnt: [
      { title: '物流', icon: ImgHighLabor.iconProblem1, },
      { title: '直播', icon: ImgHighLabor.iconProblem2, },
      { title: '推广', icon: ImgHighLabor.iconProblem3, },
      { title: '电商', icon: ImgHighLabor.iconProblem4, },
      { title: '社交', icon: ImgHighLabor.iconProblem5, },
      { title: '家政', icon: ImgHighLabor.iconProblem6, },
      { title: '教育', icon: ImgHighLabor.iconProblem7, },
      { title: '知识付费', icon: ImgHighLabor.iconProblem8, },
    ],
    graphPersonal: [
      { title: '维修师傅', icon: ImgHighLabor.iconProblem9, },
      { title: '保险代理', icon: ImgHighLabor.iconProblem10, },
      { title: '司机', icon: ImgHighLabor.iconProblem11, },
      { title: '快递员', icon: ImgHighLabor.iconProblem12, },
      { title: '兼职老师', icon: ImgHighLabor.iconProblem13, },
      { title: '主播', icon: ImgHighLabor.iconProblem14, },
      { title: '物流', icon: ImgHighLabor.iconProblem15, },
      { title: '销售', icon: ImgHighLabor.iconProblem16, },
    ],
  },
}
