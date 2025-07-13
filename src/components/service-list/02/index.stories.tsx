// https://www.dentist-sato.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceList02 } from ".";

const meta = {
  title: "ServiceList/02",
  component: ServiceList02,
} satisfies Meta<typeof ServiceList02>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "サービス 01",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "サービス 02",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "サービス 03",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        text: "サービス 04",
      },
    ],
  },
};
