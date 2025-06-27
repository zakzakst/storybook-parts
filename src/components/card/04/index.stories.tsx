// https://www.yokohama-stadium.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card04 } from ".";

const meta = {
  title: "Card/04",
  component: Card04,
  argTypes: {
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
  decorators: [
    (Story) => (
      <div style={{ containerType: "inline-size" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    heading: "見出しが入ります",
    content:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
