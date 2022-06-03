<template>
  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
    <button @click="prevPage" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 bg-black text-sm font-medium text-gray-300 hover:bg-gray-50">
      <span class="sr-only">Previous</span>
      <svg class="svg-icon" viewBox="0 0 20 20" width="15">
        <path fill="currentColor" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
      </svg>
    </button>
    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-black border-gray-800 text-gray-300 hover:bg-gray-50" -->
    <button
      @click="changePage(n)"
      :aria-current="n === value ? 'page' : false"
      class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      :class="{
        'bg-gray-800 border-white text-white z-10' : n === value,
        'bg-black border-gray-800 text-gray-300 hover:bg-gray-50' : n !== value
      }"
      v-for="n in pages"
      :key="n"
    >
      {{ n }}
    </button>
    <button @click="nextPage" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 bg-black text-sm font-medium text-gray-300 hover:bg-gray-50">
      <span class="sr-only">Next</span>
      <svg viewBox="0 0 20 20" width="15">
        <path fill="currentColor" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(n) {
      this.$emit('input', n)
    },
    nextPage() {
      if (this.value + 1 <= this.pages) {
        this.$emit('input', this.value + 1)
      }
    },
    prevPage() {
      if (this.value - 1 >= 1) {
        this.$emit('input', this.value - 1)
      }
    }
  }
}
</script>

<style>

</style>