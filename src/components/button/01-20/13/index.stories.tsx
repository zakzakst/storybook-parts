// https://www.ign-m.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button13 } from ".";

const meta = {
  title: "Button/13",
  component: Button13,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button13",
  },
};
