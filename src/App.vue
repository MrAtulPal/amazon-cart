<template>
  <router-view></router-view>
</template>
<script>
export default {
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  height: 5vh;
  /* padding: 10px; */
  background: blanchedalmond;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  & a {
    text-decoration: none;
    color: green;
    padding: 5px;
  }
}
</style>