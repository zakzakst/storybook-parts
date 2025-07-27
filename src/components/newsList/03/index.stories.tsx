// https://www.bish.tokyo/
import { NewsList03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "NewsList/03",
  component: NewsList03,
} satisfies Meta<typeof NewsList03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: "#",
        category: "LIVE/EVENT",
        date: "2021.01.22",
        week: "FRI",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        category: "LIVE/EVENT",
        date: "2021.01.21",
        week: "THU",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        category: "BLOG",
        date: "2021.01.20",
        week: "WED",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
