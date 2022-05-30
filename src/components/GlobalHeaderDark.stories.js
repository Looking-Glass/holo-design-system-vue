import GlobalHeader from './GlobalHeaderDark';

export default {
  title: 'Components/GlobalHeaderDark',
  component: GlobalHeader,
};

const Template = (args, { argTypes }) => ({
  components: { GlobalHeader },
  props: Object.keys(argTypes),
  template: '<GlobalHeader v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {  };


const TemplateOne = (args, { argTypes }) => ({
  components: { GlobalHeader },
  props: Object.keys(argTypes),
  template: '<GlobalHeader v-bind="$props"><template slot="callout">Hey there</template>',
});

export const WithCallout = TemplateOne.bind({});
WithCallout.args = {  };


const TemplateTwo = (args, { argTypes }) => ({
  components: { GlobalHeader },
  props: Object.keys(argTypes),
  template: '<GlobalHeader v-bind="$props"><template slot="callout">Hey there</template><template slot="subnav">Subnav content</template></GlobalHeader>',
});

export const WithSubnav = TemplateTwo.bind({});
WithSubnav.args = {  };