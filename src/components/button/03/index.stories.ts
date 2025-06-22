import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button03 } from ".";

const meta = {
  title: "Button/03",
  component: Button03,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン03",
  },
};
