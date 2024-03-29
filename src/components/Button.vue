<template>
  <component
    :is="component"
    class="cursor-pointer text-center flex place-items-center place-content-center font-sans hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed leading-none"
    @click="emitClick"
    v-bind="$attrs"
    :class="{
      // Sizes
      'px-4 py-1.5 text-sm rounded-3xl': size === 'small',
      'px-5 py-2.5 text-base rounded-3xl': size === 'large',
      'px-2.5 py-1.5 text-xl rounded-[40px]': size === 'extralarge',
      
      // Primary + Brand
      'bg-white border border-white text-black': color === 'brand' && variant === 'primary',

      // Primary + White
      'bg-white border border-white text-black': color === 'white' && variant === 'primary',

      // Primary + Black
      'bg-black border border-black text-white': color === 'black' && variant === 'primary',

      // Primary + Positive
      'bg-utility-positive border border-utility-positive text-white': color === 'utility-positive' && variant === 'primary',

      // Primary + Warning
      'bg-utility-warning border border-utility-warning text-black': color === 'utility-warning' && variant === 'primary',

      // Primary + Critical
      'bg-utility-critical border border-utility-critical text-white': color === 'utility-critical' && variant === 'primary',

      // Primary + Info
      'bg-utility-info border border-utility-info text-white': color === 'utility-info' && variant === 'primary',

      // Secondary Base
      'bg-transparent': variant === 'secondary', 
      'border border-current': variant === 'secondary',

      // Secondary/Tertiary + Brand
      'text-white': color === 'brand' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + White
      'text-white': color === 'white' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + Black
      'text-black': color === 'black' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + Positive
      'text-utility-positive': color === 'utility-positive' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + Warning
      'text-utility-warning': color === 'utility-warning' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + Critical
      'text-utility-critical': color === 'utility-critical' && (variant === 'secondary' || variant === 'tertiary'),

      // Secondary/Tertiary + Info
      'text-utility-info': color === 'utility-info' && (variant === 'secondary' || variant === 'tertiary'),

      // Tertiary base
      'border-0' : variant === 'tertiary'
    }"
  >
    <slot />
    <Spinner
      v-if="isLoading"
      class="ml-2"
      :size="size === 'small' ? 16 : 24"
    />
  </component>
</template>

<script>
import Spinner from './Spinner'

export default {
  props: {
    component: {
      type: [Object, String],
      default: 'button'
    },
    shape: {
      type: String,
      default: 'rounded'
    },
    variant: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: 'brand'
    },
    size: {
      type: String,
      default: 'small'
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Spinner
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