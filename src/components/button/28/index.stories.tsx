// https://yoshida-yakugyo.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button28 } from ".";

const meta = {
  title: "Button/28",
  component: Button28,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button28>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン28",
  },
};
