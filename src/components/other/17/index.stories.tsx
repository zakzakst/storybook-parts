// https://recruit.frontier-gr.jp/
import { Other17 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/17",
  component: Other17,
} satisfies Meta<typeof Other17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
