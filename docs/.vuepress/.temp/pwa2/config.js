import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "E:/VuePress/MeeLaws/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "E:/VuePress/MeeLaws/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});