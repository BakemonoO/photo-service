<template>
  <div class="card-list">
    <card v-for="item in items" 
    :key="item.id" 
    :item="item"
    />
  </div>
</template>

<script>
import Card from './Card.vue'
  export default {
  components: { Card },
  name: 'card-list',

  props: {
    items: Array
  },

  }
</script>

<style lang="scss" scoped>

.card-list {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  grid-row-gap: 3vw;
  justify-items: center;
  margin-bottom: 30px;
  padding: 0 10%;
}

@media (width > 500px) and (width < 1300px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: 0;
  }
}

@media (width > 324px) and (width < 500px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: 0;
    grid-row-gap: 50px;
  }
}

</style>