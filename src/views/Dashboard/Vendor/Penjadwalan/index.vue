<template>
  <div class="vendorPenjadwalan">
    <div class="vendorPenjadwalan__titleGelombang">
      <h1 class="xlarge-title">Gelombang Pendaftaran</h1>
    </div>
    <div class="vendorPenjadwalan__inputGelombang">
      <el-date-picker
        v-model="gelombang"
        type="daterange"
        range-separator="-"
        start-placeholder="Dari tanggal"
        end-placeholder="Sampai tanggal"
        format="dd-MM-yyyy"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button
        class="el-button-reverse"
        size="small"
        @click="addGelombangPendaftaran"
      >Tambahkan Jadwal</el-button>
    </div>
    <div class="vendorPenjadwalan__titleInterview">
      <h1 class="xlarge-title">Jadwal Interview</h1>
    </div>
    <div class="vendorPenjadwalan__inputInterview">
      <el-date-picker
        class="dateTimePicker"
        v-model="interview"
        type="datetimerange"
        range-separator="-"
        start-placeholder="Dari tanggal"
        end-placeholder="Sampai tanggal"
        format="dd-MM-yyyy HH:mm"
        value-format="yyyy-MM-dd HH:mm"
      ></el-date-picker>
      <el-input class="inputKuota" v-model="kuota" placeholder="Kuota peserta"></el-input>
      <el-input class="inputInterval" v-model="interval" placeholder="Durasi interview (menit)"></el-input>
      <el-button class="el-button-reverse" size="small" @click="addInterview">Tambahkan Jadwal</el-button>
    </div>
    <div class="vendorPenjadwalan__showGelombang">
      <h1 class="base-font">List Gelombang Pendaftaran</h1>
      <el-table :data="dataGelombang" style="width: 30%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="from" label="Dari Tanggal"></el-table-column>
        <el-table-column prop="to" label="Sampai Tanggal"></el-table-column>
      </el-table>
    </div>
    <div class="vendorPenjadwalan__showInterview">
      <h1 class="base-font">List Jadwal Interview</h1>
      <el-table :data="dataInterview" style="width: 80%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="from" label="Dari"></el-table-column>
        <el-table-column prop="to" label="Sampai"></el-table-column>
        <el-table-column prop="kuota" label="Kuota"></el-table-column>
        <el-table-column prop="interval" label="Durasi"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-vendorPenjadwalan",
  components: {},
  props: {},
  data() {
    return {
      gelombang: "",
      interview: "",
      interval: "",
      kuota: "",
      gelombangPendaftaran: [],
      jadwalInterview: [],
      dataGelombang: [],
      dataInterview: []
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
    addInterview() {
      this.jadwalInterview.push({
        from: this.interview[0],
        to: this.interview[1],
        interval: this.interval,
        kuota: this.kuota
      });

      const from = this.interview[0].split(" ")
      const fromDate = from[0].split("-")
      const to = this.interview[1].split(" ")
      const toDate = to[0].split("-")

      this.dataInterview.push({
        from: `${fromDate[2]}-${fromDate[1]}-${fromDate[0]} ${from[1]}`,
        to: `${toDate[2]}-${toDate[1]}-${toDate[0]} ${to[1]}`,
        interval: `${this.interval} menit`,
        kuota: this.kuota
      });

      this.interview = "";
      this.interval = "";
      this.kuota = "";
      console.log(this.jadwalInterview);
    },
    addGelombangPendaftaran() {
      this.gelombangPendaftaran.push({
        from: this.gelombang[0],
        to: this.gelombang[1]
      });
      const from = this.gelombang[0].split("-");
      const to = this.gelombang[1].split("-");
      this.dataGelombang.push({
        from: `${from[2]}-${from[1]}-${from[0]}`,
        to: `${to[2]}-${to[1]}-${to[0]}`
      });
      this.gelombang = "";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>