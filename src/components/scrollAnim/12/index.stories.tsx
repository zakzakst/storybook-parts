// http://overpass.studiovoila.com/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim12 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/12",
  component: ScrollAnim12,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    text1: { control: "text" },
    text2: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text1: "SCROLL",
    text2: "ANIMATION",
  },
};
