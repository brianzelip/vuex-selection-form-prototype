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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isSelected: false
    };
  },
  props: ["item"],
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
