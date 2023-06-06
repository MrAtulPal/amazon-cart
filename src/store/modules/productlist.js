const state = {
  productsarray: [],
  cart: [],
  saveforlater: [],
};

const getters = {
  allproducts: (state) => state.productsarray,
  getCartItem: (state) => state.cart,
  getlater: (state) => state.saveforlater,

  getTotalPrice: state => {
    return state.cart.reduce((total, item) => total + item.price, 0)
  }
};

const actions = {
  async getProducts({ commit }) {
    const res = await fetch("http://localhost:3000/products");
    const productdata = await res.json();
    commit("setProducts", productdata);
  },

  //cart operation
  async getAllCartItem({commit}){
    const res = await fetch('http://localhost:3000/cart');
    const cartPro = await res.json();
    commit('setAllCartIten',cartPro)
  },

  async updateCartItem({ commit }, product) {
    const response = await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const cartItem = await response.json()
    commit('setCartItem', cartItem)
  },
  async removeCartItem({ commit }, productId) {
    await fetch(`http://localhost:3000/cart/${productId}`, {
      method: 'DELETE'
    })
    commit('removeFromCart', productId)
  },

// save for later operation
  async getAllSaveItem({commit}){
    const res = await fetch('http://localhost:3000/saveForLater')
    const productData=await res.json()
    commit('setAllSaveItem',productData)
  },

  async updateLater({ commit }, item) {
    const res = await fetch('http://localhost:3000/saveForLater',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(item)
    })
    const saveProduct = await res.json()
    commit("setLaterItem", saveProduct);
  },
  async removeLater({ commit }, item) {
    await fetch(`http://localhost:3000/saveForLater/${item}`,{
      method:'DELETE'
    })
    commit("RemoveLater", item);
  },
};

const mutations = {
  setProducts: (state, product) => (state.productsarray = product),
  setAllCartIten:(state,Product)=>(state.cart = Product),
  setCartItem: (state, item) => {state.cart.push(item);},
  removeFromCart(state, itemId) {
    state.cart = state.cart.filter((item) => item.id !== itemId);
  },

  setAllSaveItem:(state,product)=>(state.saveforlater = product),
  setLaterItem: (state, item) => state.saveforlater.push(item),

  RemoveLater(state, itemId) {
    state.saveforlater = state.saveforlater.filter((item) => item.id !== itemId);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
