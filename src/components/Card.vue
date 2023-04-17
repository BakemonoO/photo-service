<template>
  <router-link :to="`/photos/${item.id}`">
  <div class="card"
  :style="`background-image: url(${item.urls.regular})`"
  >
  </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
    
  }
</script>

<style lang="scss" scoped>

.card {
  width: 450px;
  height: 450px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

.card:hover {
  transform: scale(1.05);
}

@media (width > 500px) and (width < 1300px) {
  .card {
    width: 300px;
    height: 300px;
  }
}

@media (width > 324px) and (width < 500px) {
  .card {
    width: 250px;
    height: 250px;
  }
}

</style>