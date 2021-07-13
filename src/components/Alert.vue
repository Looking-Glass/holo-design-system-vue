<template>
  <VAlert
    role="alert"
    class="flex p-3 rounded-md"
    v-bind="$attrs"
    :dismissible="dismissible"
    :class="{
      'bg-utility-positive text-white' : tone === 'positive',
      'bg-utility-warning' : tone === 'warning',
      'bg-utility-critical text-white' : tone === 'critical'
    }"
  >
    <slot />
  </VAlert>
</template>

<script>
import { VAlert } from 'vuetensils/src/components';

export default {
  props: {
    tone: {
      type: String,
      default: 'positive'
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VAlert
  }
}
</script>

<style>
.vts-alert__dismiss {
  @apply ml-auto;
}
</style>