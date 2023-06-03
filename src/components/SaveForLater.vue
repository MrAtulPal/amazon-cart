<template>
  <div>
    <h1>{{ getlater.length===0?"":"Save For Later" }}</h1>
    <div id="products">
      <div id="product-card" v-for="cartItem in getlater" :key="cartItem.title">
        <img :src="cartItem.image" />
        <div id="product-info">
          <h1>{{ cartItem.title }}</h1>
          <h3>{{ cartItem.category }}</h3>
          <p>${{ cartItem.price }}</p>
          <p>{{ cartItem.description }}</p>
        </div>
      <p id="cart" title="Add To Cart" @click="addToCart(cartItem)">🚛</p>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  computed: mapGetters(["getlater"]),
  methods: {
        ...mapActions(['updateCartItem','removeLater']),
        addToCart(cartItem){
            this.removeLater(cartItem)
            this.updateCartItem(cartItem)
        }

    }
};
</script>