// https://savasava.jp/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/03",
  component: ScrollAnim03,
  decorators: [ScrollAnimDecorator],
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
