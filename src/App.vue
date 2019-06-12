<template>
  <div id="app">
    <pena-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default {
  name: 'pena-app',
  components: {
    'pena-header': Header
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
</style>