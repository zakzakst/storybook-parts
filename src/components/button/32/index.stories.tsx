// https://www.teinei.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button32 } from ".";

const meta = {
  title: "Button/32",
  component: Button32,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button32>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン32",
  },
};
