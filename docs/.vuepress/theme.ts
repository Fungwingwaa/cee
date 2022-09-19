import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({

  hostname: "https://github.com/Fungwingwaa/cee/",

  iconAssets: "iconfont",

  logo: "/CEE-logo.png",

  logoDark: "/CEE-logo-dark.png",

  lastUpdated: false,

  contributors: false,

  editLink: false,

  copyright: false,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag"],

  blog: {

    name: "生态环境法律法规汇编",

    description: "Compilation of Ecology & Environment",

  },

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    components: ["Badge", "PDF"],

    mdEnhance: {
      enableAll: false,
      tabs: true,
      attrs: true,
      align: true,
      sub: true,
      sup: true,
      imageSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
