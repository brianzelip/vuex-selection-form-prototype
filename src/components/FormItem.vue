<template>
  <li>
    <FormItemCheckbox :item="item"></FormItemCheckbox>
    <FormItemQty :id="item.id"></FormItemQty>
    <!-- <div style="display: inline-block">
      <span>type:</span>
      <input
        type="text"
        :name="`type-id-${item.id}`"
        :id="`type-id-${item.id}`"
        :value="`${item.type}`"
      >
    </div>-->
  </li>
</template>

<script>
import FormItemCheckbox from "./FormItemCheckbox.vue";
import FormItemQty from "./FormItemQty.vue";

export default {
  props: ["item"],
  components: {
    FormItemCheckbox,
    FormItemQty
  }
};
</script>

