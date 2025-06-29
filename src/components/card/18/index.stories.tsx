// https://eltes-si.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card18 } from ".";

const meta = {
  title: "Card/18",
  component: Card18,
  argTypes: {
    num: { control: "text" },
    heading: { control: "text" },
    headingEn: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    num: "01",
    heading: "タイトルが入ります",
    headingEn: "English title",
    thumbnail: "https://picsum.photos/600/200",
  },
};
