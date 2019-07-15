<template>
  <el-button v-on:click="submit"><span class="color-white">{{text}}</span></el-button>
</template>

<script>
export default {
  name: "primary-large-button",
  components: {},
  props: {
    text: String
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
