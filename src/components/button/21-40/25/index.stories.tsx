// https://lavie-enfant.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button25 } from ".";

const meta = {
  title: "Button/25",
  component: Button25,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button25>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON25",
  },
};
