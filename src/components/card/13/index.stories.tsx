// https://www.themeum.com/product/tutor-lms/
import Thumbnail from "./assets/thumbnail.jpg";

import { Card13 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/13",
  component: Card13,
  argTypes: {
    thumbnail: {
      control: {
        type: "file",
        accept: ".png,.jpg",
      },
    },
  },
} satisfies Meta<typeof Card13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: Thumbnail,
  },
};
