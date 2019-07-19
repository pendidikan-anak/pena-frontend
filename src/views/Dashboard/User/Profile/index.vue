<template>
  <div class="user-profile">
    <div class="user-profile__header">
      <div class="left">
        <el-image
          class="el-image"
          src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80%20282w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80%20564w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80%20582w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80%20882w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1164&q=80%201164w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1182&q=80%201182w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80%201482w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1764&q=80%201764w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80%201782w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2082&q=80%202082w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2364&q=80%202364w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2382&q=80%202382w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2682&q=80%202682w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2964&q=80%202964w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80%202982w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3282&q=80%203282w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3564&q=80%203564w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3582&q=80%203582w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w,%20https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3780&q=80%203780w"
          fit="fill"
        ></el-image>
      </div>
      <div class="center">
        <h1 class="large-title">{{user.name}}</h1>
      </div>
      <div class="right">
        <router-link tag="el-button" :to="{name: 'verifyData'}">
          <!-- <el-button size="mini"> -->
          <span class="small-font">Lengkapi Data</span>
          <!-- </el-button> -->
        </router-link>
      </div>
    </div>
    <div class="user-profile__content">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Anak" name="1">
          <div class="do-not-have-data" v-if="user.children.length == 0">
            <span>
              <p class="base-font">Anda belum menambahkan anak.</p>
            </span>
            <span>
              <p class="base-font">Silahkan tambahkan anak.</p>
            </span>
            <el-button size="mini">
              <span class="small-font">Tambah Anak</span>
            </el-button>
          </div>
          <div class="have-data" v-else>
            <div v-for="child in user.children" :key="child.id">
              <div class="child base-font">
                <div class="left">{{child.first_name}}</div>
                <div class="right">
                  <i class="el-icon-edit"></i>
                </div>
              </div>
            </div>
            <router-link :to="{name: 'child'}">
              <el-button size="mini">
                <span class="small-font">Tambah Anak</span>
              </el-button>
            </router-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Wishlist" name="2">
          <div class="do-not-have-data" v-if="user.wishlists.length == 0">
            <span>
              <p class="base-font">Anda belum menambahkan wishlist.</p>
            </span>
            <span>
              <p class="base-font">Silahkan tambahkan wishlist.</p>
            </span>
            <el-button size="mini">
              <span class="small-font">Tambah Anak</span>
            </el-button>
          </div>
          <div class="have-data" v-else>
            <div v-for="wishlist in user.wishlists" :key="wishlist.id">
              <div class="child base-font">
                <div class="left">{{wishlist.name}}</div>
                <div class="right">
                  <i class="el-icon-delete"></i>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Daftar Registrasi" name="3">
          <pena-daftarRegistrasi :registrations=user.registrations />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import DaftarRegistrasi from "@/views/Dashboard/User/Profile/DaftarRegistrasi"

export default {
  name: "pena-userProfile",
  components: {
    "pena-daftarRegistrasi": DaftarRegistrasi,
  },
  props: {},
  data() {
    return {
      activeTab: "1",
      user: {
        name: "",
        children: [],
        wishlists: [
          { id: 1, name: "Sekolah Dasar Tarsisius 1" },
          { id: 2, name: "Sekolah Dasar Tarsisius 2" },
          { id: 3, name: "Sekolah Dasar Tarsisius 3" },
          { id: 4, name: "Sekolah Dasar Tarsisius 4" },
          { id: 5, name: "Sekolah Dasar Tarsisius 5" }
        ],
        registrations: [
          {
            childName: "Banda",
            schoolName: "SD Tarsi",
            form: 120000,
            paymentStatus: "wfp",
            registrationStatus: "wfis"
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {
    if (localStorage.name) {
      this.user.name = localStorage.name;
    }
  },
  mounted() {
    this.getChild()
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getChild() {
      this.axios
          .get("api/users/child/")
          .then(response => {
            if (response.status === 200) {
              this.user.children = response.data
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
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>