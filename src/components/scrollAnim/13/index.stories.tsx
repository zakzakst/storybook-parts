// http://overpass.studiovoila.com/
import { ScrollAnimDecorator } from "../../../utils/storybook-decorators";

import { ScrollAnim13 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/13",
  component: ScrollAnim13,
  decorators: [ScrollAnimDecorator],
  argTypes: {
    heading: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof ScrollAnim13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "SCROLL ANIMATION",
  },
};
