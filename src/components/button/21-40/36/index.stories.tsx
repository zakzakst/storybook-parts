// https://where.inc/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button36 } from ".";

const meta = {
  title: "Button/36",
  component: Button36,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button36>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン36",
  },
};
