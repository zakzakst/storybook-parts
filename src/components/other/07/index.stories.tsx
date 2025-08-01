// https://pogg-sweetpotatopie.com/
import { Other07 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/07",
  component: Other07,
  argTypes: {
    text: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Other07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainImg: "https://picsum.photos/id/1000/1000/500",
    href: "#",
    date: "2021.00.00",
    thumbnail: "https://picsum.photos/id/1001/400/200",
    text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
