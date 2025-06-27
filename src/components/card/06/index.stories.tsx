// http://www.bodaijuen.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card06 } from ".";

const meta = {
  title: "Card/06",
  component: Card06,
  argTypes: {
    date: { control: "text" },
    tag: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    date: "2020.10.01",
    tag: "お知らせ",
    heading: "タイトルが入ります",
    content: "テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
