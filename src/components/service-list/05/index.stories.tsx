// http://overpass.studiovoila.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceList05 } from ".";

const meta = {
  title: "ServiceList/05",
  component: ServiceList05,
} satisfies Meta<typeof ServiceList05>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        link: "#",
        thumbnail: "https://picsum.photos/id/1000/160/160",
        heading: "見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        link: "#",
        thumbnail: "https://picsum.photos/id/1001/160/160",
        heading: "見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
      {
        link: "#",
        thumbnail: "https://picsum.photos/id/1002/160/160",
        heading: "見出しが入ります",
        text: "テキストが入ります。テキストが入ります。テキストが入ります。",
      },
    ],
  },
};
