// https://www.project8.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact01 } from ".";

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
