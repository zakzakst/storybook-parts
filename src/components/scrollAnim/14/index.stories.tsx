import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim14 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/14",
  component: ScrollAnim14,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    thumbnail: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/1000/400/200",
  },
};
