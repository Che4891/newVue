<template>
  <div class="wrapper">
    <div class="wrapper__wrap">
      <h2>Info about me</h2>
      <div
        class="wrapper__form"
        v-for="(fieldValue, fieldLabel, index) in formFilds"
        :key="index"
      >
        <label :for="fieldLabel"
          >{{ fieldLabel }}
          <input
            :id="fieldLabel"
            v-model="formFilds[fieldLabel]"
            class="wrapper__input"
          />
        </label>
      </div>
      <button type="submit">Save</button>

      <div class="wrapper__overlay">
        <label :for="addInfo"
          >Add new information
          <input
            :id="addInfo"
            class="wrapper__input"
            v-model="addInfo"
          />
        </label>
        <button class="wrapper__button" @click="addInformetion">
          add
        </button>
      </div>
    </div>
    <div class="wrapper__wrap">
      <h2>Show Info</h2>
       <p
        class="wrapper__text"
        v-for="(fieldValue, fieldLabel, index) in formFilds"
        :key="index"
      >
      {{`${fieldLabel}: ${fieldValue}`}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    formFilds: {
      firstName: "",
      secondName: "",
      lastName: "",
    },
  addInfo: '',
  }),
  methods: {
    addInformetion () {
      this.$set(this.formFilds, this.addInfo,  '')
    }
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 40%;
}
.wrapper__form label {
    display: block;
  margin-bottom: 10px;
  color:#686868;
  font-size: 12px;
}
.wrapper__input {
  display: block;
  line-height: 24px;
  border-radius: 5px;
  border: 1px solid #686868;;
}
.wrapper__wrap button {
    color: blanchedalmond;
    background-color: brown;
    border: none;
    border-radius: 5px;
    line-height: 24px;
    min-width: 100px;
    cursor: pointer;
}
.wrapper__overlay {
  margin-top: 20px;
}
.wrapper__button {
  color: green;
  margin-top: 10px;
}
</style>
