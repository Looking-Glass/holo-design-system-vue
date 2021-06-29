import Tooltip  from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template = (args, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template: '<Tooltip v-bind="$props">Hey</Tooltip>',
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Tooltip',
  component: 'span'
};
