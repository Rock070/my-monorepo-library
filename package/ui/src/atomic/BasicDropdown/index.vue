<template>
  <div>
    <select
      id=""
      name="fruit"
    >
      <option value="apple">
        蘋果{{ obj.a }}
      </option>
      <option value="banana">
        香蕉
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface Rock {
  a: number;
}

const obj:Rock = {
  a: 2
}
</script>
