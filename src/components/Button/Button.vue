<template>
  <div>
    <a class="rounded bg-blue-500 shadow text-white py-2 px-4">
      <!-- @slot Seeing if this Description Works -->
      <slot>{{ label }}</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * The label text for the button that appears to the user
     */
    label: {
      type: String,
      default: undefined,
    },
  },
};
</script>
