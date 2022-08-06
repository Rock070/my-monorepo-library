<script setup lang="ts">
import IconArrow from './triangle-arrow.svg?component'
import VIconBase from '@/atoms/v-icon-base/index.vue'
</script>

<template>
  <details ref="detailsEl">
    <summary
      class="
        cursor-pointer
        flex items-center justify-between
        font-bold
      "
    >
      <slot
        name="summary"
      />
      <v-icon-base
        width="12"
        height="10"
        icon-name="toggle-arrow"
        icon-title="展開或收合內容"
        class="icon transition-transform ease-in-out"
      >
        <icon-arrow />
      </v-icon-base>
    </summary>
    <div class="pt-4">
      <slot />
    </div>
  </details>
</template>

<style scoped>
summary {
  list-style: none;
}

details[open] {
  .icon {
    @apply rotate-180;
  }
}
</style>
