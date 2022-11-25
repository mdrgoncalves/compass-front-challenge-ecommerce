import { withRouter } from "storybook-addon-react-router-v6";

import { GlobalStyle } from "../src/styles/global.ts";
import BagProvider from "../src/context/BagContext";
import ViewportProvider from "../src/context/viewportContext";

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
      <ViewportProvider>
        <GlobalStyle />
        <Story />
      </ViewportProvider>
    </BagProvider>
  ),
  withRouter
]