<template>
 
  <div >
    <div id="nav">

      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
    </div>

    <router-view></router-view>
  </div>  
</template>
<script>

  export default{}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav a{
    text-decoration: none;
    color: green;
    padding: 5px;
}

#nav{
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
}
</style>