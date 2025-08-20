import { Hero01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Hero/01",
  component: Hero01,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Hero01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テキスト",
  },
};