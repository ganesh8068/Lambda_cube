<template>
  <svg viewBox="0 0 100 50" class="w-full h-48">
    <polyline
      fill="none"
      stroke="#FF7A45"
      stroke-width="2"
      :points="points"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const points = computed(() => {
  const maxY = Math.max(...props.data.map(d => d.y))
  return props.data.map((d, i) => {
    const x = (i / (props.data.length - 1)) * 100
    const y = 50 - (d.y / maxY) * 50
    return `${x},${y}`
  }).join(' ')
})
</script>