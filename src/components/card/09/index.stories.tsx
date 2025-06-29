// https://www.e-heyaspace.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card09 } from ".";

const meta = {
  title: "Card/09",
  component: Card09,
  argTypes: {
    tag: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "カード09",
    thumbnail: "https://picsum.photos/400/200",
    heading: "タイトルがはいります",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
