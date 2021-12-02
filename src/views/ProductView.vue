<template>
  <div>
    <div class="h-item">
      <img
        @click="toList"
        ref="image-product"
        src="https://s3-us-west-1.amazonaws.com/www.jguffey.com/extra/nike19.png"
        alt=""
        height="100%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProductView extends Vue {
  mounted() {
    let cssRef = ["height", "width"];
    let options = { cssReferences: cssRef };
    this.$hero.animatedByElement(
      "imageProduct",
      this.$refs["image-product"] as HTMLElement,
      options
    );
  }
  beforeDestroy() {
    this.$hero.cloneElement(
      "imageProduct",
      this.$refs["image-product"] as HTMLElement
    );
  }
  toList() {
    this.$router.push({ path: "/product-list" });
  }
}
</script>

<style scoped>
.h-item {
  background-color: rgb(23, 177, 197);
  margin: 300px;
  height: 200px;
  width: 200px;
}
</style>