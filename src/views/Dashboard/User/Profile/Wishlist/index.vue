<template>
  <div class="wishlist">
    <div class="wishlist__noData" v-if="wishlists.length == 0">
      <span>
        <p class="base-font">Anda belum menambahkan wishlist.</p>
      </span>
      <span>
        <p class="base-font">Silahkan tambahkan wishlist.</p>
      </span>
      <el-button size="mini">
        <span class="small-font">Tambah Wishlist</span>
      </el-button>
    </div>
    <div class="wishlist__haveData" v-else>
      <div v-for="wishlist in wishlists" :key="wishlist.id">
        <div class="child base-font">
          <div class="left">{{wishlist.vendor.school_name}}</div>
          <div class="right">
            <i class="el-icon-delete"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-user-wishlist",
  components: {},
  props: {
    wishlists: Array
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