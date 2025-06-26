// https://www.elecom.co.jp/pickup/contents/00062/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button29 } from ".";

const meta = {
  title: "Button/29",
  component: Button29,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button29>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン29",
  },
};
