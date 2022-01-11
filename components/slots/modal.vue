<template>
  <div class="modal">
    <h5 class="modal__title">
      {{ title }}
    </h5>
    <div class="modal__body" 
    @scroll="scrollBody"
    ref="modalDody">
      <slot name="text"></slot>
    </div>
    <button class="modal__btn" @click="closeModal">Cancel</button>
    <button class="modal__btn active" :disabled = "!notActive">Accept</button>
  </div>
</template>
<script>
export default {
  data: () => ({
      notActive: false
  }),
  methods: {
    closeModal() {
      this.$emit("close");
    },
    scrollBody () {
          const modalBody = this.$refs.modalDody
          if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
            this.notActive = true
          }
      }
  },
  props: {
    title: {
      tupe: String,
      default: "",
    },
  },
};
</script>
<style scoped>
 .modal__body {
     height: 200px;
     overflow-y: scroll;
 }
 .modal__btn {
     padding: 10px 15px;
     border: 1px solid black;
     border-radius: 8px;
     background-color: #ccc;
     margin-top: 15px;
     cursor: pointer;
 }
 .modal__btn.active {
     background-color: blue;
     color: white;
 }
 .modal__btn:disabled,
.modal__btn[disabled]{
  border: 1px solid #999999;
  background-color: rgba(0, 0, 255, 0.397);
  color: #666666;
  cursor: default;
}
</style>
