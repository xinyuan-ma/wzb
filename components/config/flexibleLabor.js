import ImgFlexibleLabor from '@/assets/flexible-labor'

export default {
  problem: [
    {
      icon: ImgFlexibleLabor.iconProblem1,
      title: '用工风险高',
      desc: '随着社保入税政策的推进，劳动关系混乱，用工不规范，成为企业一大隐患',
    },
    {
      icon: ImgFlexibleLabor.iconProblem2,
      title: '社保成本压力大',
      desc: '自由职业者如若采用劳动关系，将大大增加企业成本',
    },
    {
      icon: ImgFlexibleLabor.iconProblem3,
      title: '票据获取难',
      desc: '自由职业者需要向企业开具服务费专票结算，票据缺口大，加上金税三期上线后，非正常渠道渠道开票难',
    },
  ],
  choice: [
    {
      icon: ImgFlexibleLabor.iconChoice1,
      title: '合规优势',
      desc: `1、与地方政府签订正式协议，所有操作方式均经当地税局审核认可，利用地区政策差异，在法律允许的范围内合理降低成本

2、如实报税，报税凭证完整可查

3、自主研发风险管控系统，主动审核每笔业务的合法性，降低风险`,
    },
    {
      icon: ImgFlexibleLabor.iconChoice2,
      title: '政策优势',
      desc: `1、与多地政府同时合作，不同地区各有侧重，对单一地区政策依赖性低，系统整体稳定性高

2、与当地政府展开多种合作，促进当地就业，提升地方政府管理效率，树立地方标杆企业形象，业务长期稳定`,
    },
    {
      icon: ImgFlexibleLabor.iconChoice3,
      title: '自动化结算系统',
      desc: `1、自动化结算系统7*24，避免发生错误，提升结算效率

2、结算手续费由我司承担；

3、获得上市公司入股投资，资金实力雄厚`,
    },
  ],
  exampleList: new Array(12).fill(null)
    .map((_, index) => {
      const companyList = [
        '滴滴出行', '抖音短视频', '斗米兼职', '闪修侠',
        '58到家', '虎牙直播', '饿了么', '松鼠拼拼',
        '快狗打车', '俺来也', '蚂蚁顾问', '游娃娃'
      ]
      return {
        icon: ImgFlexibleLabor[`iconCompany${index + 1}`],
        title: companyList[index],
      }
    }),
}
