<template>
  <div class="app" @click="inputFalsy">
    <app-header/>
    <router-view style="flex-grow: 1"/>

   <div class="absolute-btn"
   v-show="scrollBtn"
   >
      <option-button 
      :responsive="'btn50'"
      :color="'white'"
      @action="scrollToStart"     
      >Up</option-button>
      </div>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import OptionButton from './components/UI/OptionButton.vue'
  export default {
  components: { AppHeader, OptionButton },

    data() {
      return {
        scrollBtn: false
      }
    },

    methods: {
      scrollToStart() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },

      scrollIs() {
       window.scrollY > 300 ? this.scrollBtn = true : this.scrollBtn = false
      },

      inputFalsy() {
        this.$store.state.shortInput ? this.$store.commit('changeShortInput') : false
      }
    },

    created() {
      this.$store.dispatch('getHeaderPic')
    },

    mounted() {
      this.$store.dispatch('getSomePics')
      window.addEventListener('scroll', this.scrollIs)
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:'Roboto', sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.absolute-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
}

a {
  text-decoration: none;
  &:visited {
    color: red
  }
}

.loader {
    width: 70px;
    height: 70px;
    border: 5px solid #FFF200;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

  @media (width > 324px) and (width < 600px) {
    .absolute-btn {
      bottom: 15px;
      right: 15px;
}
  }

</style>
