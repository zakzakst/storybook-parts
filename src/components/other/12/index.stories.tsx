// https://ics.media/entry/230126/
import { Other12 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/12",
  component: Other12,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
