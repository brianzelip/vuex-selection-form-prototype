<template>
  <li @click="isSelected = !isSelected">{{ item.msg }}</li>
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
        : this.removeSelectedItem(this.item.id);
    }
  }
};
</script>

