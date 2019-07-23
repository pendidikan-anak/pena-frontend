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
          <pena-user-children :children="user.children" />
        </el-tab-pane>
        <el-tab-pane label="Wishlist" name="2">
          <pena-user-wishlist :wishlists="user.wishlists" />
        </el-tab-pane>
        <el-tab-pane label="Daftar Registrasi" name="3">
          <pena-user-registrations :registrations="user.registrations" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Registrations from "@/views/Dashboard/User/Profile/Registrations";
import Wishlist from "@/views/Dashboard/User/Profile/Wishlist";
import Children from "@/views/Dashboard/User/Profile/Children";

export default {
  name: "pena-userProfile",
  components: {
    "pena-user-registrations": Registrations,
    "pena-user-wishlist": Wishlist,
    "pena-user-children": Children
  },
  props: {},
  data() {
    return {
      activeTab: "1",
      user: {
        name: "",
        children: [],
        wishlists: [
          { id: 1, vendor: { school_name: "Sekolah Dasar Tarsisius 1" } },
          { id: 2, vendor: { school_name: "Sekolah Dasar Tarsisius 2" } },
          { id: 3, vendor: { school_name: "Sekolah Dasar Tarsisius 3" } },
          { id: 4, vendor: { school_name: "Sekolah Dasar Tarsisius 4" } },
          { id: 5, vendor: { school_name: "Sekolah Dasar Tarsisius 5" } }
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
    this.getChildren();
    this.getWishlist();
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getChildren() {
      this.axios
        .get("api/users/child/")
        .then(response => {
          if (response.status === 200) {
            this.user.children = response.data;
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
    getWishlist() {
      this.axios
        .get("api/users/wishlist/")
        .then(response => {
          if (response.status === 200) {
            this.user.wishlists = response.data;
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
    getRegistrations() {
      this.axios
        .get("api/registrations/")
        .then(response => {
          if (response.status === 200) {
            // this.user.children = response.data;
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