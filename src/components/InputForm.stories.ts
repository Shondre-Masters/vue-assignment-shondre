import { defineComponent } from 'vue';
import InputForm from '../components/InputForm.vue';

export default {
  title: 'Example/InputForm',
  component: InputForm,
};

const Template = (args: { id: string; label: string; modelValue: string; placeholder: string; type: string }) => ({
  components: { InputForm },
  setup() {
    return { args };
  },
  template: '<InputForm v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'inputField',
  label: 'Input Field',
  modelValue: '',
  placeholder: 'Enter value',
  type: 'text',
};
