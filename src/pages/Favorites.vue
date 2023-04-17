<template>
  <div class="favorites">
    <h1 class="favorites-title">Избранное</h1>
    <card-list
    :items="$store.state.favorites"
    v-if="$store.state.favorites.length > 0"
    />
    <p class="text" v-else>Здесь пока что пусто...</p>
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
  export default {
  components: { CardList },
    name: 'favorites'
  }
</script>

<style lang="scss" scoped>

.favorites {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.favorites-title {
  margin-bottom: 50px;
  font-size: 40px;
}

.text {
  font-size: 24px;
  font-style: italic;
}

</style>