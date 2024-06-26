import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [{ from: "../public/ng-notes/mockImg/", to: "/mockImg/" }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-addon-theme-provider",
    "storybook-addon-remix-react-router",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "sb-vite.config.ts",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  // async viteFinal(config, { configType }) {
  //   config.base = "/ng-notes/";

  //   // return the customized config
  //   return config;
  // },
};
export default config;
