import { Other15 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/15",
  component: Other15,
  argTypes: {
    img: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: "https://picsum.photos/id/237/800/600",
  },
};
