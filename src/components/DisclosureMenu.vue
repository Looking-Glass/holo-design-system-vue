<template>
  <div :class="classes.wrapper">
    <button
      :aria-expanded="open"
      :aria-controls="id"
      class="flex items-center bg-transparent"
      :class="classes.trigger"
      @click="toggleAccordion"
      v-bind="$props"
      v-on="$listeners"
    >
      <span class="mr-2">
        {{ label }}
      </span>
      <svg class="transition-transform ml-auto"
        :style="open && 'transform: rotate(180deg);'" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="4.70711" y2="5.29289" stroke="currentColor" stroke-width="2"></line> <line x1="3.29289" y1="5.29289" x2="7.29289" y2="1.29289" stroke="currentColor" stroke-width="2"></line>
      </svg>
    </button>
    <div :id="id" class="w-full" v-if="open" :class="classes.menu">
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
    classes: {
      type: Object,
      default() {
        return {
          wrapper: '',
          trigger: '',
          menu: ''
        }
      }
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