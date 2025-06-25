// https://ion-e-air.jp/
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button10 } from ".";

const meta = {
  title: "Button/10",
  component: Button10,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "64px",
          background: "linear-gradient(106deg, #dbe9ec 0%, #e2ecee 100%)",
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
} satisfies Meta<typeof Button10>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "ボタン10",
  },
};
