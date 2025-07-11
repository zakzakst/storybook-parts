// https://www.bebit.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button02 } from ".";

const meta = {
  title: "Button/02",
  component: Button02,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン02",
  },
};
