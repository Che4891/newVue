<template>
  <div
    name="auth-modal"
    class="auth-modal"
    height="350px"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? "Войти" : "Зарегистрироваться" }}</h3>
      <label>
        Email
        <input
          type="text"
          class="form-control"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model="form.password"
        />
      </label>
      <div class="actions">
        <a href="#" @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'">
          {{ isSignInForm ? "Регистрация" : "Вход" }}
        </a>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-dark">ok</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "auth-modal",
  data() {
    return {
      mode: "signIn",
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  computed: {
    isSignInForm() {
      return this.mode === "signIn";
    },
  },
  //   mounted() {
  //     this.$modal.show("auth-modal");
  //   },
  methods: {
    // changeUserState() {
    //   if (this.auth) {
    //     localStorage.removeItem("auth");
    //     this.$router.push({ name: "main" });
    //   } else {
    //     localStorage.setItem("auth", true);
    //     this.auth = true;
    //   }
    // },
    close() {
      this.$emit("close");
    },
    // formSubmit() {
    //   if (this.isSignInForm) {
    //     this.signIn();
    //   } else {
    //     this.signUp();
    //   }
    // },
    // signIn() {
    //   this.$load(async () => {
    //     const data = (
    //       await this.$api.auth.signIn({
    //         email: this.form.email,
    //         password: this.form.password,
    //       })
    //     ).data;
    //     localStorage.setItem("user", JSON.stringify(data));
    //     this.$store.dispatch("user/setUser", data);
    //     this.$emit("close");
    //   });
    // },
    // signUp() {
    //   this.$load(async () => {
    //     const data = (
    //       await this.$api.auth.signUp({
    //         email: this.form.email,
    //         password: this.form.password,
    //       })
    //     ).data;
    //     localStorage.setItem("user", JSON.stringify(data));
    //     this.$store.dispatch("user/setUser", data);
    //     this.$emit("close");
    //   });
    // },
  },
};
</script>

<style scoped>
.auth-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 40px;
  background: blanchedalmond;
  border: 1px solid #ccc;
  border-radius: 12px;
}
form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
h3 {
  margin-bottom: 30px;
}
label {
  width: 100%;
  margin-bottom: 20px;
}
.actions {
  margin-top: auto;
  display: flex;
  align-items: baseline;
}
a {
  color: #eb5804;
}
button {
  width: 130px;
  margin-left: 10px;
}
button:first-of-type {
  margin-left: auto;
}
</style>
