import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/TotalDirectory",
  "/fav",
  {
    text: "法律",
    icon: "build",
    collapsable: true,
    prefix: "/posts/P1/",
    children: [
      "zhrmghglff",//中华人民共和国立法法
      "zhrmghgxzcff",//中华人民共和国行政处罚法
      "zhrmghgxzqzf",//中华人民共和国行政强制法
      "zhrmghgxzxkf",//中华人民共和国行政许可法
      "zhrmghgxzfyf",//中华人民共和国行政复议法
      "zhrmghgxzssf",//中华人民共和国行政诉讼法
      "zhrmghghjbhf",//中华人民共和国环境保护法
      "zhrmghghjyxpjf",//中华人民共和国环境影响评价法
      "zhrmghgswrfzf",//中华人民共和国水污染防治法
      "zhrmghgdqwrfzf",//中华人民共和国大气污染防治法
      "zhrmghgtrwrfzf",//中华人民共和国土壤污染防治法
      "zhrmghggtfwwrhjfzf",//中华人民共和国固体废物污染环境防治法
      "zhrmghgzswrfzf",//中华人民共和国噪声污染防治法
      "zhrmghgfsxwrfzf",//中华人民共和国放射性污染防治法
      "zhrmghghjbhsf",//中华人民共和国环境保护税法
      "zhrmghgqjsccjf",//中华人民共和国清洁生产促进法
      "zhrmghgtfsjydf",//中华人民共和国突发事件应对法
    ],
  },
  {
    text: "行政法规",
    icon: "activity",
    collapsable: true,
    prefix: "/posts/P2/",
    children: [
      "jsxmhjbhgltl",//建设项目环境保护管理条例
      "pwxkgltl",//排污许可管理条例
      "wxfwjyxkzglbf",//危险废物经营许可证管理办法
      "ylfwgltl",//医疗废物管理条例
      "dxsgltl",//地下水管理条例
      "qxgmyzwrfztl",//畜禽规模养殖污染防治条例
      "wxhxpaqgltl",//危险化学品安全管理条例
      "czpsywscltl",//城镇排水与污水处理条例
      "zhrmghghjbhsfsstl",//中华人民共和国环境保护税法实施条例
      "zhrmghgzrbhqtl",//中华人民共和国自然保护区条例
      "zhrmghgzfxxgktl",//中华人民共和国政府信息公开条例
      "xhcycwzgltl",//消耗臭氧层物质管理条例
      "fqdqdzcphsclgltl",//废弃电器电子产品回收处理管理条例
      "fsxtwsysxzzaqhfhtl",//放射性同位素与射线装置安全和防护条例
      "xzzfjgyssxfzajdgd",//行政执法机关移送涉嫌犯罪案件的规定
    ],
  },
  {
    text: "地方性法规",
    icon: "guide",
    collapsable: true,
    prefix: "/posts/P3/",
    children: [
      "gdshjbhtl",//广东省环境保护条例
      "gdsswrfztl",//广东省水污染防治条例
      "gdsdqwrfztl",//广东省大气污染防治条例
      "gdssszhrmghgtrwrfzfbf",//广东省实施《中华人民共和国土壤污染防治法》办法
      "gdsgtfwwrhjfztl",//广东省固体废物污染环境防治条例
      "gdssszhrmghghjzswrfzfbf",//广东省实施《中华人民共和国环境噪声污染防治法》办法
      "gdsjdcpqwrfztl",//广东省机动车排气污染防治条例
      "gdsmyhsshsgyfhyjgltl",//广东省民用核设施核事故预防和应急管理条例
      "jmsycwrfztl",//江门市扬尘污染防治条例
      "jmstjlyszbhtl",//江门市潭江流域水质保护条例
    ],
  },
  {
    text: "规章",
    icon: "leaf",
    collapsable: true,
    prefix: "/posts/P4/",
    children: [
      "wkwrhjfzglbf",//尾矿污染环境防治管理办法
      "qyhjxxyfplglbf",//企业环境信息依法披露管理办法
      "wxfwzyglbf",//危险废物转移管理办法
      "fsxtwsysxzzaqxkglbf",//放射性同位素与射线装置安全许可管理办法
      "hjxzcfbf",//环境行政处罚办法
      "hjbhzgbmssarlxcfbf",//环境保护主管部门实施按日连续处罚办法
      "hjbhzgbmsscfkybf",//环境保护主管部门实施查封、扣押办法
      "hjbhzgbmssxzsctczzbf",//环境保护主管部门实施限制生产、停产整治办法
      "xzzgbmyssyxzjlhjwfajzxbf",//行政主管部门移送适用行政拘留环境违法案件暂行办法
      "hjbhxzzfyxssfxjgzbf",//环境保护行政执法与刑事司法衔接工作办法
      "wryxljsxmzdbdqd",//污染影响类建设项目重大变动清单（试行）
      "jsxmhjyxbgsbzjdglbf",//建设项目环境影响报告书（表）编制监督管理办法
      "jsxmjghjbhyszxbf",//建设项目竣工环境保护验收暂行办法
      "jsxmhjyxdjbbaglbf",//建设项目环境影响登记表备案管理办法
      "jsxmhjyxpjqyxpglbf",//建设项目环境影响评价区域限批管理办法（试行）
      "tfhjsjdcclbf",//突发环境事件调查处理办法
      "tfhjsjyjglbf",//突发环境事件应急管理办法
      "tfhjsjxxbgbf",//突发环境事件信息报告办法
      "hjjcglbf",//环境监测管理办法
      "wryzdjkglbf",//污染源自动监控管理办法
      "wryzdjkssyxglbf",//污染源自动监控设施运行管理办法
      "wryzdjkssxcjdjcbf",//污染源自动监控设施现场监督检查办法
      "ylfwglxzcfbf",//医疗废物管理行政处罚办法
      "gdsxzzfgsbf",//广东省行政执法公示办法
      "gdsxzzfqgcjlbf",//广东省行政执法全过程记录办法
      "gdszdxzzfjdfzshbf",//广东省重大行政执法决定法制审核办法
      "gdstpfglsxbf",//广东省碳排放管理试行办法
    ],
  },
  {
    text: "自由裁量",
    icon: "rank",
    collapsable: true,
    prefix: "/posts/P5/",
    children: [
      "gdssthjxzcfzyclqgd",//广东省生态环境行政处罚自由裁量权规定
      "gdclb",//附件1-广东省生态环境违法行为行政处罚罚款金额裁量表.pdf
      "gdbycfml",//附件2-广东省生态环境不予行政处罚的轻微违法行为目录.pdf
      "jmssthjyfbyxzcfdqwhjwfxwqd",//江门市生态环境依法不予行政处罚的轻微环境违法行为清单
      "jmssthjjgysthjwfxwxzcfzyclqclbzgd",//江门市生态环境局关于生态环境违法行为行政处罚自由裁量权裁量标准规定（试行）
      "jmzyclb",//附件：江门市生态环境局关于生态环境违法行为行政处罚自由裁量权裁量标准参照表
    ],
  },
  {
    text: "法律解释",
    icon: "question",
    collapsable: true,
    prefix: "/posts/P6/",
    children: [
      "zgrmfyzgrmjcygyblhjwrxsajsyflrgwtdjs",//最高人民法院 最高人民检察院关于办理环境污染刑事案件适用法律若干问题的解释
      "gyblhjwrxsajygwtzthjy",//关于办理环境污染刑事案件有关问题座谈会纪要
      "zgrmfygysyzhrmghgxzssfdjs",//最高人民法院关于适用《中华人民共和国行政诉讼法》的解释
      "zgrmfygyxzsszjrgwtdgd",//最高人民法院关于行政诉讼证据若干问题的规定
      "gyjsxmwpxjwfxwflsywtdyj",//关于建设项目“未批先建”违法行为法律适用问题的意见
      "gysthjzfzjsxmztzerdwtdzdyj",//关于生态环境执法中建设项目“总投资额”认定问题的指导意见（试行）
      "gywyxtwfxwxzcfxjflgfxjsywtdyj",//关于“未验先投”违法行为行政处罚新旧法律规范衔接适用问题的意见
      "gyecqtcbpfflsyygwtdfh",//关于恶臭气体超标排放法律适用有关问题的复函
    ],
  },
  {
    text: "名录",
    icon: "class",
    collapsable: true,
    prefix: "/posts/P7/",
    children: [
      "jsxmhjyxpjflglml",//建设项目环境影响评价分类管理名录（2021年版）
      "gdwrypwxkflglml",//固定污染源排污许可分类管理名录（2019年版）
      "gjwxfwml",//国家危险废物名录（2021年版）
      "hjbhzhml",//环境保护综合名录（2021年版）
      "ydyhswrwml",//有毒有害水污染物名录
      "ydyhdqwrwml",//有毒有害大气污染物名录
      "gwrrlml",//高污染燃料目录
      "fqdqdzcpclml",//废弃电器电子产品处理目录
    ],
  },
  {
    text: "标准规范",
    icon: "function",
    collapsable: true,
    prefix: "/posts/P8/",
    children: [
      {
        text: "GB",
        icon: "ability",
        collapsable: true,
        prefix: "/posts/P8/GB/",
        children: [
          "wszhpfbz",//污水综合排放标准
          "dbshjzlbz",//地表水环境质量标准
          "xqyzywrwpfbz",//畜禽养殖业污染物排放标准
          "czwsclcwrwpfbz",//城镇污水处理厂污染物排放标准
          "yljgswrwpfbz",//医疗机构水污染物排放标准
          "ddwrwpfbz",//电镀污染物排放标准
          "hcgyrzggywrwpfbz",//合成革与人造革工业污染物排放标准
          "xsgywrwpfbz",//硝酸工业污染物排放标准
          "lsgywrwpfbz",//硫酸工业污染物排放标准
          "qcwxyswrwpfbz",//汽车维修业水污染物排放标准
          "fjjjhbjgyswrwpfbz",//发酵酒精和白酒工业水污染物排放标准
          "fzrzgyswrwpfbz",//纺织染整工业水污染物排放标准
          "zgjmpjggyswrwpfbz",//制革及毛皮加工工业水污染物排放标准
          "wjhxgywrwpfbz",//无机化学工业污染物排放标准
          "hcszgywrwpfbz",//合成树脂工业污染物排放标准
          "dzgyswrwpfbz",//电子工业水污染物排放标准
          "ecwrwpfbz",//恶臭污染物排放标准
          "gylydqwrwpfbz",//工业炉窑大气污染物排放标准
          "dqwrwzhpfbz",//大气污染物综合排放标准
          "ysyyypfbz",//饮食业油烟排放标准（试行）
          "pbblgydqwrwpfbz",//平板玻璃工业大气污染物排放标准
          "zwgydqwrwpfbz",//砖瓦工业大气污染物排放标准
          "sngydqwrwpfbz",//水泥工业大气污染物排放标准
          "gldqwrwpfbz",//锅炉大气污染物排放标准
          "hzcdqwrwpfbz",//火葬场大气污染物排放标准
          "syhxgywrwpfbz",//石油化学工业污染物排放标准
          "hfxyjwwzzpfkzbz",//挥发性有机物无组织排放控制标准
          "tlymjjzjgydqwrwpfbz",//涂料、油墨及胶粘剂工业大气污染物排放标准
          "zzgydqwrwwpfbz",//铸造工业大气污染物排放标准
          "cykdqwrwpfbz",//储油库大气污染物排放标准
          "jyzdqwrwpfbz",//加油站大气污染物排放标准
          "ypysdqwrwpfbz",//油品运输大气污染物排放标准
          "jsydtrwrfxgkbz",//土壤环境质量 建设用地土壤污染风险管控标准（试行）
          "nydtrwrfxgkbz",//土壤环境质量 农用地土壤污染风险管控标准（试行）
          "wxfwjbbztz",//危险废物鉴别标准通则
          "wxfwzcwrkzbz",//危险废物贮存污染控制标准
          "wxfwtmwrkzbz",//危险废物填埋污染控制标准
          "wxfwfswrkzbz",//危险废物焚烧污染控制标准
          "gtfwjbbztz",//固体废物鉴别标准通则
          "ybgygtfwzchtmwrkzbz",//一般工业固体废物贮存和填埋污染控制标准
          "ylfwclczwrkzbz",//医疗废物处理处置污染控制标准
          "shljtmcwrkzbz",//生活垃圾填埋场污染控制标准
          "gyqycjhjzspfbz",//工业企业厂界环境噪声排放标准
          "shshhjzspfbz",//社会生活环境噪声排放标准
          "jzsgcjhjzspfbz",//建筑施工场界环境噪声排放标准
          "dchjkzxz",//电磁环境控制限值
          "fsxwpaqysgc",//放射性物品安全运输规程（GB 11806—2019）
        ],
      },
      {
        text: "DB",
        icon: "selection",
        collapsable: true,
        prefix: "/posts/P8/DB/",
        children: [
          "swrwpfxz",//水污染物排放限值
          "xqyzywrwpfbz",//畜禽养殖业污染物排放标准
          "gyfstwrwpfbz",//工业废水铊污染物排放标准
          "ddswrwpfbz",//电镀水污染物排放标准
          "ncshwsclpfbz",//农村生活污水处理排放标准
          "dqwrwpfxz",//大气污染物排放限值
          "bmtzqczzyhfxyjhhwpfbz",//表面涂装（汽车制造业）挥发性有机化合物排放标准
          "jjzzhyhfxyjhhwpfbz",//家具制造行业挥发性有机化合物排放标准
          "yshyhfxyjhhwpfbz",//印刷行业挥发性有机化合物排放标准
          "sngydqwrwpfbz",//水泥工业大气污染物排放标准
          "zxhyhfxyjhhwpfbz",//制鞋行业挥发性有机化合物排放标准
          "jzxzzyhfxyjwpfbz",//集装箱制造业挥发性有机物排放标准
          "gldqwrwpfbz",//锅炉大气污染物排放标准
          "tcgydqwrwpfbz",//陶瓷工业大气污染物排放标准
          "blgydqwrwpfbz",//玻璃工业大气污染物排放标准
          "gdwryhfxyjwzhpfbz",//固定污染源挥发性有机物综合排放标准
        ],
      },
      {
        text: "HJ",
        icon: "tool",
        collapsable: true,
        prefix: "/posts/P8/HJ/",
        children: [
          "wxfwgljhhgltzzdjsdz",//危险废物管理计划和管理台账制定技术导则
          "fslwrkzjsgf",//废塑料污染控制技术规范
          "trhjch",//土壤环境 词汇
          "sthjdaflb",//生态环境档案分类表
          "sthjdazlxz",//生态环境档案著录细则
          "gyqyhfxyjwxljcyxfjszn",//工业企业挥发性有机物泄漏检测与修复技术指南
          "tfhjsjyjjcjsgf",//突发环境事件应急监测技术规范
          "ysyhjbhjsgf",//饮食业环境保护技术规范
        ],
      },
    ],
  },
  {
    text: "其他",
    icon: "others",
    collapsable: true,
    prefix: "/posts/P9/",
    children: [
      "hjxsydwzfw",//关于环境污染刑事案件中“有毒物质”的范围
    ],
  },
]);
