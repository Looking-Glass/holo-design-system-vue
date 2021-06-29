import Tabs  from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args, { argTypes }) => ({
  components: { Tabs },
  props: Object.keys(argTypes),
  template:
  `<Tabs v-bind="$props">
    <template>Content</template>
  </Tabs>`,
});

export const Default = Template.bind({});
Default.args = {
  items: 'ad'
};