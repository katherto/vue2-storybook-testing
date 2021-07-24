<template>
  <div class="mt-30 ml-30">
    <Button v-bind="args" />
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";

const buttonArgs = {
  label: "Hopefully this works",
  // disabled: true,
};

export default {
  components: {
    Button,
  },
  data() {
    return {
      args: buttonArgs,
    };
  },
};
</script>
