// https://www.tambien.studio/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card20 } from ".";

const meta = {
  title: "Card/20",
  component: Card20,
  argTypes: {
    heading: { control: "text" },
    subHeading: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Card20>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "CARD 20 HEADING TEXT",
    thumbnail1: "https://picsum.photos/id/237/320/180",
    thumbnail2: "https://picsum.photos/id/238/320/180",
    thumbnail3: "https://picsum.photos/id/242/320/180",
    subHeading: "SUB TEXT",
  },
};
