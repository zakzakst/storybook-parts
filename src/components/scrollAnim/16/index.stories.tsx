// https://where.inc/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim16 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/16",
  component: ScrollAnim16,
  decorators: [ScrollAnimDecorator],
} satisfies Meta<typeof ScrollAnim16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
