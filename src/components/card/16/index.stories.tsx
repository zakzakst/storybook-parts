// https://pogg-sweetpotatopie.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card16 } from ".";

const meta = {
  title: "Card/16",
  component: Card16,
  argTypes: {
    date: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
    date: "2021.00.00",
  },
};
