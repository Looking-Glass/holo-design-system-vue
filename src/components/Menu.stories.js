import Menu  from './Menu';
import MenuItem  from './MenuItem';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template = (args, { argTypes }) => ({
  components: { Menu, MenuItem },
  props: Object.keys(argTypes),
  template:
  `<Menu v-bind="$props">
    <template v-if="${'trigger' in args}" v-slot:trigger>${args.trigger}</template>
    <template v-if="${'items' in args}" v-slot:items>${args.items}</template>
  </Menu>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Hey',
  items: '<MenuItem>Menu item</MenuItem><MenuItem>Menu item #2</MenuItem>'
};