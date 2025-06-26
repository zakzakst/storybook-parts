// https://leverages.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button27 } from ".";

const meta = {
  title: "Button/27",
  component: Button27,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button27>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON27",
  },
};
