<template>
  <div class="editVendorProfile">
    <div class="editVendorProfile__header">
      <div class="editVendorProfile__header__left">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="editVendorProfile__header__right">
        <button class="primary btn-regular">Simpan</button>
      </div>
    </div>
    <div class="editVendorProfile__form">
      <el-input class="schoolName" placeholder="Nama Sekolah" v-model="vendor.school_name"></el-input>
      <el-input type="textarea" :rows="3" placeholder="Alamat Sekolah" v-model="vendor.address"></el-input>
      <div class="editVendorProfile__form__select">
        <el-select v-model="value" placeholder="Provinsi">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="Kota">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="editVendorProfile__form__select">
        <el-select v-model="value" placeholder="Kecamatan">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="Kelurahan">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <el-input placeholder="Nama Kepala Sekolah" v-model="vendor.headmaster"></el-input>
      <el-input placeholder="Nama Yayasan" v-model="vendor.foundation"></el-input>
      <el-input placeholder="Website" v-model="vendor.website"></el-input>
      <el-input placeholder="Akreditas" v-model="vendor.accreditation"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "pena-editVendorProfile",
  components: {},
  props: {},
  data() {
    return {
      imageUrl: "",
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "",
      vendor: {
        school_name: null,
        address: null,
        headmaster: null,
        foundation: null,
        website: null,
        accreditation: null
      }
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error("Avatar picture must be JPG format!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("Avatar picture size can not exceed 2MB!");
      // }
      // return isJPG && isLt2M;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>