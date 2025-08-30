import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim15 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/15",
  component: ScrollAnim15,
  decorators: [ScrollAnimDecorator],
} satisfies Meta<typeof ScrollAnim15>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
