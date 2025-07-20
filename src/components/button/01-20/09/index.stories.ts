// https://www.northgraphic.net/
import { Button09 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
