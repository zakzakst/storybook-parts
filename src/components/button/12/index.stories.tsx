// https://lastmile-works.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button12 } from ".";

const meta = {
  title: "Button/12",
  component: Button12,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON12",
  },
};
