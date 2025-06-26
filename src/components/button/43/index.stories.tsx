// https://ics.media/entry/230629/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button43 } from ".";

const meta = {
  title: "Button/43",
  component: Button43,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button43>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン43",
  },
};
