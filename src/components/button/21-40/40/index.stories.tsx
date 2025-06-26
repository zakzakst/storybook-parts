// https://pogg-sweetpotatopie.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button40 } from ".";

const meta = {
  title: "Button/40",
  component: Button40,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button40>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON40",
  },
};
