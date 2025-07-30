// https://www.smbc-gp.co.jp/stera/
import { Modal01 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Modal/01",
  component: Modal01,
  decorators: [
    (Story) => (
      <>
        <Story />
        <div style={{ height: "100vh" }}>
          <p>▼▼▼ スクロール領域（画面固定確認用） ▼▼▼</p>
          <p>
            横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。横幅の変化確認用テキスト。
          </p>
        </div>
      </>
    ),
  ],
  argTypes: {
    title: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof Modal01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "https://picsum.photos/id/1000/400/200",
    title: "タイトルが入ります",
    children: (
      <>
        <div>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        </div>
        <div>
          <img
            src="https://picsum.photos/id/1000/400/200"
            width="400"
            height="200"
          />
        </div>
      </>
    ),
  },
};
