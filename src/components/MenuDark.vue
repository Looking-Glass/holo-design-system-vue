<template>
  <VDropdown
    transition="slide-up"
    position="bottom"
    class="inline-flex"
  >
    <template slot="trigger">
      <span class="flex space-x-1 items-center">
        <span :class="{'sr-only' : hideLabel}">{{ label }}</span>
        <slot name="icon" />
        <svg width="14" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.707107" y1="1.29289" x2="4.70711" y2="5.29289" stroke="currentColor" stroke-width="2"></line> <line x1="3.29289" y1="5.29289" x2="7.29289" y2="1.29289" stroke="currentColor" stroke-width="2"></line></svg>
      </span>
    </template>
    <div class="w-56 shadow-lg bg-black rounded-md bg-opacity-70 backdrop-blur-lg text-white ring-1 ring-white ring-opacity-5 focus:outline-none divide-y divide-gray-800 overflow-hidden" :class="{ 'absolute right-0' : right }">
      <slot />
    </div>
  </VDropdown>
</template>

<script>
import { VDropdown } from 'vuetensils/src/components';

export default {
  components: {
    VDropdown
  },
  props: {
    label: {
      type: String,
      required: true
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.vts-dropdown__content {
  top: 1.5rem !important;
}

.vts-dropdown__trigger {
  min-width: 40px;
  min-height: 30px;
}
</style>