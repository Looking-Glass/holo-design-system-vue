<template>
  <div
    class="pl-4 pr-4 ml-auto mr-auto block w-full"
    :class="{
      'max-w-screen-lg' : size === 'regular',
      'max-w-screen-md' : size === 'small',
      'max-w-screen-xl' : size === 'large',
      'max-w-full' : size === 'full'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'regular'
    }
  }
}
</script>

<style>
</style>
