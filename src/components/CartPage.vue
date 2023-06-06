<template>
  <div>
    <div id="products">
      <div id="product-card" v-for="cartItem in getCartItem" :key="cartItem.id">
        <img :src="cartItem.image" />
        <div id="product-info">
          <h1>{{ cartItem.title }}</h1>
          <h3>{{ cartItem.category }}</h3>
          <p>${{ cartItem.price }}</p>
          <p>{{ cartItem.description }}</p>
        </div>
        <button title="Remove From Cart" @click="removeItem(cartItem.id)">Remove From Cart</button>
        <button @click="saveforlater(cartItem,cartItem.id)">save for later</button>
      </div>
      <p>{{ getCartItem.length===0?"No product to show":"" }}</p>
      <p> Total-Price : ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartItem","getTotalPrice"]),
    cartItems: {
      get() {
        return this.getCartItem;
      },
      set(value) {
        this.updateCartItem(value);
      }
    },
    totalPrice() {
      return this.getTotalPrice.toFixed(2)
    }
  },
  mounted(){
    this.getAllCartItem()
  },
  methods: {
    ...mapActions(["updateCartItem", "removeCartItem", "updateLater","getAllCartItem"]),
    removeItem(itemId) {
      this.removeCartItem(itemId);
    },
    saveforlater(item, itemId) {
      this.removeCartItem(itemId);
      this.updateLater(item);
    },
    
  },
};
</script>
<style lang="scss">
button {
  margin-top: 5vh;
}
</style>