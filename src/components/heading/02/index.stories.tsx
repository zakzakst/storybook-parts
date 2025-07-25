// https://quantitative.jp/recruit
import { Heading02 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/02",
  component: Heading02,
} satisfies Meta<typeof Heading02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shoulder: "Heading 02",
    text: "見出しが入ります",
  },
};
