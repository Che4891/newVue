<template>
  <form class="form" @submit.prevent="submitForm">
    <label for="login"
      >Login
      <input
        id="login"
        type="text"
        class="form__element"
        :class="$v.form.login.$error ? 'is-error' : '' "
        v-model="form.login"
      />
    </label>
    <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="error-massage">
      Fild is required
    </p>
    <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="error-massage">
      Must be more than 5 characters
    </p>

    <label for="email"
      >Email
      <input
        id="email"
        type="email"
        class="form__element"
        v-model="form.email"
        :class="$v.form.email.$error ? 'is-error' : '' "
      />
    </label>
    <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="error-massage">
      Fild is required
    </p>
    <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="error-massage">
      Must be email
    </p>

    <label for="password"
      >Password
      <input
        id="password"
        type="password"
        class="form__element"
        v-model="form.password"
        :class="$v.form.password.$error ? 'is-error' : '' "
      />
    </label>
    <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="error-massage">
      Fild is required
    </p>
    <p v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="error-massage">
      Must be more than 8 characters
    </p>

    <label for="country"
      >Country
      <select id="country" class="form__element" v-model="form.country">
        <option
          v-for="(country, index) in countrys"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </label>

    <label for="activity"
      >Activity
      <select
        id="activity"
        class="form__element"
        v-model="form.active"
        multiple
      >
        <option
          v-for="(activity, index) in activitys"
          :key="index"
          :value="activity.value"
        >
          {{ activity.label }}
        </option>
      </select>
    </label>

    <label for="check"
      >News
      <input
        id="check"
        value="1"
        type="checkbox"
        class="form__checkbox"
        v-model="form.checkActive"
      />
    </label>
    <label for="check1"
      >News1
      <input
        id="check1"
        value="2"
        type="checkbox"
        class="form__checkbox"
        v-model="form.checkActive"
      />
    </label>

    <div class="form__wrap">
      <label for="radio1"
        >Man
        <input
          id="radio1"
          type="radio"
          checked
          name="radioButtonForm"
          value="Man"
          v-model="form.radioActive"
        />
      </label>
      <label for="radio2"
        >Woman
        <input
          id="radio2"
          type="radio"
          name="radioButtonForm"
          value="Woman"
          v-model="form.radioActive"
        />
      </label>
    </div>
    <button>Send</button>
  </form>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "forms",
  data: () => ({
    form: {
      login: "",
      email: "",
      password: "",
      country: "UKRAINE",
      active: ["IT"],
      checkActive: [],
      radioActive: "",
    },
    countrys: [
      {
        label: "Ukraine",
        value: "UKRAINE",
      },
      {
        label: "Russia",
        value: "RUSSIA",
      },
      {
        label: "Usa",
        value: "USA",
      },
    ],
    activitys: [
      {
        label: "Tehnologe",
        value: "IT",
      },
      {
        label: "Languages",
        value: "LANG",
      },
      {
        label: "Economics",
        value: "ECONOM",
      },
    ],
  }),
  validations: {
    form: {
      login: {
        required,
        minLength: minLength(5),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    submitForm () {
      this.$v.form.$touch()
    }
  }
};
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
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid black;
}
.is-error{
  border-color: red;
  margin-bottom: 0;
}
.error-massage {
  color: red;
  margin-top: 0px;
  font-size: 12px;
}

.form__checkbox,
.form__wrap {
  margin-bottom: 20px;
}
</style>
