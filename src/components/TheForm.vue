<template>
  <form>
    <ul>
      <FormItem v-for="item in data" :key="item.id" :item="item"></FormItem>
    </ul>
    <hr>
    <p>selections:</p>
    {{ selections }}
    <hr>
    <p>selections count:</p>
    {{ selectionsCount }}
  </form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import FormItem from "./FormItem.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["data", "selections"]),
    ...mapGetters(["selectionsCount"])
  },
  components: {
    FormItem
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
</style>
