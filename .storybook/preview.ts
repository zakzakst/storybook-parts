import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    options: {
      // 参考：今回のコードだと設定方法を試す目的で無理やり並び順を変えているが、下記の使い方は実際のプロジェクトで役に立つと思う
      // https://zenn.dev/johnnykei/articles/98d8b871b166b5
      storySort: {
        order: ["Card", "ServiceList"],
      },
    },
  },
};

export default preview;
