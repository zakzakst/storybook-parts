// http://www.d1meisei.co.jp/
import { Heading08 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/08",
  component: Heading08,
  args: {
    link: "#",
  },
} satisfies Meta<typeof Heading08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "見出し08",
  },
};
