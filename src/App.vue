<template>
  <div id="app">
    <pena-header />
    <router-view class="content"/>
    <pena-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'pena-app',
  components: {
    'pena-header': Header,
    'pena-footer': Footer
  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  activated() {

  },
  deactivated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  methods: {

  }
}
</script>

<style lang='scss'>
@import "~@/styles/base";
// @import "~@/styles/icons";
@import "~@/styles/mixins";
@import "~@/styles/typography";

.content {
  margin-bottom: 5px;
  min-height: calc(100vh - 452px);
}
</style>