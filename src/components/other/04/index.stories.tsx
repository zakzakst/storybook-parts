// https://www.snowsand.jp/
import { Other04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/04",
  component: Other04,
} satisfies Meta<typeof Other04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: (
      <>
        テキストが入ります。
        <br />
        <b>テキストが入ります。</b>テキストが入ります。
        <br />
        テキストが入ります。
        <br />
        <b>テキストが入ります。</b>テキストが入ります。
      </>
    ),
  },
};
