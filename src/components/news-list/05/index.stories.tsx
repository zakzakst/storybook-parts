// https://smartdrive.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NewsList05 } from ".";

const meta = {
  title: "NewsList/05",
  component: NewsList05,
  decorators: [
    (Story) => (
      <div style={{ containerType: "inline-size" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NewsList05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: "#",
        date: "2021.01.03",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        date: "2021.01.02",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        href: "#",
        date: "2021.01.01",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
