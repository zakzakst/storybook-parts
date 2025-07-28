// https://giginc.co.jp/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim07 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/07",
  component: ScrollAnim07,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    heading: { control: "text" },
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "SCROLL07",
    text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
