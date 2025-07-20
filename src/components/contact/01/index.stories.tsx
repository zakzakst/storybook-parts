// https://www.project8.co.jp/
import { Contact01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Contact/01",
  component: Contact01,
  args: {
    href: "#",
  },
} satisfies Meta<typeof Contact01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
