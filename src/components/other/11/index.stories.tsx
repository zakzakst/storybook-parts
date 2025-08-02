// https://mikuland.com/
import { Other11 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/11",
  component: Other11,
  argTypes: {
    text1: { control: "text" },
    text2: { control: "text" },
    text3: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text1: "2022NEN",
    text2: "RYUKOUGO TAISHO",
    text3: "MURAKAMISAMA!!",
  },
};
