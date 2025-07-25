// https://stellacasting.jp/
import { Button24 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/24",
  component: Button24,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button24>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON24",
  },
};
