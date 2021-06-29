import DisclosureMenu  from './DisclosureMenu';

export default {
  title: 'Components/DisclosureMenu',
  component: DisclosureMenu,
};

const Template = (args, { argTypes }) => ({
  components: { DisclosureMenu },
  props: Object.keys(argTypes),
  template: '<DisclosureMenu v-bind="$props">DisclosureMenu Content</DisclosureMenu>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Hey! This is a simple disclosure menu'
};