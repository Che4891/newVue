<template>
  <div class="wrapper">
    <ul class="menu">
      <li class="menu-item"> 
        <nuxt-link to='/first-lesson'>First-lesson</nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to='/second-lesson'>Second-lesson</nuxt-link>
      </li> 
      <li class="menu-item"> 
        <nuxt-link to='/third-lesson'>Third-lesson</nuxt-link>
      </li>
      <li class="menu-item"> </li>
    </ul>
    <h1>научись зарабатывать от 50л в час</h1>
    <div class="card">
      <img
        src="https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/4/74/756256715374744.jpg"
        alt="photo"
      />
      <div class="info">
        <h2>{{ fullName }}</h2>
        <strong>Бізнес коучинг</strong>
        <ul>
          <li>Учу людей</li>
          <li>Не знаю что такое успех</li>
          <li>Пообещал что-то</li>
        </ul>
      </div>
    </div>
    <p>участников: {{ users.length }}</p>
    <ul>
      <!-- проходимся циклом по моссиву -->
      <li v-for="(user, index) in users" :key="index">
        {{ `${index + 1}` + " " + agenFull(user) }}
      </li>

      <!-- проходимся циклом по елементам обекта -->
      <!-- <li v-for="(key, value, index) in users[0]" :key="index">{{ key + value + index}}</li> -->
    </ul>
    <div class="buttoms">
      <button type="buttom" @click="curennPage--">Prev.</button>
      <button type="buttom" v-for="page in pages" :key='page' @click="curennPage=page">{{page}}</button>
      <button type="buttom" @click="curennPage++">Next.</button>
    </div>
    <p>Page {{curennPage}} from {{pages}}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    firstName: "Anton",
    lastNAme: "Antonovech",
    secondName: "Antonov",
    users: [
      {
        firstName: "Anton",
        lastNAme: "Antonovech",
        secondName: "Antonov",
      },
      {
        firstName: "Nazar",
        lastNAme: "Nazarovich",
        secondName: "Nazarov",
      },
      {
        firstName: "Ivan",
        lastNAme: "Ivanovich",
        secondName: "Ivanov",
      },
    ],
    pages: 3,
    curennPage: 1,
  }),
  // комьпьютед - то что метод только выводиться как переменная без () и в нее нельзя передать агрумент и выведеться только раз если ее даже несколько раз обявить
  computed: {
    fullName() {
      // return this.firstName.toUpperCase() + ' ' + this.secondName.toUpperCase() + ' ' + this.lastNAme.toUpperCase()
      // или рефактор
      return `${
        this.firstName + " " + this.secondName + " " + this.lastNAme
      }`.toUpperCase();
    },
  },
  methods: {
    agenFull(user) {
      return `${user.firstName}  ${user.secondName}  ${user.lastNAme}`;
    },
    louadUser (page) {
        console.log(`Downloud page : ${page}`);
    }
  },

  // для отслеживанния текущего и прошлого состояния функции. Называем как функцию за которой следимм от принимаем параметты пред и следующего 
  watch: {
    //   curennPage(newValue, oldValue) {
    //       console.log('newValue', newValue);
    //       console.log('oldValue', oldValue);
    //   }
       curennPage(page) {
          this.louadUser (page)
      }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
img {
  height: 100px;
  width: auto;
}
.buttoms {
    display: flex;
}
</style>
