<template>
  <div class="border border-solid border-gray-300 rounded-lg w-full">
    <button
      :aria-expanded="open"
      :aria-controls="id"
      class="flex items-center bg-transparent font-bold font-sans w-full"
      :class="{ 'text-base px-3 py-1.5' : !large, 'px-4 py-2.5 text-md' : large }"
      @click="toggleAccordion"
      v-bind="$props"
      v-on="$listeners"
    >
      <span class="mr-2">
        {{ label }}
      </span>
      <svg
        width="18"
        height="18"
        class="transition-transform ml-auto"
        :style="open && 'transform: rotate(45deg);'"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 8L10 8L10 -3.49691e-07L8 -4.37114e-07L8 8L-3.49691e-07 8L-4.37114e-07 10L8 10L8 18L10 18L10 10L18 10L18 8Z" fill="currentColor"/>
      </svg>
    </button>
    <div :id="id" class="w-full" :hidden="!open">
      <slot />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  inheritAttrs: false,
  props: {
    startsOpen: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'accordion-' + uuidv4()
    },
    label: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    if (this.startsOpen) {
      this.open = true
    }
  },
  methods: {
    toggleAccordion() {
      this.open = !this.open

      if (this.open) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  }
}
</script>

<style>

</style>