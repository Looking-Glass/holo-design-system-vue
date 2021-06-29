<template>
  <VDropdown
    text="Show me what you got!"
    transition="slide-up"
    position="bottom"
  >
    <div class="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-200">
      <slot name="items"/>
    </div>
  </VDropdown>
</template>

<script>
import { VDropdown } from 'vuetensils/src/components';

export default {
  components: {
    VDropdown
  }
}
</script>

<style>

</style>