// https://amana.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card10 } from ".";

const meta = {
  title: "Card/10",
  component: Card10,
  argTypes: {
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/400",
    heading: "カード10",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
