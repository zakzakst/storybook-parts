// https://www.keyence.co.jp/company/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button38 } from ".";

const meta = {
  title: "Button/38",
  component: Button38,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button38>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン38",
  },
};
