// https://salonia.jp/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim02 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/02",
  component: ScrollAnim02,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    thumbnail: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/237/200/300",
  },
};
