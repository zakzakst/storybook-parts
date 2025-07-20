// https://www.tokyo-designplex.com/
import { Card05 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/05",
  component: Card05,
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
  },
};
