<template>
  <div style="display: inline-block; margin-right: 1rem">
    <span>qty:</span>
    <template v-for="n in 3">
      <label :for="`qty-id-${id}-val-${n}`" :key="`qty-id-${id}-val-${n}`">{{ n }}</label>
      <input
        type="radio"
        :name="`qty-id-${id}`"
        :id="`qty-id-${id}-val-${n}`"
        :value="n"
        :key="`qty-id-${id}-val-${n}`"
      >
    </template>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
