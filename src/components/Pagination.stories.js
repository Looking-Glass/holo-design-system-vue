import Pagination  from '@/components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  template: '<Pagination v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  pages: 10,
  current: 2
};