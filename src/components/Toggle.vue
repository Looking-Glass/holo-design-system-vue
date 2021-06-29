<template>
  <component :is="label ? 'label' : 'div'" :for="label ? id : undefined" class="inline-flex place-items-center">
    <div :class="[value ? 'bg-brand-default' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
      <input type="checkbox" class="sr-only" :value="value" :id="id" @change="emitChange">
      <span aria-hidden="true" :class="[value ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
    </div>
    <span class="text-sm font-medium text-gray-900 ml-2" v-if="label">{{ label }}</span>
  </component>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  },
  methods: {
    emitChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>