<template>
  <div class="children">
    <div class="children__noData" v-if="children.length == 0">
      <span>
        <p class="base-font">Anda belum menambahkan anak.</p>
      </span>
      <span>
        <p class="base-font">Silahkan tambahkan anak.</p>
      </span>
      <router-link :to="{name: 'addChild'}">
        <el-button size="mini">
          <span class="small-font">Tambah Anak</span>
        </el-button>
      </router-link>
    </div>
    <div class="children__haveData" v-else>
      <div v-for="child in children" :key="child.id">
        <div class="child base-font">
          <div class="left">{{child.first_name}}</div>
          <div class="right">
            <i class="el-icon-edit"></i>
          </div>
        </div>
      </div>
      <router-link :to="{name: 'addChild'}">
        <el-button size="mini">
          <span class="small-font">Tambah Anak</span>
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-user-children",
  components: {},
  props: {
    children: Array
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
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>