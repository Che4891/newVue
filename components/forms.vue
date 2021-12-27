<template>
  <div class="form">
    <label for="login">Login
      <input id="login" type="text" class="form__element" />
    </label>

    <label for="email">Email
      <input id="email" type="email" class="form__element" />
    </label>

    <label for="password">Password
      <input id="password" type="password" class="form__element" />
    </label>

    <label for="country">Country
      <select id="country" class="form__element">
        <option>Ukraine</option>
      </select>
    </label>

    <label for="activity">Activity
      <select id="activity" class="form__element">
        <option>IT</option>
      </select>
    </label>

    <label for="check">News
      <input id="check" type="checkbox" class="form__checkbox"/>
    </label>

    <div class="form__wrap">
      <label for="radio1">Man
        <input id="radio1" type="radio" />
      </label>
      <label for="radio2">Woman
        <input id="radio2" type="radio" />
      </label>
    </div>
    <button>
        Send
    </button>
  </div>
</template>
<script>
export default {
    name:'forms',
    date: () => ({

    }),
}
</script>
<style scoped>
   .form {
     display: flex;
     flex-direction: column;
     width: 300px;
     margin: 0 auto;
   }
   .form__element {
     width: 100%;
     margin-bottom: 20px;
   }
   .form__checkbox, .form__wrap {
     margin-bottom: 20px;
   }
</style>
