import Alert  from '@/components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = (args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: '<Alert v-bind="$props" />',
});

export const Positive = Template.bind({});
Positive.args = {
  tone: 'positive',
  text: 'Your form has been submitted successfully!'
};

export const Warning = Template.bind({});
Warning.args = {
  tone: 'warning',
  text: 'We might be experiencing issues'
};

export const Critical = Template.bind({});
Critical.args = {
  tone: 'critical',
  text: 'Your form could not be submitted'
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  tone: 'positive',
  text: 'Your form has been submitted successfully!',
  dismissible: true
};