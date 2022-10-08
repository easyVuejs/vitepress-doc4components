import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/theme/styles/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import GeelyBC from "geely-business-components";
import "geely-business-components/assets/style.css";

import { registerComponents } from "./register-components";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Antd);
    app.use(GeelyBC);
    registerComponents(app);
  },
};
