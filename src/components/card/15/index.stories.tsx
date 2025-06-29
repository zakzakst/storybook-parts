// https://sakuramachi-kumamoto.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card15 } from ".";

const meta = {
  title: "Card/15",
  component: Card15,
  argTypes: {
    heading: { control: "text" },
    category: { control: "text" },
    date: { control: "text" },
  },
  args: {
    href: "#",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "16px", background: "#eee" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/1000/400/400",
    heading: "見出しが入ります見出しが入ります見出しが入ります",
    category: "カテゴリー",
    date: "2021/00/00",
  },
};
