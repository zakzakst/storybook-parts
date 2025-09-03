// https://seioukai.jp/
import { ScrollAnim17 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/17",
  component: ScrollAnim17,
} satisfies Meta<typeof ScrollAnim17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      "https://picsum.photos/id/1000/800/400",
      "https://picsum.photos/id/1001/800/400",
      "https://picsum.photos/id/1002/800/400",
    ],
  },
};
