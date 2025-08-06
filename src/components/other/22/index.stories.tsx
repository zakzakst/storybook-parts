import { Other22 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/22",
  component: Other22,
} satisfies Meta<typeof Other22>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "コンテンツ",
  },
};
