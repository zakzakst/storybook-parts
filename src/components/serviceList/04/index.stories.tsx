// https://www.e-heyaspace.com/
import { ServiceList04 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ServiceList/04",
  component: ServiceList04,
} satisfies Meta<typeof ServiceList04>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        thumbnail: "https://picsum.photos/id/237/400/200",
        num: "01",
        headingEn: "SERVICE 01",
        headingJa: "サービス 01",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/238/400/200",
        num: "02",
        headingEn: "SERVICE 02",
        headingJa: "サービス 02",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/239/400/200",
        num: "03",
        headingEn: "SERVICE 03",
        headingJa: "サービス 03",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        thumbnail: "https://picsum.photos/id/240/400/200",
        num: "04",
        headingEn: "SERVICE 04",
        headingJa: "サービス 04",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
