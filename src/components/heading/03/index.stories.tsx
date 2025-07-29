// https://www.dentist-sato.com/
import { ContainerQueryDecorator } from "../../../utils/storybook-decorators";

import { Heading03 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Heading/03",
  component: Heading03,
  decorators: [ContainerQueryDecorator],
} satisfies Meta<typeof Heading03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "見出し03",
    description:
      "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
  },
};
