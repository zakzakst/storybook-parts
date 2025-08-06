// https://since-inc.jp/blog/8675
import { Other20 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/20",
  component: Other20,
} satisfies Meta<typeof Other20>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
