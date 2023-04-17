<template>
  <div class="main"
  v-if="$store.state.headerPic !== null"
  >
    <search :item="$store.state.headerPic"/>
    <card-list
    v-if="$store.state.picData.length > 0 && $store.state.queryData.length === 0"
    :items="$store.state.picData"
    />

    <card-list 
    v-else 
    :items="$store.state.queryData"/>

    <div class="mobile">
    <option-button style="margin-bottom: 30px" :width="200" :height="50" @action="getPics">Загрузить еще...</option-button>
    </div>
    <div class="loader"
    v-if="$store.state.loader"
    ></div>
    
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
import Search from '../components/Search.vue'
import OptionButton from '../components/UI/OptionButton.vue'
  export default {
  components: { CardList, OptionButton, Search },
  name: 'main-page',

  methods: {
    maxScroll() {
      if (this.$route.path === '/' && (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
        this.$store.state.queryData.length > 0 ? this.$store.dispatch('getQueryPics') : this.$store.dispatch('getSomePics')
    },

    getPics() {
      this.$store.state.queryData.length > 0 ? this.$store.dispatch('getQueryPics') : this.$store.dispatch('getSomePics')
    }
  },

  mounted() {
    window.addEventListener('scroll', this.maxScroll)
  }

  }
</script>

<style lang="scss" scoped>

.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile {
  display: none;
}

@media (width > 324px) and (width < 600px) {
  .mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>