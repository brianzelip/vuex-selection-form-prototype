<template>
  <!-- <li @click="isSelected = !isSelected">{{ item.msg }}</li> -->
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
import { mapActions } from "vuex";

import FormItemCheckbox from "./FormItemCheckbox.vue";
import FormItemQty from "./FormItemQty.vue";

export default {
  data() {
    return {
      isSelected: false
    };
  },
  props: ["item"],
  components: {
    FormItemCheckbox,
    FormItemQty
  },
  methods: {
    ...mapActions(["addSelectedItem", "removeSelectedItem"])
  },
  watch: {
    isSelected() {
      this.isSelected
        ? this.addSelectedItem(this.item)
        : this.removeSelectedItem(this.item.msg);
    }
  }
};
</script>

