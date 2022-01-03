<template>
  <div class="slots">
    <button class="slots__btn" @click="openModal">Send some info</button>
    <modal v-if="isOpenModal" class="slots__modal" title="Modal title" @close="isOpenModal=false">
        <template v-slot:text>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum consequuntur officia saepe fuga maxime sunt consequatur omnis sit, voluptates magnam deserunt aut tempora totam sint earum vitae modi. Quisquam?
    Doloremque reprehenderit earum incidunt quod beatae. Natus iusto praesentium rem cum quas pariatur dignissimos numquam deleniti, quidem, soluta nisi sequi, eum reprehenderit dolore. Debitis animi laboriosam amet quidem doloremque magnam!
    Quo, nulla odit? Debitis dolor assumenda ea omnis, veritatis repudiandae, magnam rerum tenetur porro beatae nobis odit libero quod quibusdam tempore. Temporibus neque dicta optio officia ipsam nihil expedita non?
    Mollitia aliquid eum odio, vero libero doloremque porro enim nesciunt maiores, magni natus vitae necessitatibus in. Perferendis eos architecto sapiente animi nisi, eligendi ratione, error molestiae minima assumenda, tempora quidem!
    Totam beatae suscipit eveniet, quia ducimus facere repudiandae voluptas nam? Illum nam, minima repellendus, maxime quo quidem amet est obcaecati ex provident et! Facilis nihil doloremque, tenetur accusamus minima dolorum.
    Impedit vitae magni sequi, a atque hic suscipit adipisci harum eligendi nemo nostrum dolor fugiat sint minus architecto enim unde velit molestias fugit! Recusandae quis doloribus nobis delectus reiciendis quidem!
    Dignissimos numquam laudantium consectetur hic asperiores pariatur aliquam nam! Fugiat numquam inventore ratione iure, delectus omnis provident quidem, quae unde, amet alias vitae architecto necessitatibus enim similique quo labore cum?
    Provident quibusdam commodi culpa explicabo repudiandae qui ipsa cum in quos rerum! Explicabo aspernatur unde hic officiis animi voluptates labore ex expedita. Unde qui ipsam, quasi id nemo corporis rem!
    Tempore totam, consequuntur vel minima a alias nihil sit, magnam aut cupiditate quia. Quaerat culpa repudiandae distinctio. Saepe illum ex, error placeat laborum quos, minus quod architecto, vero et eaque!
    Id autem ut, enim reprehenderit vero eius iste perspiciatis cumque saepe, laborum corrupti dolorem accusamus architecto quaerat commodi sapiente fugit veritatis, illum molestiae et nihil doloribus fuga magnam aliquid. Quod! </p>
  </template>
    </modal>
  </div>
</template>
<script>
import modal from "~/components/slots/modal.vue";
export default {
  components: {
    modal,
  },
  data: () => ({
    isOpenModal: false,
  }),
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
  },
};
</script>

<style scoped>
.slots {
  position: relative;
  height: 100vh;
}
.slots__btn {
  cursor: pointer;
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
.slots__modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px;
    border: 1px solid black;
    border-radius: 8px;
}
</style>
