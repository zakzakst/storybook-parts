// https://quantitative.jp/recruit
import { Heading04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/04",
  component: Heading04,
  decorators: [
    (Story) => (
      <div style={{ containerType: "inline-size" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Heading04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shoulder: "Heading 04",
    text: "見出しが入ります",
  },
};
