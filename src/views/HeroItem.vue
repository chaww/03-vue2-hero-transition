<template>
  <div>
    <div class="h-item" @click="toList" ref="a">HeroItem</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeroItem extends Vue {
  mounted() {
    let cssRef = ["background-color", "height", "width"];
    let options = { cssReferences: cssRef };
    this.$hero.animatedByElement("a", this.$refs["a"] as HTMLElement, options);
  }
  beforeDestroy() {
    this.$hero.cloneElement("a", this.$refs["a"] as HTMLElement);
  }
  toList() {
    this.$router.push({ path: "/herolist" });
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