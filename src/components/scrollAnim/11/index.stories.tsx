// https://beartail.jp/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim11 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/11",
  component: ScrollAnim11,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "SCROLL",
  },
};
