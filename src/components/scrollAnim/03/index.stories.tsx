// https://savasava.jp/
import { ScrollAnim03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/03",
  component: ScrollAnim03,
  decorators: [
    (Story) => (
      <div>
        <div style={{ height: "100vh", backgroundColor: "#eee" }}>
          <p style={{ textAlign: "center" }}>▼▼▼ スクロールしてください ▼▼▼</p>
        </div>
        <Story />
        <div style={{ height: "100vh", backgroundColor: "#eee" }} />
      </div>
    ),
  ],
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "スクロールアニメーション03",
  },
};
