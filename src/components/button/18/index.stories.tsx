// https://giginc.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button18 } from ".";

const meta = {
  title: "Button/18",
  component: Button18,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BUTTON18",
  },
};
