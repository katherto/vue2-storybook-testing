<template>
  <div class="mt-20 ml-20">
    <Button v-bind="args" />
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";

const buttonArgs = {
  label: "Hopefully this works",
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
