<template>
  <div class="list">
    <div class="list__search">
      <div class="list__search__input">
        <el-input placeholder="Cari sekolah di sini" v-model="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="list__search__options">
        <div class="sort">Urutkan</div>
        <div class="filter">Filter</div>
      </div>
      <div class="list__search__vendor" v-for="i in 3" :key="i">
        <router-link tag="a" :to="{name: 'detailVendor'}" v-for="o in 2" :key="o">
          <pena-big-card
            img="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            title="Sekolah Tarsisius 1"
            address="Jl. Batusari Raya No.12, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530"
            rate=4.0
            countRate=300
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BigCard from "@/components/BigCard";

export default {
  name: "pena-vendor-list",
  components: {
    "pena-big-card": BigCard
  },
  props: {},
  data() {
    return {
      search: ""
    };
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