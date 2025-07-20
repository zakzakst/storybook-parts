// https://www.northgraphic.net/
import { Button04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/04",
  component: Button04,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button04",
  },
};
