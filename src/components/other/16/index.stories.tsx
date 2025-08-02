// https://ics.media/entry/230519/
import { Other16 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Other/16",
  component: Other16,
} satisfies Meta<typeof Other16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
