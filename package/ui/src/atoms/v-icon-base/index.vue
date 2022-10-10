<script setup lang="ts">
interface Props {
  iconName?: string;
  iconTitle?: string;
  width?: number | string;
  height?: number | string;
}

withDefaults(defineProps<Props>(), {
  iconName: 'box',
  iconTitle: 'box',
  width: 18,
  height: 18
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-label="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >
      {{ iconTitle }}
    </title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
