// https://ics.media/entry/230629/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button44 } from ".";

const meta = {
  title: "Button/44",
  component: Button44,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button44>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン44",
  },
};
