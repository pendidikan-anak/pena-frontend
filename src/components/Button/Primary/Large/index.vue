<template>
<button v-on:click="submit" class="button">
  {{text}}
</button>
</template>

<script>
export default {
  name: 'primary-large-button',
  components: {

  },
  props: ['text'],
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
    submit() {
      this.$emit('submit');
    }
  }
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
