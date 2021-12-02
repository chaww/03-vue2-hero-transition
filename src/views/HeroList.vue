<template>
  <div>
    <div class="h-list" @click="toItem('a1')" ref="a1">Hero 1</div>
    <div class="h-list" @click="toItem('a2')" ref="a2">Hero 2</div>
    <div class="h-list" @click="toItem('a3')" ref="a3">Hero 3</div>
    <div class="h-list" @click="toItem('a4')" ref="a4">Hero 4</div>
    <div class="h-list" @click="toItem('a5')" ref="a5">Hero 5</div>
    <div class="h-list" @click="toItem('a6')" ref="a6">Hero 6</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route, NavigationGuardNext } from "vue-router";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);
@Component
export default class HeroList extends Vue {

  heroKey!: string;

  toItem(name: string) {
    this.heroKey = name;
    // this.heroRefs.push(ev);
    this.$router.push({ path: "/heroitem" });
  }

  // Hooks
  mounted() {
    let cssRef = ["background-color", "height", "width"];
    let options = { cssReferences: cssRef };
    this.$hero.animatedByElement("a", this.$refs["a3"] as HTMLElement, options);
  }

  beforeDestroy() {
    if (this.heroKey) this.$hero.cloneElement('a', this.$refs[this.heroKey] as HTMLElement);
  }
  // beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
  //   console.log(to, from, next);
  //   next();
  // }
  // ./Hooks
  
}
</script>

<style scoped>
.h-list {
  background-color: rgb(23, 197, 145);
  margin: 100px;
  height: 100px;
  width: 100px;
}
</style>