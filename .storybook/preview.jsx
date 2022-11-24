import { GlobalStyle } from "../src/styles/global.ts";
import BagProvider from "../src/context/BagContext";
import { withRouter } from "storybook-addon-react-router-v6";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <BagProvider>
        <GlobalStyle />
        <Story />
    </BagProvider>
  ),
  withRouter
]