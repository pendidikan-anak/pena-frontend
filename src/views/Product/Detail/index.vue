<template>
  <div class="detail-vendor">
    <el-container>
      <el-aside style="width: 35%">
        <div class="detail-vendor__title">
          <h1 class="xlarge-title">Sekolah Tarsisius 1</h1>
        </div>
        <div class="detail-vendor__rate">
          <p>Rating : 4.0 / 5 (300)</p>
          <el-rate value="4" disabled></el-rate>
        </div>
        <div class="detail-vendor__address">
          <i class="el-icon-location-outline"></i>
          <p
            class="small-font"
          >Jl. Batusari Raya No.12, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530</p>
        </div>
        <div class="detail-vendor__form">
          <p class="base-font color-primary">Biaya formulir</p>
          <h1 class="large-title">Rp 120.000</h1>
        </div>
        <div class="detail-vendor__button">
          <router-link tag="a" :to="{name: 'registrationForm'}">
            <el-button class="el-button btn-large">Registrasi</el-button>
            <!-- Registrasi -->
          </router-link>
          <el-button class="secondary btn-large" id="wishlist">
            <span>+ Tambah Wishlist</span>
          </el-button>
        </div>
      </el-aside>
      <div class="detail-vendor__right">
        <div class="detail-vendor__gallery">
          <div class="left">
            <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt />
          </div>
          <div class="right">
            <img src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg" />
            <img src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" />
          </div>
        </div>
        <div class="detail-vendor__description">
          <h1 class="medium-title">Deskripsi</h1>
          <p>Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product with a stellar reputation. In addition to all the good press that Sony has, Sony is known for making the best ‘small’ laptops. This means that they pack a ton of features into a much smaller packet and do it better than most laptop companies around.</p>
          <br />
          <br />
          <br />
          <p>If you are in the market for a laptop it makes perfect sense to look around, compare your options and decide on the laptop that will ultimately work best for you. There are many companies out there that offer similar products; some are superior, some inferior, some at a premium price, and still others at bargain prices. The laptop industry isn’t always an industry where you get what you pay for.</p>
          <br />
          <br />
          <p>
            When choosing a laptop, it is never a good idea to buy what others think you should buy, buy the laptop that has the features that you need at a price that you can afford.
            Don’t buy a laptop that has bells and whistles you will never utilize. Perhaps, that is what I like most about Sony and the products they offer.
          </p>
        </div>
        <div style="height: unset">
          <h1 class="medium-title">Rekomendasi sekolah lainnya</h1>
          <pena-card />
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "pena-vendor-detail",
  components: {
    "pena-card": Card
  },
  props: {},
  data() {
    return {};
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
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>