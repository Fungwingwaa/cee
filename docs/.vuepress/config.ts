import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",

  title: "生态环境法律法规汇编",

  description: "",

  base: "/",

  plugins: [
    searchPlugin({

      locales: {
        '/': {
          placeholder: '搜索',
        },
      },

      isSearchable: (page) => page.frontmatter.description !== 'catalog',

      maxSuggestions: 20,

    }),
  ],

  theme,
});
