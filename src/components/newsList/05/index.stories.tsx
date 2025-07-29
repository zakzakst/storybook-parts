// https://smartdrive.co.jp/
import { ContainerQueryDecorator } from "../../../utils/storybook-decorators";

import { NewsList05 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "NewsList/05",
  component: NewsList05,
  decorators: [ContainerQueryDecorator],
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
