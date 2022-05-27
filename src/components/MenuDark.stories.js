import MenuDark  from './MenuDark';
import MenuItemDark  from './MenuItemDark';

export default {
  title: 'Components/MenuDark',
  component: MenuDark,
};

const Template = (args, { argTypes }) => ({
  components: { Menu: MenuDark, MenuItem: MenuItemDark },
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