// https://www.bebit.co.jp/
import { NewsList02 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "NewsList/02",
  component: NewsList02,
} satisfies Meta<typeof NewsList02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: "#",
        category: "お知らせ",
        date: "2021.01.03 Sun.",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        category: "お知らせ",
        date: "2021.01.02 Sat.",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        category: "イベント",
        date: "2021.01.01 Fri.",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
