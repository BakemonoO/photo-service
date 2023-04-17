<template>
  <input type="text" class="style-input" placeholder="Поиск..." @click.stop v-model="search">
</template>

<script>
  export default {
    name: 'short-input',

    data() {
      return {
        search: ''
      }
    },

  methods: {
    getQuery() {
        this.$store.commit('clearPage')
        this.$store.commit('changeQuery', this.search)
        this.$store.dispatch('getQueryPics', this.search)
      }
  },

  mounted() {
      this.$el.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.getQuery()
        }
      })
    }

  }
</script>

<style lang="scss" scoped>

.style-input {
  height: 25px;
  width: 200px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: none;
  align-self: center;
  color: white;
  padding-left: 10px;
  border-radius: 3px;
}

.style-input::placeholder {
  font-style: italic;
}

@media (width < 670px) and (width > 325px) {
  .style-input {
    width: 150px;
  }
}

</style>