<template>
    <div class="card">
        <img :src='product.productImg' alt="photo" class="card__img">
        <div class="card__body">
            <h5 class="card__title">
                {{product.title}}
            </h5>
            <div class="card__description">
                {{product.description}}
            </div>
            <div class="card__price">
                {{product.price}}
            </div>
            <div class="card__balance">
                stock balance: {{product.balance}}
            </div>
            <button class="card__button">
                buy
            </button>
        </div>
    </div>
</template>
<style scoped>
    .card {
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
    }
    .card__img {
        display: block;
        width: 90%;
        height: 150px;
    }
    .card__button {
        width: 90%;
        color: blanchedalmond;
        background-color: brown;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin-top: 10px;
    }
</style>
<script>
export default {
  name: "produktCard",
  props: {
    product: {
      type: Object,
      default: () => ({

      }),
    },
  },
  data: () => ({


  }),
};
</script>
