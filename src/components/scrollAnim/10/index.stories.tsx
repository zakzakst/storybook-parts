// https://ecopet.info/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim10 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/10",
  component: ScrollAnim10,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "SCROLL",
  },
};
