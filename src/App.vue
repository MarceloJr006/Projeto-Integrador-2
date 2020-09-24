<template>
  <div id="app">
    <Header/>

    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/noticia">Noticias</router-link>
      <router-link to="/eventos">Eventos</router-link>
    </nav>

    <main>
      <transition name="scale" mode="out-in">
        <router-view/>
      </transition>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "./assets/scss/base.scss";

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0s ease, transform 0.5s ease;
  transform-origin: top center;
}

.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0) translateY(-200px);
}
</style>
