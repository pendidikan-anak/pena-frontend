<template>
  <div class="user-profile">
    <div class="user-profile__header">
      <div class="left">
        <el-image
          class="el-image"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="fill"
        ></el-image>
      </div>
      <div class="center">
        <h1 class="large-title">{{user.name}}</h1>
      </div>
      <div class="right">
        <el-button size="mini">
          <span class="small-font">Edit Profile</span>
        </el-button>
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
                <div class="left">{{child.name}}</div>
                <div class="right">
                  <i class="el-icon-edit"></i>
                </div>
              </div>
            </div>
            <el-button size="mini">
              <span class="small-font">Tambah Anak</span>
            </el-button>
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
          <div class="do-not-have-data" v-if="user.transactions.length == 0">
            <span>
              <p class="base-font">Anda belum mendaftarkan anak anda ke sekolah manapun.</p>
            </span>
            <span>
              <p class="base-font">Silahkan cari sekolah yang tepat untuk anak anda.</p>
            </span>
            <el-button size="mini">
              <span class="small-font">Tambah Anak</span>
            </el-button>
          </div>
          <div class="have-data" v-else>
            <div v-for="transaction in user.transactions" :key="transaction.id">
              <div class="child base-font">
                <div class="left">{{wishlist.name}}</div>
                <div class="right">
                  <i class="el-icon-delete"></i>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-user-profile",
  components: {},
  props: {},
  data() {
    return {
      activeTab: "1",
      user: {
        name: "",
        children: [
          { id: 1, name: "Banda" },
          { id: 2, name: "Neira" },
          { id: 3, name: "Neira" },
          { id: 4, name: "Neira" },
          { id: 5, name: "Neira" }
        ],
        wishlists: [
          { id: 1, name: "Sekolah Dasar Tarsisius 1" },
          { id: 2, name: "Sekolah Dasar Tarsisius 2" },
          { id: 3, name: "Sekolah Dasar Tarsisius 3" },
          { id: 4, name: "Sekolah Dasar Tarsisius 4" },
          { id: 5, name: "Sekolah Dasar Tarsisius 5" }
        ],
        transactions: []
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