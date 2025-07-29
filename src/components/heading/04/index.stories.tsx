// https://quantitative.jp/recruit
import { ContainerQueryDecorator } from "../../../utils/storybook-decorators";

import { Heading04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/04",
  component: Heading04,
  decorators: [ContainerQueryDecorator],
} satisfies Meta<typeof Heading04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shoulder: "Heading 04",
    text: "見出しが入ります",
  },
};
