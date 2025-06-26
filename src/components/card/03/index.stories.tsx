// https://www.themeum.com/product/tutor-lms/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card03 } from ".";

const meta = {
  title: "Card/03",
  component: Card03,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "40px 40px 80px",
          background: "#EFF4F7",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    heading: { control: "text" },
  },
} satisfies Meta<typeof Card03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/1000/200/200",
    heading: "見出しが入ります",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
    links: [
      {
        href: "#",
        text: "アドオン",
        target: "_blank",
      },
      {
        href: "#",
        text: "インテグレーション",
        target: "_blank",
      },
    ],
  },
};
