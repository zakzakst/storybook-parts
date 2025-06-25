// https://goodpatch.com/blog
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button19 } from ".";

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
