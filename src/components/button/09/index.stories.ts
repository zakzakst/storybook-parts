// https://www.northgraphic.net/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button09 } from ".";

const meta = {
  title: "Button/09",
  component: Button09,
  argTypes: {
    text: { control: "text" },
    hoverText: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button09",
    hoverText: "ボタン09",
  },
};
