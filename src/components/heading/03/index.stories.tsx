// https://www.dentist-sato.com/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading03 } from ".";

const meta = {
  title: "Heading/03",
  component: Heading03,
  decorators: [
    (Story) => (
      <div style={{ containerType: "inline-size" }}>
        <Story />
      </div>
    ),
  ],
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
