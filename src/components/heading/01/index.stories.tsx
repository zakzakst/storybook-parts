// https://www.itoki.jp/special/akimiru/about/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading01 } from ".";

const meta = {
  title: "Heading/01",
  component: Heading01,
} satisfies Meta<typeof Heading01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shoulder: "POINT 01",
    text: "見出しが入ります。見出しが入ります。見出しが入ります。",
  },
};
