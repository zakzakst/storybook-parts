// https://tabisurukissa.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NewsList01 } from ".";

const meta = {
  title: "NewsList/01",
  component: NewsList01,
} satisfies Meta<typeof NewsList01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: "#",
        date: "2021.01.03",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        date: "2021.01.02",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        date: "2021.01.01",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
