// https://www.northgraphic.net/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button04 } from ".";

const meta = {
  title: "Button/04",
  component: Button04,
  argTypes: {
    label: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button04",
  },
};
