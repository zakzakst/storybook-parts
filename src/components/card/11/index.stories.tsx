// https://umenaka.oiwai.online/
import { Card11 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/11",
  component: Card11,
  argTypes: {
    heading: { control: "text" },
    date: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "カード11",
    thumbnail: "https://picsum.photos/400/200",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
    date: "2021.01.01",
  },
};
