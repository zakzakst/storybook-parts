// https://2021online.climbers-evt.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button39 } from ".";

const meta = {
  title: "Button/39",
  component: Button39,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button39>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button39",
  },
};
