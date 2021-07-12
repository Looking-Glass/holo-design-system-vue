<template>
  <component :is="component" class="text-left font-sans-alt inline-block w-full cursor-pointer text-base p-2 bg-white hover:bg-gray-100 focus:bg-gray-100" v-bind="$attrs" @click="emitClick">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    component: {
      type: [Object, String],
      default: 'a'
    }
  },
  methods: {
    emitClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>