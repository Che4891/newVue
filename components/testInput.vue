<!-- Please remove this file from your project -->
<template>
  <div class="wrapper">
    <!-- <h1> {{text}} </h1>
    <c>+</c>
    <h2>Mama</h2>
    <span>=</span>
    <img src="https://klike.net/uploads/posts/2020-05/1590564848_1.jpg" alt="hard"> -->
    {{email}}
    <label
      >Email
      <input type="email" 
      :value="email"
      @input="emailInput($event.target.value)" />
    </label>


{{password}}
    <label
      >Password
      <input type="password" 
      :value="password" 
      @input="passlInput($event.target.value)"/>
    </label>
  </div>
</template>
<script>
export default {
  data: () => ({
    text: "Єва",
    email: "anton@ukr.net",
    password: " 123456789",
  }),
  methods: {
    emailInput(value) {
      this.email = value
    },
    passlInput(value) {
      this.password = value
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
h1,
h2,
span {
  color: purple;
  font-size: 80px;
  margin: 0;
}
img {
  width: 250px;
  height: 200px;
}
</style>
