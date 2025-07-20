// https://www.yokohama-stadium.co.jp/
import { ServiceList03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
        textEn: "SERVICE 01",
        textJa: "サービス 01",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textEn: "SERVICE 02",
        textJa: "サービス 02",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textEn: "SERVICE 03",
        textJa: "サービス 03",
      },
      {
        href: "#",
        icon: "http://placehold.jp/350x350.png?text=ICON",
        textEn: "SERVICE 04",
        textJa: "サービス 04",
      },
    ],
  },
};
