<template>
  <VTabs
    :classes="{
      root: 'root-class',
      tablist: 'relative z-0 rounded-lg shadow flex divide-x divide-gray-200'
    }"
  >
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot"/>
  </VTabs>
</template>

<script>
import { VTabs } from 'vuetensils/src/components';

export default {
  components: {
    VTabs
  }
}
</script>

<style>
.vts-tabs [role="tab"] {
  @apply relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10;
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