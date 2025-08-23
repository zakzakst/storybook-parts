// https://zakzakst.github.io/parts/components/detail/hero01.html
import { Hero01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Hero/01",
  component: Hero01,
  argTypes: {
    title1: { control: "text" },
    title2: { control: "text" },
    subTitle1: { control: "text" },
    subTitle2: { control: "text" },
    thumbnail: { control: "text" },
  },
} satisfies Meta<typeof Hero01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title1: "サブタイトル1行目",
    title2: "サブタイトル2行目",
    subTitle1: "MAIN TITLE 01",
    subTitle2: "MAIN TITLE 02 長い文字列長い文字列",
    thumbnail: "https://picsum.photos/id/100/1280/1280",
  },
};
