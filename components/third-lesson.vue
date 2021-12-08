
 <!-- v-if lesson -->

<template>
    <div class="wrapper">
        <div class="wrapper-img">
            <img :class="isClasses" v-if="isShow" src="http://batona.net/uploads/posts/2014-08/1408287363_00.jpg" alt="">
            <p v-else>the cat will be back soon :)</p>
        </div>
        <button @click="isShow=!isShow">
            <span v-if="isShow">hidden</span>
            <span v-else>show</span>
        </button>
        <button @click="isClasses.sepia =!isClasses.sepia"
        :class="isClasses.sepia ? 'active' : '' ">
            sepia
        </button>
        <button @click="isClasses.border =!isClasses.border"
        :class="isClasses.border ? 'active' : '' ">
            border
        </button>
        <button @click="isClasses.small =!isClasses.small"
        :class="isClasses.small ? 'active' : '' ">
            small
        </button>
    </div>
</template>
<script>
export default {
  data: () => ({
    isShow: true,
    isClasses: {
        sepia: false,
        border: false,
        small: false
    },
    imgSize: {
        maxHeight: 300,
        maxWedth: 400,
        currentHeight: 300,
        currentWedth: 400,
    }
  }),
};
</script>
<style scoped>
.wrapper-img {
    height: 300px;
    width: 400px;
    margin-bottom: 20px;
    background-color: #cccccc;
}
button {
    margin-top: 10px;
    cursor: pointer;
    transition: 0.2s ease;
}
button.active {
    background-color: purple;
    color: #fff;
}
img {
    height: 300px;
    width: auto;
    transition: 0.2s ease;
}
img.sepia {
    filter: sepia(100%);
}
img.border {
    border: 3px dashed #000000;
}
img.small {
    height: 200px;
    width: auto;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
</style>