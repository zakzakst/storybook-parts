// https://giginc.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button17 } from ".";

const meta = {
  title: "Button/17",
  component: Button17,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON17",
  },
};
