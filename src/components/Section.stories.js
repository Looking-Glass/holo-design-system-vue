import Section  from './Section';
import Heading from './Heading';


export default {
  title: 'Components/Section',
  component: Section,
};

const Template = (args, { argTypes }) => ({
  components: { Section, Heading },
  props: Object.keys(argTypes),
  template: '<Section v-bind="$props"><Heading>Automated Heading Levels FTW</Heading><Heading>Making dev so much easier!</Heading><Section><Heading>Just nest me inside sections</Heading></Section>',
});

export const Primary = Template.bind({});
Primary.args = {  };