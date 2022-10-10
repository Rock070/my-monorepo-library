<script setup lang="ts">
import IconArrow from '@/assets/svg/triangle-arrow.svg?component'
import VIconBase from '@/atoms/v-icon-base/index.vue'
</script>

<template>
  <details
    ref="detailsEl"
    class="v-details"
  >
    <summary
      class="
        cursor-pointer
        flex items-center justify-between
        font-bold list-none
      "
    >
      <slot
        name="summary"
      />
      <slot
        name="icon"
      >
        <v-icon-base
          width="12"
          height="10"
          icon-name="toggle-arrow"
          icon-title="展開或收合內容"
          class="v-details--icon transition-transform ease-in-out"
        >
          <icon-arrow />
        </v-icon-base>
      </slot>
    </summary>
    <div class="pt-4">
      <slot />
    </div>
  </details>
</template>

<style>
.v-details[open] {
  .v-details--icon {
    transform: rotate(180deg);
  }
}
</style>
