<template>
  <VTooltip>
    <component :is="component">
      <slot />
    </component>
    <template #tooltip>
      <div class="bg-gray-800 text-white p-2 rounded-md text-sm">
        {{ text }}
      </div>
    </template>
  </VTooltip>
</template>

<script>
import { VTooltip } from 'vuetensils/src/components';

export default {
  components: {
    VTooltip
  },
  props: {
    text: {
      type: String,
      required: true
    },
    component: {
      type: [String, Object],
      default: 'span'
    }
  }
}
</script>