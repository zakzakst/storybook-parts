// https://universe.kaonavi.jp/
import { Other21 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/21",
  component: Other21,
  argTypes: {
    num: { control: "text" },
    text: { control: "text" },
  },
} satisfies Meta<typeof Other21>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    num: "00.0",
    text: "名前が入ります",
  },
};
