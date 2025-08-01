import { Other08 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/08",
  component: Other08,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テキスト",
  },
};