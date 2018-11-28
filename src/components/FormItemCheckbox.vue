<template>
  <div style="display: inline-block; margin-right: 1rem">
    <input
      type="checkbox"
      @click="isSelected = !isSelected"
      name="items"
      :id="`items-id-${item.id}`"
    >
    <label :for="`items-id-${item.id}`">{{ item.msg }}</label>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>
