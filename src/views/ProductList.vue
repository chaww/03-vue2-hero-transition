<template>
  <div>
    <div class="list">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="card"
        @click="toView(index)"
      >
        <img
          ref="image-product"
          src="https://s3-us-west-1.amazonaws.com/www.jguffey.com/extra/nike19.png"
          alt=""
          height="100%"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProductList extends Vue {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  heroImageIndex = -1;

  mounted() {
    const refsImageProduct = this.$refs["image-product"] as HTMLElement[];
    let cssRef = ["height", "width"];
    let options = { cssReferences: cssRef };
    this.$hero.animatedByElement("imageProduct", refsImageProduct[0], options);
  }

  toView(index: number) {
    this.heroImageIndex = index;
    this.$router.push({ path: "/product-view" });
  }

  beforeDestroy() {
    if (this.heroImageIndex > -1) {
      const refsImageProduct = this.$refs["image-product"] as HTMLElement[];
      this.$hero.cloneElement(
        "imageProduct",
        refsImageProduct[this.heroImageIndex]
      );
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 20px);
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: calc(33.3% - 20px);
  border-radius: 14px;
  border: 1px solid rgba(16 18 27 / 40%);
  padding: 20px;
  cursor: pointer;
}
.card {
  margin-left: 20px;
  margin-top: 20px;
}
</style>