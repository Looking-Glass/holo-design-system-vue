<template>
  <div>
    <component :is="triggerComponent" ref="trigger" v-if="!hideTrigger" @click="dialog = true">
      {{ triggerLabel }}
    </component>
    <VDialog
      v-model="dialog"
      bg-transition="fade"
      no-scroll
      class="fixed inset-0 overflow-hidden z-50"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40" @click="dialog = false">
          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex z-50">
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col p-6 bg-white shadow-xl overflow-y-scroll">
                <slot></slot>
                <button class="absolute top-5 right-5 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="dialog = false">
                  <span class="sr-only">Close panel</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill="currentColor" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VDialog>
  </div>
</template>

<script>
import { VDialog } from 'vuetensils/src/components';

export default {
  props: {
    triggerComponent: {
      type: [Object, String],
      default: 'button'
    },
    triggerLabel: {
      type: String,
      required: true
    },
    hideTrigger: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VDialog
  },
  data() {
    return {
      dialog: this.value
    }
  },
  watch: {
    dialog(value) {
      this.$emit('input', value)

      if (value === true) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  }
}
</script>

<style>

</style>