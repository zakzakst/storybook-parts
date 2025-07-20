// https://tsukuruba.com/
import { Heading09 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/09",
  component: Heading09,
} satisfies Meta<typeof Heading09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "HEADING09",
  },
};
