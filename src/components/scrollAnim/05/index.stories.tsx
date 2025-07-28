// https://tenohira.kyoto-art.ac.jp/illustration/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim05 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/05",
  component: ScrollAnim05,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "スクロールアニメーション05",
  },
};
