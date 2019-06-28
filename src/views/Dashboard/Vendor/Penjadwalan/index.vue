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
        start-placeholder="Start date"
        end-placeholder="End date"
        format="dd-MM-yyyy"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
      <el-button class="el-button-reverse" size="small" @click="addGelombangPendaftaran">Tambahkan Jadwal</el-button>
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
        start-placeholder="Start date"
        end-placeholder="End date"
        format="dd-MM-yyyy HH:mm"
        value-format="yyyy-MM-dd HH:mm"
      ></el-date-picker>
      <el-input class="inputKuota" v-model="kuota" placeholder="Kuota peserta"></el-input>
      <el-input class="inputInterval" v-model="interval" placeholder="Waktu interview (menit)"></el-input>
      <el-button class="el-button-reverse" size="small" @click="addInterview">Tambahkan Jadwal</el-button>
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
      jadwalInterview: []
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
      this.gelombang = "";
      console.log(this.gelombangPendaftaran);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>