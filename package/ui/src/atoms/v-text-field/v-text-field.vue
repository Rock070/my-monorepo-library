<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'

interface Props {
  modelValue: any;

  searchable?: boolean;
  placeholder?: string;
}

interface Emits {
  (type: 'update:modelValue', event: Props['modelValue']): void;
}

const props = withDefaults(defineProps<Props>(), {
  searchable: false,
  clearable: false,
  placeholder: ''
})

const emits = defineEmits<Emits>()

const slots = useSlots()
console.log(slots)

</script>
<template>
  <div class="v-text-field">
    <slot name="prepend" />
    <input
      type="text"
      :placeholder="placeholder"
    >
    <slot name="append" />
  </div>
</template>

<style>
.v-text-field {
  @apply w-full min-h-5;
  @apply flex;
}
</style>
