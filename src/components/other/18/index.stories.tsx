// https://www.torebentsen.com/
import { Other18 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/18",
  component: Other18,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other18>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "TEXT",
  },
};
