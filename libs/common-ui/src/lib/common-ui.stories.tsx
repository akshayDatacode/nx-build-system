import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommonUi } from './common-ui';

const Story: ComponentMeta<typeof CommonUi> = {
  component: CommonUi,
  title: 'CommonUi',
};
export default Story;

const Template: ComponentStory<typeof CommonUi> = (args) => (
  <CommonUi {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
