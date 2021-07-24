import MyButton from "./Button.vue";

export default {
  title: "UI Elements/Button",
  component: MyButton,
  argTypes: {},
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  template: "<MyButton v-bind='$props' />",
});

export const TestButton = Template.bind({});
TestButton.args = { label: "Test Button", disabled: false };
