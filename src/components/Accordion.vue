<template>
  <div class="border border-solid border-gray-300 rounded-lg w-full">
    <button
      :aria-expanded="open"
      :aria-controls="id"
      class="flex items-center bg-transparent px-3 py-1.5 font-bold font-sans text-base w-full"
      @click="toggleAccordion"
      v-bind="$props"
      v-on="$listeners"
    >
      <span class="mr-2">
        {{ label }}
      </span>
      <svg
        class="transition-transform ml-auto"
        :style="open && 'transform: rotate(180deg);'"
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.479 0.209429C16.2284 -0.0698096 15.8248 -0.0698096 15.5742 0.209429L8.33529 8.27471L1.09641 0.209429C0.845783 -0.0698096 0.438923 -0.0698096 0.188295 0.209429C-0.0623302 0.488667 -0.0623302 0.941976 0.188295 1.22121L7.88286 9.79057C8.13348 10.0698 8.54034 10.0698 8.78772 9.79057L16.479 1.22121C16.7296 0.941976 16.7296 0.492294 16.479 0.209429Z" fill="currentColor"/>
      </svg>
    </button>
    <div :id="id" class="w-full" v-if="open">
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
    }
  },
  data() {
    return {
      open: this.startsOpen
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