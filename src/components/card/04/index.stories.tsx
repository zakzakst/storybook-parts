// https://www.yokohama-stadium.co.jp/
import { ContainerQueryDecorator } from "../../../utils/storybook-decorators";

import { Card04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/04",
  component: Card04,
  argTypes: {
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
  decorators: [ContainerQueryDecorator],
} satisfies Meta<typeof Card04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    heading: "見出しが入ります",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
