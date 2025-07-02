// https://www.fabric-arts.co.jp/recruit/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact03 } from ".";

const meta = {
  title: "Contact/03",
  component: Contact03,
  args: {
    href: "#",
  },
} satisfies Meta<typeof Contact03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
