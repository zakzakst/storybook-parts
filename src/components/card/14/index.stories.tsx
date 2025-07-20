// https://www.angelhome.co.jp/
import { Card14 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/14",
  component: Card14,
  argTypes: {
    tag: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/300",
    tag: "TAG",
    heading: "カード11",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
