import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args, { argTypes }) => ({
  components: { Spinner },
  props: Object.keys(argTypes),
  template: '<Spinner v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  size: 24
};