import Tag  from '@/components/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: '<Tag v-bind="$props">Tag</Tag>',
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'brand',
  variant: 'primary'
};