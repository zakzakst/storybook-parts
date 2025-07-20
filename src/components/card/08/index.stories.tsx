// https://www.dot-st.com/cp/jeanasis/jeanasis_media
import { Card08 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/08",
  component: Card08,
  argTypes: {
    date: { control: "text" },
    heading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card08>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    date: "2021.01.01",
    heading: "CARD08",
  },
};
