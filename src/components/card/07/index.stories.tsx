// https://kansou.co.jp/
import { Card07 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/07",
  component: Card07,
  argTypes: {
    date: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    date: "2021.01.01",
    heading: "タイトルが入ります。タイトルが入ります。",
  },
};
