// https://www.orikane.co.jp/
import { Heading05 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/05",
  component: Heading05,
} satisfies Meta<typeof Heading05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "見出し05",
  },
};
