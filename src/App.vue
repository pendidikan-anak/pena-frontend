<template>
  <div id="app">
    <pena-header/>
    <router-view class="content" :class="{noFooter: isFooter}"/>
    <pena-footer v-if="isFooter"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { log } from 'util';

export default {
  name: "pena-app",
  components: {
    "pena-header": Header,
    "pena-footer": Footer
  },
  props: {},
  data() {
    return {

    };
  },
  computed: {
    isFooter() {
      if (this.$route.name == "vendor"
          ) {
        return false;
      } else {
        return true;
      }
    }

  },
  watch: {},
  beforeCreate() {},
  created() {
  },
  beforeMount() {},
  mounted() {
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang='scss'>
@import "~@/styles/base";
// @import "~@/styles/icons";
@import "~@/styles/mixins";
@import "~@/styles/typography";

.content {
  margin-bottom: 5px;
  min-height: calc(100vh - 452px);

  &.noFooter{
    min-height: calc(100vh - 72px);
  }
}
</style>