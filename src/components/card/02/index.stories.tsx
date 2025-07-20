// https://www.teotoriatte.info/
import { Card02 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/02",
  component: Card02,
  argTypes: {
    tag: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "タグが入ります",
    icon: "http://placehold.jp/350x350.png?text=ICON",
    heading: "見出しが入ります",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
