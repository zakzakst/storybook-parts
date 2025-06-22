import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button01 } from '.';

const meta = {
  title: 'Button/01',
  component: Button01,
  argTypes: {
    children: {control: 'text'}
  },
  args: {
    href: '#'
  },
} satisfies Meta<typeof Button01>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ボタン01'
  }
}