// https://www.digireha.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button07 } from ".";

const meta = {
  title: "Button/07",
  component: Button07,
} satisfies Meta<typeof Button07>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
