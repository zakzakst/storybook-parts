// https://www.felissimo.co.jp/felicycle/
import { Other03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/03",
  component: Other03,
  argTypes: {
    heading: { control: "text" },
    subHeading: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "ご利用のご注意",
    subHeading: "見出しが入ります",
    items: [
      "テキストが入ります。テキストが入ります。テキストが入ります。",
      "テキストが入ります。テキストが入ります。テキストが入ります。",
      "テキストが入ります。テキストが入ります。テキストが入ります。",
    ],
  },
};
