<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="{
      // Primary + Brand
      'bg-brand-default border border-brand-default text-white': color === 'brand' && variant === 'primary',

      // Primary + White
      'bg-white border border-white text-brand-default': color === 'white' && variant === 'primary',

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
      'text-brand-default': color === 'brand' && variant === 'secondary',

      // Secondary/Tertiary + White
      'text-white': color === 'white' && variant === 'secondary',

      // Secondary/Tertiary + Black
      'bg-white text-black': color === 'black' && variant === 'secondary',

      // Secondary/Tertiary + Positive
      'text-utility-positive': color === 'utility-positive' && variant === 'secondary',

      // Secondary/Tertiary + Warning
      'text-utility-warning': color === 'utility-warning' && variant === 'secondary',

      // Secondary/Tertiary + Critical
      'text-utility-critical': color === 'utility-critical' && variant === 'secondary',

      // Secondary/Tertiary + Info
      'text-utility-info': color === 'utility-info' && variant === 'secondary',
    }"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: 'brand'
    }
  }
}
</script>

<style>

</style>