<template>
  <div class="biayaKesiswaan">
    <div class="biayaKesiswaan__perTahun">
      <div class="biayaKesiswaan__perTahun__header">
        <h1 class="xlarge-title">Biaya Per Tahun</h1>
      </div>
      <div class="biayaKesiswaan__perTahun__input">
        <el-input class="name" v-model="perTahun.name" placeholder="Nama Biaya"></el-input>
        <el-input class="fee" v-model="perTahun.fee" placeholder="Biaya (Rupiah)"></el-input>
        <el-button class="add" size="small" @click="handlePerTahun">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
      <div class="biayaKesiswaan__perTahun__list" v-show="biayaPerTahun.length > 0">
        <h1 class="base-title">List Biaya Per Tahun</h1>
        <el-table :data="biayaPerTahun" style="width: 50%">
          <el-table-column type="index" width="50" label="No"></el-table-column>
          <el-table-column prop="name" label="Nama"></el-table-column>
          <el-table-column prop="fee" label="Nominal"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="biayaKesiswaan__perBulan">
      <div class="biayaKesiswaan__perBulan__header">
        <h1 class="xlarge-title">Biaya Per Bulan</h1>
      </div>
      <div class="biayaKesiswaan__perBulan__input">
        <el-input class="name" v-model="perBulan.name" placeholder="Nama Biaya"></el-input>
        <el-input class="fee" v-model="perBulan.fee" placeholder="Biaya (Rupiah)"></el-input>
        <el-button class="add" size="small" @click="handlePerBulan">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
      <div class="biayaKesiswaan__perBulan__list" v-show="biayaPerBulan.length > 0">
        <h1 class="base-title">List Biaya Per Bulan</h1>
        <el-table :data="biayaPerBulan" style="width: 50%">
          <el-table-column type="index" width="50" label="No"></el-table-column>
          <el-table-column prop="name" label="Nama"></el-table-column>
          <el-table-column prop="fee" label="Nominal"></el-table-column>
          <el-table-column width="50">
            <template slot-scope="scope">
              <a>
                <i
                  class="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)"
                  slot="reference"
                ></i>
              </a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-biayaKesiswaan",
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      perTahun: { name: "", fee: null },
      perBulan: { name: "", fee: null },
      biayaPerTahun: [],
      biayaPerBulan: []
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
    handlePerTahun() {
      var numeric = new RegExp("^[0-9]*$");
      if (this.perTahun.name.trim() === "") {
        this.$message.error("Nama biaya harus diisi");
      } else if (this.perTahun.fee.trim() === "") {
        this.$message.error("Biaya harus diisi");
      } else if (!numeric.test(this.perTahun.fee)) {
        this.$message.error("Biaya harus angka");
      } else {
        this.biayaPerTahun.push(this.perTahun);
        this.perTahun = { name: "", fee: null };
      }
    },
    handlePerBulan() {
      var numeric = new RegExp("^[0-9]*$");
      if (this.perBulan.name.trim() === "") {
        this.$message.error("Nama biaya harus diisi");
      } else if (this.perBulan.fee.trim() === "") {
        this.$message.error("Biaya harus diisi");
      } else if (!numeric.test(this.perBulan.fee)) {
        this.$message.error("Biaya harus angka");
      } else {
        this.biayaPerBulan.push(this.perBulan);
        this.perBulan = { name: "", fee: null };
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>