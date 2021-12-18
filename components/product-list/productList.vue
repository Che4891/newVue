<template>
    <div class="wrapper">
        <h2>
            Tabels
        </h2>
        <ul>
            <li class="product-list" v-for="(product, index) in products" :key="index" >
                <productCard :product='product'/>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .wrapper ul {
       display: flex;
       justify-content: space-around;
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
          productImg: ' https://lh3.googleusercontent.com/proxy/kfLzIgWcLs2KR88LB3jUNXh0uRJEtVAl-G60RjCmVGovnu4qKtrOfB5WzV8_2cgyDEelHImfKlYrON2IuqdwZyDrleBmTHBD3l2zr0OJ1Wz8yXIu4erZmHdXNpQkW8TIVNO-M3JYx_D0IRYDXv30EolfnHnyMM_Gz5CvhjKDwaiaHkOMi5a5wg',
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
}
</script>