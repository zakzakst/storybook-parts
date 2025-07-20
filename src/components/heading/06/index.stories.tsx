// https://where.inc/
import { Heading06 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/06",
  component: Heading06,
} satisfies Meta<typeof Heading06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
