<template>
  <div style="display: inline-block; margin-right: 1rem">
    <span>qty:</span>
    <template v-for="n in maxQty">
      <label :for="`qty-id-${id}-val-${n}`" :key="`qty-id-${id}-val-${n}-label`">{{ n }}</label>
      <input
        type="radio"
        :name="`qty-id-${id}`"
        :id="`qty-id-${id}-val-${n}`"
        :value="n"
        :key="`qty-id-${id}-val-${n}-input`"
      >
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxQty: 6
    };
  },
  props: ["id"]
};
</script>
