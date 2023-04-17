<template>
  <div class="search"
  :style="`background-image: url(${item.urls.regular})`"
  >
  <head-input/>
  </div>
</template>

<script>
import HeadInput from './UI/HeadInput.vue'
  export default {
  components: { HeadInput },
    name: 'search',

    props: {
      item: Object
    },

  }
</script>

<style lang="scss" scoped>

.search {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background-position: center;
  background-size: cover;
}

</style>