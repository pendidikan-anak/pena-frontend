<template>
  <div class="vendorSiswaBaru">
    <div class="vendorSiswaBaru__title">
      <h1 class="xlarge-title">Daftar Registrasi Baru</h1>
    </div>
    <div class="vendorSiswaBaru__search">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
      <input type="text" placeholder="Cari nama siswa disini…">
    </div>
    <div class="vendorSiswaBaru__table">
      <el-table :data="tableData" class="table" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="join" label="Tanggal Registrasi" width="180"></el-table-column>
        <el-table-column prop="limit" label="Batas Respon" width="180"></el-table-column>
        <el-table-column label="Status" width="180">
          <template slot-scope="scope">
            <!-- <el-popover trigger="hover" placement="top"> -->
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.status }}</el-tag>
            </div>
            <!-- </el-popover> -->
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <i
              slot="prefix"
              class="el-icon-edit-outline el-icon-search"
              @click="handleEdit(scope.$index, scope.row)"
            ></i>
            <!-- <el-button
              size="mini"
            @click="handleEdit(scope.$index, scope.row)"></el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-siswabaru",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          join: "07 Mar 2019",
          limit: "12 Mar 2019",
          status: "Menunggu Respon"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          join: "07 Mar 2019",
          limit: "12 Mar 2019",
          status: "Menunggu Respon"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          join: "07 Mar 2019",
          limit: "12 Mar 2019",
          status: "Menunggu Respon"
        },
        {
          date: "2016-05-03",
          name: "Tom",
          join: "07 Mar 2019",
          limit: "12 Mar 2019",
          status: "Menunggu Respon"
        }
      ]
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
  methods: {
    handleEdit(index, row) {
      this.$router.push({ name: "siswaBaruDetail" });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>