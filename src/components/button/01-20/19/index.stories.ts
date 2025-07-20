// https://goodpatch.com/blog
import { Button19 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/19",
  component: Button19,
} satisfies Meta<typeof Button19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "19",
  },
};
