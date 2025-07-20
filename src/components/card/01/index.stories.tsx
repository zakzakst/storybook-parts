// https://www.digireha.com/
import { Card01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Card/01",
  component: Card01,
  argTypes: {
    textEn: { control: "text" },
    textJa: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/400/200",
    textEn: "CARD01",
    textJa: "カード01",
  },
};
