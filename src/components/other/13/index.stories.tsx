// https://recruit.dac.co.jp/
import { Other13 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/13",
  component: Other13,
  argTypes: {
    textEn: { control: "text" },
    textJa: { control: "text" },
    thumbnail: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Other13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textEn: "TEXT",
    textJa: "テキスト",
    thumbnail: "https://picsum.photos/id/237/320/180",
  },
};
