import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/TotalDirectory",
  { text: "常用条例", icon: "like", link: "/fav" },
  { text: "标签索引", 
    icon: "tag", 
    children:[
      { text: "环评", icon: "tag", link: "/tag/环评" },
      { text: "排污许可", icon: "tag", link: "/tag/排污许可" },
      { text: "水", icon: "tag", link: "/tag/水" },
      { text: "大气", icon: "tag", link: "/tag/大气" },
      { text: "土壤", icon: "tag", link: "/tag/土壤" },
      { text: "固废", icon: "tag", link: "/tag/固废" },
      { text: "噪声", icon: "tag", link: "/tag/噪声" },
      { text: "辐射", icon: "tag", link: "/tag/辐射" },
      { text: "监测", icon: "tag", link: "/tag/监测" },
      { text: "应急", icon: "tag", link: "/tag/应急" },
      { text: "更多...", icon: "", link: "/tag/" },
    ]
  },
  {
    text: "环保网站",
    icon: "network",
    children: [
      {
        text: "官方网站",
        icon: "network",
        children: [
          { text: "国家生态环境部", icon: "", link: "https://www.mee.gov.cn/" },
          { text: "广东生态环境厅", icon: "", link: "http://gdee.gd.gov.cn/" },
        ],
      },
      {
        text: "法规库",
        icon: "network",
        children: [
          { text: "国家法律法规数据库", icon: "", link: "https://flk.npc.gov.cn/" },
          { text: "生态环境部规章库", icon: "", link: "https://www.mee.gov.cn/gzk/" },
        ],
      },
      {
        text: "环境信息",
        icon: "network",
        children: [
          { text: "全国排污许可证管理信息平台", icon: "", link: "http://permit.mee.gov.cn/permitExt/defaults/default-index!getInformation.action" },
          { text: "广东“三线一单”平台", icon: "", link: "https://www-app.gdeei.cn/l3a1/public/home-page/stat" },
        ]
      },
      { text: "更多...", icon: "", link: "/websites" },
    ],
  },
]);
