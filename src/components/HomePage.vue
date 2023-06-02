<template>
    <div id="products">
        <div id="product-card" v-for="item in allproducts" :key="item.id">
            <img :src=item.image>
            <div id="product-info">
                <h1>{{ item.title }}</h1>
                <h3>{{ item.category }}</h3>
                <p>${{ item.price }}</p>
                <p>{{ item.description.slice(0, 50) }}</p>
            </div>
            <p id="cart" title="Add To Cart" @click="addToCart(item)">🚛</p>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: mapGetters(['allproducts']),
    mounted(){
        this.getProducts()
    }
    ,
    methods: {
        // async products() {
        //     const res = await fetch('http://localhost:3000/products')
        //     const productlist = await res.json()
        //     this.productsarray = productlist

        // },

        ...mapActions(['getProducts','updateCartItem']),
        addToCart(item){
            this.updateCartItem(item)
        }

    }
//     mounted() {
//         this.products()
//     }
}

</script>

<style>
#product-card {
    display: flex;
    width: 30vw;
    /* border: 0.5px solid gray; */
    background-color: azure;
    padding: 20px;
    justify-content: center;
    height: 50vh;
    align-items: center;
    font-size: 10px;
    margin: 10px;
    border-radius: 5px;
}

#product-card img {
    width: 50%;
    height: 50%;
    margin-right: 15px;
}

#products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top:5vh ;
}

#products #cart {
    font-size: 20px;
    cursor: pointer;
}
</style>