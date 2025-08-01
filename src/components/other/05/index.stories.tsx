// https://www.snowsand.jp/
import { Other05 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/05",
  component: Other05,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
