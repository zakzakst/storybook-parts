// https://www.archetyp.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button14 } from ".";

const meta = {
  title: "Button/14",
  component: Button14,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "64px",
          background: "#f4f4f4",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { control: "text" },
  },
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン14",
  },
};
