<template>
  <!-- <li @click="isSelected = !isSelected">{{ item.msg }}</li> -->
  <li>
    <div style="display: inline-block; margin-right: 1rem">
      <input
        type="checkbox"
        @click="isSelected = !isSelected"
        name="items"
        :id="`items-id-${item.id}`"
      >
      <label :for="`items-id-${item.id}`">{{ item.msg }}</label>
    </div>
    <div style="display: inline-block; margin-right: 1rem">
      <span>qty:</span>
      <template v-for="n in 3">
        <label :for="`qty-id-${item.id}-val-${n}`" :key="`qty-id-${item.id}-val-${n}`">{{ n }}</label>
        <input
          type="radio"
          :name="`qty-id-${item.id}`"
          :id="`qty-id-${item.id}-val-${n}`"
          :value="n"
          :key="`qty-id-${item.id}-val-${n}`"
        >
      </template>
    </div>
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

