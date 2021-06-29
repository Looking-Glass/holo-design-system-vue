<template>
  <VTabs
    :classes="{
      root: 'root-class',
      tablist: 'relative z-0 rounded-lg shadow flex divide-x divide-gray-200'
    }"
  >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </VTabs>
</template>

<script>
import { VTabs } from 'vuetensils/src/components';

export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      default: 0
    }
  },
  components: {
    VTabs
  }
}
</script>

<style>
.vts-tabs [role="tab"] {
  @apply group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10;
}

.vts-tabs [role="tab"][aria-selected="true"] {
  @apply bg-brand-default text-white border-brand-default;
}

.vts-tabs [role="tab"]:first-of-type {
  @apply rounded-l-lg;
}

.vts-tabs [role="tab"]:last-of-type {
  @apply rounded-r-lg;
}
</style>