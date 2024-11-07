<template>
  <svg viewBox="0 0 32 32" class="w-32 h-32">
    <circle 
      v-for="(slice, index) in slices" 
      :key="index"
      cx="16" 
      cy="16" 
      r="15.9155" 
      :stroke-dasharray="slice.dashArray"
      stroke-dashoffset="25"
      :stroke="colors[index]"
      stroke-width="2"
      fill="none"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  colors: {
    type: Array,
    required: true
  }
})

const total = computed(() => props.data.reduce((sum, value) => sum + value, 0))

const slices = computed(() => {
  let startAngle = 0
  return props.data.map(value => {
    const angle = (value / total.value) * 360
    const dashArray = `${(angle / 360) * 100} 100`
    const slice = { dashArray, transform: `rotate(${startAngle} 16 16)` }
    startAngle += angle
    return slice
  })
})
</script>