// https://mimiguri.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button45 } from ".";

const meta = {
  title: "Button/45",
  component: Button45,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button45>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン45",
  },
};
