// https://2021.qlip.co.jp/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim08 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/08",
  component: ScrollAnim08,
  decorators: [ScrollAnimDecorator],
  // args: {},
} satisfies Meta<typeof ScrollAnim08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1010/200/300",
        year: 2020,
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1011/200/300",
        year: 2019,
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1012/200/300",
        year: 2018,
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1013/200/300",
        year: 2017,
      },
      {
        href: "#",
        thumbnail: "https://picsum.photos/id/1014/200/300",
        year: 2016,
      },
    ],
  },
};
