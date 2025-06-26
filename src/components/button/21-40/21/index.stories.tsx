// https://www.sejuku.net/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button21 } from ".";

const meta = {
  title: "Button/21",
  component: Button21,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button21>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン21",
  },
};
