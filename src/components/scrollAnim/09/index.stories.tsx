// https://www.kumon.ne.jp/job/
import {
  ScrollAnimDecorator,
  ContainerQueryDecorator,
} from "../../../utils/storybook-decorators";

import { ScrollAnim09 } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ScrollAnim/09",
  component: ScrollAnim09,
  decorators: [ScrollAnimDecorator, ContainerQueryDecorator],
  // args: {},
} satisfies Meta<typeof ScrollAnim09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    texts: [
      <>
        1 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        2 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        3 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        4 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        5 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        6 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        7 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        8 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        9 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
      <>
        10 テキストが入ります。テキストが入ります。
        <br />
        テキストが入ります。
      </>,
    ],
  },
};
