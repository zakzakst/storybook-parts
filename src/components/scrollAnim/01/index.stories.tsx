// https://www.ranaextractive.com/
import { ScrollAnim01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/01",
  component: ScrollAnim01,
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
} satisfies Meta<typeof ScrollAnim01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "スクロールアニメーション01",
  },
};
