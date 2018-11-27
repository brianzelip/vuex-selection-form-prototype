<template>
  <form>
    <ul>
      <li v-for="item in data" :key="item.id" @click="addSelectedItem(item)">{{item.msg}}</li>
    </ul>
    <hr>
    <p>selections:</p>
    {{ selections }}
    <hr>
    <p>data count:</p>
    {{ dataCount }}
  </form>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["data", "selections"]),
    ...mapGetters(["dataCount"])
  },
  methods: {
    ...mapActions(["addSelectedItem"])
  }
};
</script>
