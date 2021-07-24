<template>
  <a
    :href="href"
    class="rounded-md shadow py-2 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    :class="buttonClasses"
  >
    <!-- @slot Seeing if this Description Works -->
    <slot>{{ label }}</slot>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * The link location for the button */
    href: {
      type: String,
      default: "#need-link",
    },
    /**
     * The label text for the button that appears to the user */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Specifies whether the button is disabled or not */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return {
        "bg-blue-500 text-white focus-visible:ring-blue-600": !this.disabled,
        "bg-gray-300 text-gray-500 pointer-events-none focus-visible:ring-gray-400": this
          .disabled,
      };
    },
  },
};
</script>
