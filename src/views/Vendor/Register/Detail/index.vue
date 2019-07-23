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
          <a class="register__intro__form__right small-font" @click="checkNpsn">Cek NPSN</a>
          <div>
            <el-input
              class="register__intro__form__input"
              type="textarea"
              :rows="4"
              placeholder="Alamat"
              v-model="address"
            ></el-input>
            <a
              class="register__intro__form__right small-font"
              style="position: absolute;"
              @click="openMap"
            >Buka Peta</a>
          </div>
          <el-select
            v-model="selectedProvince"
            class="register__intro__form__input"
            placeholder="Provinsi"
          >
            <el-option
              v-for="province in provinces"
              :key="province.id"
              :label="province"
              :value="province"
            >{{province}}</el-option>
          </el-select>
          <el-select v-model="selectedCity" class="register__intro__form__input" placeholder="Kota">
            <el-option v-for="city in cities" :label="city" :key="city.id" :value="city">{{city}}</el-option>
          </el-select>
          <!-- <el-select
            v-model="selectedKecamatan"
            class="register__intro__form__input"
            placeholder="Kecamatan"
          >
            <el-option v-for="item in kecamatan" :label="item" :key="item" :value="item">{{item}}</el-option>
          </el-select>-->
          <el-select
            v-model="selectedDistrict"
            class="register__intro__form__input"
            placeholder="Kelurahan"
          >
            <el-option
              v-for="district in districts"
              :label="district"
              :key="district"
              :value="district"
            >{{district}}</el-option>
          </el-select>
          <el-select
            v-model="selectedZipCode"
            class="register__intro__form__input"
            placeholder="Kode Pos"
          >
            <el-option
              v-for="zipCode in zipCodes"
              :key="zipCode.id"
              :label="zipCode.name"
              :value="zipCode.id"
            >{{zipCode.name}}</el-option>
          </el-select>
          <!-- <div>
            <el-input
              class="register__intro__form__input__kode_pos"
              placeholder="Kode Pos"
              v-model="zipCode"
            ></el-input>
          </div>-->
        </div>
        <div class v-if="active === 2">
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Sekolah"
            v-model="schoolName"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Yayasan"
            v-model="foundation"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nama Kepala Sekolah"
            v-model="headmaster"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Nomor Telepon"
            v-model="schoolNumber"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Website Sekolah"
            v-model="website"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Jenjang Pendidikan"
            v-model="educationLevel"
          ></el-input>
          <el-input
            class="register__intro__form__input"
            placeholder="Akreditasi"
            v-model="accreditation"
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
  props: {
    vendor: Object
  },
  data() {
    return {
      npsn: "",
      address: "",
      provinces: [],
      selectedProvince: "",
      cities: [],
      selectedCity: "",
      districts: [],
      selectedDistrict: "",
      zipCodes: [],
      selectedZipCode: "",
      schoolName: "",
      foundation: "",
      headmaster: "",
      schoolNumber: "",
      website: "",
      educationLevel: "",
      accreditation: "",
      active: 1,
      location: ""
    };
  },
  computed: {},
  watch: {
    selectedProvince(val) {
      const data = this.location.filter(y => {
        return y.province == val;
      });
      const city = this.uniqByKeepFirst(data, it => it.city).map(x => {
        return x.city;
      });
      this.cities = city;
    },
    selectedCity(val) {
      const data = this.location.filter(y => {
        return y.city == val;
      });
      const district = this.uniqByKeepFirst(data, it => it.district_name).map(
        x => {
          return x.district_name;
        }
      );
      this.districts = district;
    },
    selectedDistrict(val) {
      const data = this.location.filter(y => {
        return y.district_name == val;
      });
      const zipCode = this.uniqByKeepFirst(data, it => it.name).map(x => {
        return x;
      });
      this.zipCodes = zipCode;
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getLocation();
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
    getLocation() {
      this.axios
        .get("/api/location/")
        .then(response => {
          if (response.status === 200) {
            const { data } = response;

            this.location = data;

            const province = this.uniqByKeepFirst(data, it => it.province).map(
              x => {
                return x.province;
              }
            );

            this.provinces = province;
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
      const data = {
        fullname: this.schoolName,
        email: this.vendor.email,
        birth_date: "1991-01-01",
        password1: this.vendor.password1,
        password2: this.vendor.password2,
        school_name: this.schoolName,
        npsn: this.npsn,
        foundation: this.foundation,
        accreditation: this.accreditation,
        education_level: this.educationLevel,
        website: this.website,
        headmaster: this.headmaster,
        school_description: "",
        school_achievements: "",
        school_facilities: "",
        zip_code: this.selectedZipCode
      };

      this.axios
        .post("/api/vendors/", data)
        .then(response => {
          if (response.status === 201) {
            return this.$alert(
              "Kami telah mengirimkan email konfirmasi ke email anda. Silakan buka email anda dan klik link pada email tersebut untuk aktivasi akun dan mengaktifkan fitur kami.",
              "Terima kasih sudah mendaftar kemitraan di Pena.",
              {
                confirmButtonText: "OK",
                callback: action => {
                  this.$router.push({ name: "login" });
                }
              }
            );
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
    checkNpsn() {
      this.axios.get(`/api/master-data/school/${this.npsn}/`).then(response => {
        if (response.status === 200) {
          const school = response.data;

          this.accreditation = school.accreditation;
          this.address = school.address;
          this.educationLevel = school.education_level;
          this.foundation = school.foundation;
          this.headmaster = school.headmaster;
          this.schoolName = school.school_name;
          this.website = school.website;
          this.zipCode = school.zip_code.name;
          this.selectedProvince = school.zip_code.province;
          this.selectedCity = school.zip_code.city;
          this.selectedDistrict = school.zip_code.district_name;
          this.selectedZipCode = school.zip_code.id;
        }
      });
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
