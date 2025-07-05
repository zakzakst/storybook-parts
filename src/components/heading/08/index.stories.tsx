// http://www.d1meisei.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading08 } from ".";

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
