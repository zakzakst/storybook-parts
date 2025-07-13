// https://www.yokohama-stadium.co.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceList03 } from ".";

const meta = {
  title: "ServiceList/03",
  component: ServiceList03,
} satisfies Meta<typeof ServiceList03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textJa: "SERVICE 01",
        textEn: "サービス 01",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textJa: "SERVICE 02",
        textEn: "サービス 02",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textJa: "SERVICE 03",
        textEn: "サービス 03",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textJa: "SERVICE 04",
        textEn: "サービス 04",
      },
    ],
  },
};
