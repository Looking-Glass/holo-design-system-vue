import Drawer  from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

const Template = (args, { argTypes }) => ({
  components: { Drawer },
  props: Object.keys(argTypes),
  template: '<Drawer v-bind="$props">Drawer Content</Drawer>',
});

export const Default = Template.bind({});
Default.args = {
  triggerComponent: 'button',
  triggerLabel: 'Hey, I open a drawer',
  value: false
};