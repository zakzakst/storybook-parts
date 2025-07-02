// https://www.orikane.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading05 } from ".";

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
