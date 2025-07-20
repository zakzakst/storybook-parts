// http://www.d1meisei.co.jp/
import { Heading07 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/07",
  component: Heading07,
} satisfies Meta<typeof Heading07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
