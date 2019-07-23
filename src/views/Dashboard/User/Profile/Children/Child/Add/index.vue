<template>
  <div class="child">
    <div class="child__header">
      <h1 class="medium-title">Tambahkan Anak</h1>
    </div>
    <div class="child__form">
      <div class="child__form__left">
        <el-input class="nik" placeholder="NIK" v-model="child.nik"></el-input>
        <div class="fullName">
          <el-input class="firstName" placeholder="Nama Depan" v-model="child.firstName"></el-input>
          <el-input class="lastName" placeholder="Nama Belakang" v-model="child.lastName"></el-input>
        </div>
        <el-date-picker
          class="birthDate"
          v-model="child.birthDate"
          type="date"
          placeholder="Tanggal lahir"
          format="dd/MM/yyyy"
          value-format="yyyy-MM-dd"
          :default-value="defaultDate"
        ></el-date-picker>
        <el-input class="birthPlace" placeholder="Tempat lahir" v-model="child.birthPlace"></el-input>
        <el-select v-model="child.religion" placeholder="Agama">
          <el-option
            v-for="religion in religions"
            :key="religion.id"
            :label="religion.name"
            :value="religion.id"
          ></el-option>
        </el-select>
        <div class="wrap">
          <div class="title">
            <p class="small-font">Jenis Kelamin</p>
          </div>
          <div class="description">
            <el-radio v-model="child.gender" label="M">Laki - laki</el-radio>
            <el-radio v-model="child.gender" label="F">Perempuan</el-radio>
          </div>
        </div>
        <el-input class="parentName" placeholder="Nama orang tua" v-model="child.parents"></el-input>
        <el-input class="bloodType" placeholder="Golongan darah" v-model="child.bloodType"></el-input>
        <el-input type="textarea" :rows="3" placeholder="Catatan" v-model="child.notes"></el-input>
      </div>
      <div class="child__form__right">
        <div class="wrap">
          <div class="title">
            <p class="small-font">
              Kartu Keluarga
              <i slot="prefix" class="el-icon-check" v-show="child.kk"></i>
            </p>
          </div>
          <div class="description">
            <button class="btn-block third">Tambahkan Kartu Keluarga</button>
          </div>
        </div>
        <div class="wrap">
          <div class="title">
            <p class="small-font">
              Akta Lahir
              <i slot="prefix" class="el-icon-check" v-show="child.akta"></i>
            </p>
          </div>
          <div class="description">
            <button class="btn-block third">Tambahkan Akta Lahir</button>
          </div>
        </div>
        <div class="wrap">
          <div class="title">
            <p class="small-font">
              KTP Ayah
              <i slot="prefix" class="el-icon-check" v-show="child.ktpAyah"></i>
            </p>
          </div>
          <div class="description">
            <button class="btn-block third">Tambahkan KTP Ayah</button>
          </div>
        </div>
        <div class="wrap">
          <div class="title">
            <p class="small-font">
              KTP Ibu
              <i slot="prefix" class="el-icon-check" v-show="child.ktpIbu"></i>
            </p>
          </div>
          <div class="description">
            <button class="btn-block third">Tambahkan KTP Ibu</button>
          </div>
        </div>
      </div>
    </div>
    <div class="child__footer">
      <button class="btn-block third" v-on:click="cancel">Batal</button>
      <button class="btn-block primary" v-on:click="save">Simpan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-child",
  components: {},
  props: {},
  data() {
    return {
      defaultDate: null,
      religions: [],
      child: {
        nik: null,
        parents: null,
        firstName: null,
        lastName: null,
        religion: null,
        birthDate: null,
        birthPlace: null,
        gender: null,
        bloodType: null,
        notes: null,
        kk: null,
        akta: null,
        ktpAyah: null,
        ktpIbu: null
      }
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 15);
    this.defaultDate = date;
  },
  mounted() {
    this.getReligion();
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getReligion() {
      this.axios.get("api/users/religion/").then(response => {
        this.religions = response.data;
      });
    },
    cancel() {
      window.history.back();
    },
    save() {
      this.axios
        .post("api/users/child/", {
          first_name: this.child.firstName,
          last_name: this.child.lastName,
          birth_date: this.child.birthDate,
          birth_place: this.child.birthPlace,
          gender: this.child.gender,
          religion: this.child.religion,
          blood_type: this.child.bloodType,
          notes: this.child.notes,
          nik: this.child.nik
        })
        .then(response => {
          if (response.status === 201) {
            return this.$alert("Sukses", "Anak anda telah terdaftar di Pena.", {
              confirmButtonText: "OK",
              callback: action => {
                this.$router.push({ name: "userProfile" });
              }
            });
          } else {
            return this.$alert(
              "Gagal",
              "Lengkapi data pribadi terlebih dahulu.",
              {
                confirmButtonText: "OK",
                callback: action => {
                  this.$router.push({ name: "child" });
                }
              }
            );
          }
        })
        .catch(error => {
          console.log(error);
          const fieldError = Object.keys(error.response.message);
          return this.$alert(
            error.response.data[fieldError].join(""),
            Object.keys(error.response.data).join(""),
            {
              confirmButtonText: "OK"
            }
          );
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>