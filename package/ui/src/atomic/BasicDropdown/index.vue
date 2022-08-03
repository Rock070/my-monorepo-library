<template>
  <div>
    <select
      id=""
      name="fruit"
    >
      <option value="apple">
        蘋果
      </option>
      <option value="banana">
        香蕉
      </option>
    </select>
    <div>{{ obj }}</div>
  </div>
</template>

<script setup lang="ts">
interface Rock {
  a: number
}
const obj:Rock = {
  a: 1
}
</script>
