<template>
  <div style="display: inline-block; margin-right: 1rem">
    <span>qty:</span>
    <template v-for="n in maxQty">
      <label :for="`qty-id-${item.id}-val-${n}`" :key="`qty-id-${item.id}-val-${n}-label`">{{ n }}</label>
      <input
        type="radio"
        :name="`qty-id-${item.id}`"
        :id="`qty-id-${item.id}-val-${n}`"
        :value="n"
        :key="`qty-id-${item.id}-val-${n}-input`"
        v-model="qty"
        @change="qtyChange"
      >
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      maxQty: 6,
      qty: 0
    };
  },
  props: ["item"],
  methods: {
    ...mapActions(["updateQty"]),
    qtyChange() {
      this.updateQty({ key: this.item.msg, qty: this.qty });
    }
  }
};
</script>
