<template>
  <div id="app">
    <div class="dummy-for-app"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/herolist">HeroList</router-link> |
      <router-link to="/heroitem">HeroItem</router-link> |
      <router-link to="/product-list">ProductList</router-link> |
      <router-link to="/product-view">ProductView</router-link>
    </div>
    <transition name="fade">
      <router-view class="router-view" />
    </transition>
    <div id="hero" ref="hero"></div>
  </div>
</template>
<style lang="scss">
@import "./assets/style/gobal.css";
.dummy-for-app{
  height: 1px;
}
.router-view{
  position: absolute;
  height: 100%;
  width: 100%;
}
#app{
  position: relative;
}
#hero{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

#nav {
  padding: 30px;
  position: fixed;
  bottom: 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
