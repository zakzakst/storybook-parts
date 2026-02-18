import { Other06 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/06",
  component: Other06,
} satisfies Meta<typeof Other06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        rank: 1,
        thumbnail: "https://picsum.photos/id/237/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/238/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/239/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/240/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/237/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。",
      },
      {
        rank: 2,
        thumbnail: "https://picsum.photos/id/238/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        rank: 3,
        thumbnail: "https://picsum.photos/id/239/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/240/400/200",
        title: "タイトル1",
        text: "テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
