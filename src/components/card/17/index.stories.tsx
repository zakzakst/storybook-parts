// https://www.aur.co.jp/
import { Card17 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/17",
  component: Card17,
  argTypes: {
    date: { control: "text" },
  },
  args: {
    link: "#",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "16px", background: "#faf9f7" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card17>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/400",
    date: "2021-00-00",
    heading:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
    categories: ["CATEGORY"],
  },
};
