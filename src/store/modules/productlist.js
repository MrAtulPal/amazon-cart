const state ={
    productsarray:[],
    cart:[],
    // saveforlater:[]
}

const getters={
    allproducts:(state)=> state.productsarray,
    getCartItem:(state)=>state.cart,
    // getlater:(state)=>state.saveforlater
}

const actions={
    async getProducts({commit}){
        const res = await fetch('http://localhost:3000/products')
        const productdata = await res.json()
        commit('setProducts',productdata)
    },
    updateCartItem({commit},item){
         commit('setCartItem',item)
    },
    removeCartItem({ commit }, itemId) {
      commit('removeItem', itemId);
    },
    // updateLater({commit},item){
    //     commit()
    // }
}

const mutations={
    setProducts:(state,product)=>(state.productsarray=product),
    setCartItem:(state,item)=>(state.cart.push(item)),
    removeItem(state, itemId) {
        state.cart = state.cart.filter(item => item.id !== itemId);
      }
}

export default{
    state,
    getters,
    actions,
    mutations
}