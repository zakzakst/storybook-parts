import { Other09 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/09",
  component: Other09,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "ページ表示後3秒で引っ込む",
  },
};
