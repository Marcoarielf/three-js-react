import { Meta, Story } from '@storybook/react';
import Link, { LinkProps } from './index';

const meta: Meta = {
  title: 'Link',
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    href: {
      defaultValue: 'https://www.karvi.com.ar/',
    },
  },
};

export default meta;

const Template: Story<LinkProps> = (args) => <Link {...args}>Click me!</Link>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Overview = Template.bind({});

Overview.args = {};
