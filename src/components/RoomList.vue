<template>
  <ul id="room_list">
    <li v-for="l in list" :key="l.id">
      {{ l }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "room_list",
  computed: {
    list() {
      return this.$store.getters["room/list"]
    }
  },
  mounted() {
    this.$store.dispatch("room/GetList")
  }
}
</script>
