import { Button37 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/37",
  component: Button37,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button37>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン37",
  },
};
