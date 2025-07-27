// https://www.sun-top.jp/
import { ServiceList06 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ServiceList/06",
  component: ServiceList06,
} satisfies Meta<typeof ServiceList06>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        num: "01",
        thumbnail: "https://picsum.photos/id/237/400/300",
        heading: "見出しが入ります",
        subHeading: "サブ見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
        link: "#",
      },
      {
        num: "02",
        thumbnail: "https://picsum.photos/id/238/400/300",
        heading: "見出しが入ります",
        subHeading: "サブ見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
        link: "#",
      },
      {
        num: "03",
        thumbnail: "https://picsum.photos/id/239/400/300",
        heading: "見出しが入ります",
        subHeading: "サブ見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
        link: "#",
      },
      {
        num: "04",
        thumbnail: "https://picsum.photos/id/240/400/300",
        heading: "見出しが入ります",
        subHeading: "サブ見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
        link: "#",
      },
    ],
  },
};
