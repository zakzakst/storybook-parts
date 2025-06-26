// http://www.vntus.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button05 } from ".";

const meta = {
  title: "Button/05",
  component: Button05,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン05",
  },
};
