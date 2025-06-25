// https://recruit.i-goods.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button15 } from ".";

const meta = {
  title: "Button/15",
  component: Button15,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON15",
  },
};
