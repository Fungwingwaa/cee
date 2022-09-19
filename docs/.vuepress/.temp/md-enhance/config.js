import { defineClientConfig } from "@vuepress/client";
import Presentation from "E:/VuePress/MeeLaws/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/VuePress/MeeLaws/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Tabs from "E:/VuePress/MeeLaws/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});