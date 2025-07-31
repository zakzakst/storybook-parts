import { Other02 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/02",
  component: Other02,
  argTypes: {
    subText: { control: "text" },
    text: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Other02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subText: "Other02",
    text: "This is heading text",
  },
};
