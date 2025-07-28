// https://www.satohtakeru.com/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/04",
  component: ScrollAnim04,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    thumbnail: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/237/300/200",
  },
};
