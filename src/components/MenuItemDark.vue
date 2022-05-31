<template>
  <component :is="component" class="text-left font-sans-alt inline-block w-full cursor-pointer text-base p-2 text-white bg-white bg-opacity-0 focus:bg-opacity-10 hover:bg-opacity-10" v-bind="$attrs" @click="emitClick">
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