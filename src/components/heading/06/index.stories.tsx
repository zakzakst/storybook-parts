// https://where.inc/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading06 } from ".";

const meta = {
  title: "Heading/06",
  component: Heading06,
} satisfies Meta<typeof Heading06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
