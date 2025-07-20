// https://earcouture.jp/
import { Button11 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Button/11",
  component: Button11,
  argTypes: {
    text: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button11",
  },
};
