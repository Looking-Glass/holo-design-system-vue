import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: '<Toggle v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: true,
  id: 'my-toggle'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: true,
  label: 'Toggle label',
  id: 'my-toggle-1'
};