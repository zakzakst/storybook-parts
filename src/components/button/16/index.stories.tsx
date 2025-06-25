// https://s-y-n.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button16 } from ".";

const meta = {
  title: "Button/16",
  component: Button16,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON16",
  },
};
