// https://tenohira.kyoto-art.ac.jp/illustration/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim06 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/06",
  component: ScrollAnim06,
  decorators: [ScrollAnimDecorator],
  // args: {},
} satisfies Meta<typeof ScrollAnim06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "テキストが入ります。テキストが入ります。テキストが入ります。",
      "テキストが入ります。テキストが入ります。テキストが入ります。",
      "テキストが入ります。テキストが入ります。テキストが入ります。",
    ],
  },
};
