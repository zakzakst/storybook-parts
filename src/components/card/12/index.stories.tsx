// https://junni.co.jp/
import { Card12 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/12",
  component: Card12,
} satisfies Meta<typeof Card12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1000/400/200",
        category: "NEWS",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
        date: "2021.01.03",
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1001/400/200",
        category: "BLOG",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
        date: "2021.01.02",
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1002/400/200",
        category: "NEWS",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
        date: "2021.01.01",
      },
    ],
  },
};
