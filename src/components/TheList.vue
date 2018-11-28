<template>
  <form>
    <ul>
      <ListItem v-for="item in data" :key="item.id" :item="item"></ListItem>
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
import ListItem from "./ListItem.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["data", "selections"]),
    ...mapGetters(["selectionsCount"])
  },
  components: {
    ListItem
  }
};
</script>
