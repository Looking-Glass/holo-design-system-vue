<template>
  <component :is="component" class="menu-item inline-block w-full cursor-pointer text-base p-2 bg-white hover:bg-gray-100 focus:bg-gray-100">
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
  }
}
</script>

<style>
</style>