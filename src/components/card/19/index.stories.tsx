// https://www.napla.co.jp/recruit/newgrads/
import { Card19 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/19",
  component: Card19,
  argTypes: {
    text: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/400",
    text: "VIEW",
  },
};
