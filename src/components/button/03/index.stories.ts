import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button03 } from '.';

const meta = {
  title: 'Button/03',
  component: Button03,
} satisfies Meta<typeof Button03>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ボタン03'
  }
}