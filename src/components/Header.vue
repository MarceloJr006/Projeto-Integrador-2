<template>
  <header>
    <router-link to="/">
      <img src="../assets/img/Logo-IGN.png" alt="Logo-IGN">
      <h1>IGN Brasil</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

header {
  padding: 0px;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  text-decoration: none;
  margin: -10px;
}
img {
  height: 2em;
}

h1 {
  font-size: 1.25em;
  margin-left: 0.25em;
}
</style>
