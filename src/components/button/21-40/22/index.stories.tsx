// https://leverages.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button22 } from ".";

const meta = {
  title: "Button/22",
  component: Button22,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button22>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン22",
  },
};
