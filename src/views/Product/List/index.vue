<template>
  <div class="list">
    <div class="list__search">
      <div class="list__search__input">
        <el-input placeholder="Cari sekolah di sini" v-model="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="list__search__options">
        <el-popover placement="bottom" trigger="click">
          <div>Terbaru</div>
          <div>Alphabet</div>
          <div slot="reference" class="sort">Urutkan</div>
          <!-- <el-button slot="reference">Click to activate</el-button> -->
        </el-popover>
        <el-popover placement="bottom" trigger="click">
          <div class="wrap" style="margin-bottom: 16px">
            <p class="small-font">Jenjang Pendidikan</p>
            <div class="description">
              <el-select v-model="filter.jenjangPendidikan" placeholder="Jenjang Pendidikan">
                <el-option
                  v-for="item in selectJenjangPendidikan"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="wrap" style="margin-bottom: 16px">
            <p class="small-font">Akreditasi</p>
            <div class="description">
              <el-select v-model="filter.akreditasi" placeholder="Akreditasi">
                <el-option
                  v-for="item in selectAkreditasi"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="wrap" style="margin-bottom: 16px">
            <p class="small-font">Lokasi</p>
            <div class="description" style="display: grid;">
              <el-select v-model="filter.kota" placeholder="Kota" style="margin-bottom: 8px">
                <el-option
                  v-for="item in selectKota"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="filter.kecamatan"
                placeholder="Kecamatan"
                style="margin-bottom: 8px"
              >
                <el-option
                  v-for="item in selectKecamatan"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="filter.kelurahan"
                placeholder="Kelurahan"
                style="margin-bottom: 8px"
              >
                <el-option
                  v-for="item in selectKelurahan"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <button class="btn-block primary" v-on:click="useFilter = true">Filter</button>
          <div slot="reference" class="filter">Filter</div>
        </el-popover>
      </div>
      <div
        class="list__search__showFilter"
        v-show="Object.keys(filter).filter((key) => filter[key]).length && useFilter"
      >
      Filter: 
        <el-tag
          v-for="tag in Object.keys(filter).filter((key) => filter[key])"
          :key="tag"
          closable
          @close="handleClose(tag)"
          type="success"
        >{{tag}}: {{filter[tag]}}</el-tag>
      </div>
      <div class="list__search__vendor" v-for="i in 3" :key="i">
        <router-link tag="a" :to="{name: 'detailVendor'}" v-for="o in 2" :key="o">
          <pena-big-card
            img="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            title="Sekolah Tarsisius 1"
            address="Jl. Batusari Raya No.12, RT.1/RW.9, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530"
            rate="4.0"
            countRate="300"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BigCard from "@/components/BigCard";

export default {
  name: "pena-vendor-list",
  components: {
    "pena-big-card": BigCard
  },
  props: {},
  data() {
    return {
      search: "",
      useFilter: false,
      filter: {
        akreditasi: "",
        jejangPendidikan: "",
        kota: "",
        kecamatan: "",
        kelurahan: ""
      },
      selectAkreditasi: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        },
        {
          value: "Belum Terakreditasi",
          label: "Belum Terakreditasi"
        }
      ],
      selectJenjangPendidikan: [
        {
          value: "PG",
          label: "Playgroup"
        },
        {
          value: "TK",
          label: "Taman Kanak Kanak"
        },
        {
          value: "SD",
          label: "Sekolah Dasar"
        },
        {
          value: "SMP",
          label: "Sekolah Menegah Pertama"
        },
        {
          value: "SMA",
          label: "Sekolah Menegah Atas"
        }
      ],
      selectKota: [
        {
          value: "JKT-BRT",
          label: "Jakarta Barat"
        }
      ],
      selectKecamatan: [
        {
          value: "PLM",
          label: "Palmerah"
        }
      ],
      selectKelurahan: [
        {
          value: "KMGSN",
          label: "Kemanggisan"
        }
      ]
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
    handleClose(tag) {
      this.filter[tag] = "";
    },
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>