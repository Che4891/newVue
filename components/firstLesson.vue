<!-- Please remove this file from your project -->
<template>
  <div class="wrapper">
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
    <div class="new-wrap">
      <button @click="awayValue">-</button>
      <input type="number"
      :min="minValue"
      :max="maxValue"
      :value="inputValue">
       <button @click="addValue">+</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'firstLesson',
  data: () => ({
    email: "anton@ukr.net",
    password: " 123456789",
    minValue: 0,
    maxValue: 10,
    inputValue: 1
  }),
  methods: {
    emailInput(value) {
      this.email = value
    },
    passlInput(value) {
      this.password = value
    },
    awayValue() {
      if (this.inputValue > this.minValue) {
        this.inputValue--
      }
    },
      addValue() {
    if (this.inputValue < this.maxValue) {
      this.inputValue++
    }
  }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 300px;
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
.new-wrap {
  margin-bottom: 90px;
}
</style>
