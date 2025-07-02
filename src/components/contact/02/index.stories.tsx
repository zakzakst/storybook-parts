// https://marimo-dental.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact02 } from ".";

const meta = {
  title: "Contact/02",
  component: Contact02,
  args: {
    links: [
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "お問い合わせ02",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "お問い合わせ02",
      },
    ],
  },
} satisfies Meta<typeof Contact02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
