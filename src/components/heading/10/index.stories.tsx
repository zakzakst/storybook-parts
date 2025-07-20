// https://okivfes.jp/
import { Heading10 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/10",
  component: Heading10,
} satisfies Meta<typeof Heading10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "見出し10",
    headingEn: "HEADING TEXT",
  },
};
