---
to: 'src/components/<%= component_type %>/<%= number %>/index.stories.tsx'
---
import { <%= name %> } from ".";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "<%= h.capitalize(component_type) %>/<%= number %>",
  component: <%= name %>,
  argTypes: {
    text: { control: "text" },
  },
  // args: {},
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "テキスト",
  },
};