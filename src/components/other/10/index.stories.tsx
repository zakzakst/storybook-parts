// https://www.otemae.ac.jp/opencampus/university/
import { Other10 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/10",
  component: Other10,
} satisfies Meta<typeof Other10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
