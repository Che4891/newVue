<template>
    <div class="wrapper">
        <h2>
            Tabels
        </h2>
        <div class="search-input">
            <input type="text">
            <button>Search</button>
        </div>
        <ul>
            <li class="product-list" v-for="(product, index) in products" :key="index" >
                <productCard :product='product'
                @addToBasket='addToBasket(index)'/>
            </li>
        </ul>
    </div>
</template>
<style scoped >
    .wrapper ul {
       display: flex;
       justify-content: space-around;
    }
    .search-input {
        display: flex;
        
    }
    .search-input input {
            padding: 3px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

</style>
<script>
import productCard from "~/components/product-list/product-card/productCard.vue"
export default {
    components: {
    productCard
  },
    data: () => ({
    products: [
        {
          title: 'Tabel №1',
          description: 'product description',
          productImg: 'https://welovemebel.com.ua/upload/resize_cache/iblock/b21/320_196_2/b21d2d276eb76637458d368c94b4e8b9.jpg',
          price: 20000,
          balance: 35
        },
         {
          title: 'Tabel №2',
          description: 'product description',
          productImg: 'https://mebelwork.com.ua/image/cache/catalog/product/byudzhet/ofisnyye-stoly/byu103/ofisnyy-stol-byu103-yablonya-lokarno-800x600.jpg',
          price: 30000,
          balance: 25
        },
         {
          title: 'Tabel №3',
          description: 'product description',
          productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0e8Xqhp1qq30z39a1yhjt3v93pSC5Q_OxvBuB_yjj68kzHZbWRQV9rNyiio7NKs_JhTk&usqp=CAU',
          price: 40000,
          balance: 15
        }
    ]
  }),
  methods: {
      addToBasket (index) {
          console.log(index);
      }
  }
}
</script>