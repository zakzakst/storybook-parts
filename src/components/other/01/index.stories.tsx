// https://lavie-enfant.com/
import { Other01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/01",
  component: Other01,
  decorators: [
    (Story) => (
      <>
        <div style={{ height: "500px" }} />
        <Story />
        <div style={{ height: "500px" }} />
      </>
    ),
  ],
  argTypes: {
    img: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Other01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: "https://picsum.photos/800/400",
  },
};
