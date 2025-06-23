// https://www.digireha.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button06 } from ".";

const meta = {
  title: "Button/06",
  component: Button06,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン06",
  },
};
