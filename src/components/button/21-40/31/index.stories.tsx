// https://toyoseiki-recruit.jp/
import { Button31 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/31",
  component: Button31,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button31>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン31",
  },
};
