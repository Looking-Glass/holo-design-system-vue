import Modal  from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args, { argTypes }) => ({
  components: { Modal },
  props: Object.keys(argTypes),
  template: '<Modal v-bind="$props">Modal Content</Modal>',
});

export const Default = Template.bind({});
Default.args = {
  triggerComponent: 'button',
  triggerLabel: 'Hey, I open a modal',
  value: false
};