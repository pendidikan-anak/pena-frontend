<template>
  <div class="register">
    <div class="register__intro">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="Informasi Kontak"></el-step>
        <el-step title="Alamat Sekolah"></el-step>
        <el-step title="Informasi Detil"></el-step>
      </el-steps>
      <div class="register__intro__form">
        <div v-if="active === 1">
          <el-input
            class="register__intro__form__input"
            placeholder="Nomor Pokok Sekolah Nasional"
            v-model="npsn"
          ></el-input>
          <a class="register__intro__form__right small-font" @click="cekNpsn">Cek NPSN</a>
          <div>
            <el-input
              class="register__intro__form__input"
              type="textarea"
              :rows="4"
              placeholder="Alamat"
              v-model="alamat"
            ></el-input>
            <a
              class="register__intro__form__right small-font"
              style="position: absolute;"
              @click="openMap"
            >Buka Peta</a>
          </div>
          <el-select v-model="selectedProvinsi" class="register__intro__form__input" placeholder="Provinsi">
            <el-option v-for="item in provinsi" :key="item.id" :label="item" :value="item">{{item}}</el-option>
          </el-select>
          <el-select v-model="selectedKota" class="register__intro__form__input" placeholder="Kota">
            <el-option v-for="item in kota" :label="item" :key="item.id" :value="item">{{item}}</el-option>
          </el-select>
          <el-select
            v-model="selectedKecamatan"
            class="register__intro__form__input"
            placeholder="Kecamatan"
          >
            <el-option v-for="item in kecamatan" :label="item" :key="item" :value="item">{{item}}</el-option>
          </el-select>
          <!-- <el-select
            v-model="kelurahan"
            class="register__intro__form__input"
            placeholder="Kelurahan"
          >
            <el-option label="Kelurahan satu" value="shanghai"></el-option>
            <el-option label="Kelurahan dua" value="beijing"></el-option>
          </el-select> -->
          <div>
            <el-input
              class="register__intro__form__input__kode_pos"
              placeholder="Kode Pos"
              v-model="kodepos"
            ></el-input>
          </div>
        </div>
        <div class v-if="active === 2">
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Sekolah"
            v-model="namaSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Yayasan"
            v-model="namaYayasan"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Kepala Sekolah"
            v-model="namaKepalaSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nomor Telepon"
            v-model="nomorTelepon"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Website Sekolah"
            v-model="websiteSekolah"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Jenjang Pendidikan"
            v-model="jenjangPendidikan"
          ></el-input>
        </div>
      </div>
      <div class="register__intro__right">
        <button
          class="btn-regular secondary"
          style="margin-top: 12px;"
          @click="previous"
          v-if="active > 0"
        >Sebelumnya</button>
        <button
          class="btn-regular third"
          style="margin-top: 12px;"
          @click="next"
          v-if="active < 2"
        >Selanjutnya</button>
        <button
          class="btn-regular third"
          style="margin-top: 12px;"
          @click="submit"
          v-if="active == 2"
        >Selesai</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-vendor-register",
  components: {},
  props: {},
  data() {
    return {
      npsn: "",
      alamat: "",
      provinsi: "",
      selectedProvinsi: "",
      kota: "",
      selectedKota: "",
      kecamatan: "",
      selectedKecamatan: "",
      kelurahan: "",
      kodepos: "",
      namaSekolah: "",
      namaYayasan: "",
      namaKepalaSekolah: "",
      nomorTelepon: "",
      websiteSekolah: "",
      jenjangPendidikan: "",
      active: 1,
      location: ""
    };
  },
  computed: {},
  watch: {
    selectedProvinsi(val) {
      const data = this.location.filter(y => {return y.province == val})
      console.log(data)
      const city = this.uniqByKeepFirst(data, it => it.city).map(x => { return x.city })
      this.kota = city
    },
    selectedKota(val) {
      const data = this.location.filter(y => {return y.city == val})
      console.log(data)
      const district = this.uniqByKeepFirst(data, it => it.district_name).map(x => { return x.district_name })
      this.kecamatan = district
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getLocation()
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    uniqByKeepFirst(a, key) {
      let seen = new Set();
      return a.filter(item => {
          let k = key(item);
          return seen.has(k) ? false : seen.add(k);
      });
    },
    getLocation(){
      this.axios
      .get("/api/location/")
      .then(response => {
        if (response.status === 200) {
          const { data } = response

          this.location = data

          const province = this.uniqByKeepFirst(data, it => it.province).map(x => { return x.province })

          this.provinsi = province

        }
      })
      .catch(error => {
        const fieldError = Object.keys(error.response.data);
        return this.$alert(
          error.response.data[fieldError].join(""),
          Object.keys(error.response.data).join(""),
          {
            confirmButtonText: "OK"
          }
        );
      });
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    previous() {
      if (this.active == 1) {
        window.history.back();
      } else {
        this.active--;
      }
    },
    submit() {
      // const data = {
      //   "npsn": this.npsn,
      //   "school_name": this.namaSekolah,
      //   "address": this.alamat,
      //   "zip_code": this.zip_code,
      //   "foundation": this.foundation,
      //   "accreditation": ,
      //   "education_level": this.jenjangPendidikan,
      //   "website": this.websiteSekolah,
      //   "headmaster": this.namaKepalaSekolah
      // }

      const data = {
        "user": 2,
        "school_name": this.namaSekolah,
        "npsn": this.npsn,
        "foundation": "",
        "accreditation": "",
        "education_level": this.jenjangPendidikan,
        "website": this.websiteSekolah,
        "headmaster": this.namaKepalaSekolah,
        "school_description": "",
        "school_achievements": "",
        "school_facilities": "",
        "zip_code": this.zip_code,
        "is_free": true,
        "registration_price": 0
      }

      this.axios
          .post("/api/vendors/", data)
          .then(response => {
            if (response.status === 201) {
              this.$router.push({ name: "home" });
            }
          })
          .catch(error => {
            const fieldError = Object.keys(error.response.data);
            return this.$alert(
              error.response.data[fieldError].join(""),
              Object.keys(error.response.data).join(""),
              {
                confirmButtonText: "OK"
              }
            );
          });


    },
    cekNpsn() {
      alert("Cek NPSN");
    },
    openMap() {
      alert("Buka Peta");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
