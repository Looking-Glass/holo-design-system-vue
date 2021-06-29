import Accordion  from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template = (args, { argTypes }) => ({
  components: { Accordion },
  props: Object.keys(argTypes),
  template: '<Accordion v-bind="$props">Accordion Content</Accordion>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Hey! This is an accordion'
};