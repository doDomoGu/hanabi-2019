<template>
  <canvas id="room-list"></canvas>
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
    this.$store.dispatch("room/GetList", { params: { force: true } })
  }
}
</script>
