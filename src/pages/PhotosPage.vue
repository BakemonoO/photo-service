<template>
  <div class="photos-page"
  v-if="item !== null"
  >
  <div class="background-block"
  :style="`background-image: url(${item.urls.regular})`"
  ></div>
  <div class="photo-page__content">
    <div class="content-item">

      <div class="content-item__title">
        <img :src="`${item.user.profile_image.medium}`" >
        <div class="title-item">
          <p class="title-fullname">{{ fullName }}</p>
          <p class="title-social">{{ social }}</p>
        </div>
      </div>

      <div class="content-item__action">
        <option-button :color="'white'" :responsive="'btn50'" @action="addToFavorite">
          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4896 0C15.7166 0 13.4262 2.57568 12.5 3.79131C11.5738 2.57568 9.28345 0 6.5104 0C2.92056 0 0 3.30049 0 7.35679C0 9.56982 0.878418 11.6323 2.41597 13.0437C2.43833 13.0824 2.46582 13.118 2.49785 13.15L12.1323 22.7646C12.234 22.8658 12.3667 22.9167 12.5 22.9167C12.6333 22.9167 12.7665 22.8658 12.8683 22.7641L22.8231 12.8128L22.9258 12.7131C23.0072 12.6363 23.0876 12.5585 23.1776 12.4588C23.2152 12.4217 23.2462 12.38 23.2702 12.3347C24.3866 10.9675 25 9.2041 25 7.35679C25 3.30049 22.0795 0 18.4896 0ZM22.4035 11.7488C22.3892 11.7656 22.376 11.7833 22.3643 11.8017C22.3155 11.8576 22.2621 11.9069 22.2092 11.9573L12.4995 21.6599L3.35288 12.5315C3.32339 12.4735 3.28218 12.4207 3.23184 12.3764C1.8397 11.1608 1.04165 9.33125 1.04165 7.35679C1.04165 3.87471 3.49478 1.0417 6.5104 1.0417C9.49199 1.0417 12.0366 4.93066 12.0621 4.96982C12.2543 5.26685 12.7457 5.26685 12.9379 4.96982C12.9634 4.93066 15.508 1.0417 18.4896 1.0417C21.5052 1.0417 23.9583 3.87476 23.9583 7.35679C23.9583 8.99761 23.406 10.5576 22.4035 11.7488Z" fill="black"
            :style="$store.state.favorites.includes(item) ? 'fill: red' : ''"
            />
          </svg>
        </option-button>
        

        <option-button :color="'#FFF200'" :responsive="'btn200'" style="margin-left: 20px" @action="downloadImage">
          <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.381 10.7776C25.0395 10.7787 24.7629 11.055 24.7619 11.3966V19.209C24.759 20.2333 23.9291 21.0631 22.9048 21.0662H3.09524C2.07091 21.0631 1.241 20.2333 1.2381 19.209V11.3966C1.2381 11.0548 0.961071 10.7776 0.619048 10.7776C0.277024 10.7776 0 11.0548 0 11.3966V19.209C0.00077381 20.9182 1.38609 22.3035 3.09524 22.3043H22.9048C24.6139 22.3035 25.9992 20.9182 26 19.209V11.3966C25.999 11.055 25.7224 10.7787 25.381 10.7776Z" fill="black"/>
            <path d="M8.46874 14.3124L12.4059 17.6862C12.4094 17.6862 12.4121 17.6891 12.4121 17.6924L12.4306 17.711C12.4368 17.7171 12.4492 17.7233 12.4554 17.7295C12.4614 17.7373 12.4703 17.7417 12.4802 17.7419C12.4864 17.7481 12.4987 17.7543 12.5049 17.7605C12.5111 17.7667 12.5235 17.7667 12.5297 17.7729C12.5359 17.779 12.5483 17.779 12.5606 17.7852C12.5668 17.7914 12.5792 17.7914 12.5854 17.7976C12.5978 17.8038 12.604 17.8038 12.6164 17.81C12.6225 17.81 12.6349 17.8162 12.6411 17.8162C12.6535 17.8162 12.6597 17.8224 12.6721 17.8224C12.6783 17.8224 12.6906 17.8286 12.6968 17.8286C12.7092 17.8286 12.7216 17.8348 12.734 17.8348H12.8949C12.9073 17.8348 12.9197 17.8286 12.9321 17.8286C12.9383 17.8286 12.9506 17.8224 12.9568 17.8224C12.9692 17.8224 12.9754 17.8162 12.9878 17.8162C12.994 17.8162 13.0064 17.81 13.0125 17.81C13.0249 17.8038 13.0311 17.8038 13.0435 17.7976C13.0497 17.7914 13.0621 17.7914 13.0683 17.7852C13.0806 17.779 13.0868 17.779 13.0992 17.7729C13.1054 17.7667 13.1178 17.7667 13.124 17.7605C13.1302 17.7543 13.1425 17.7481 13.1487 17.7419C13.1549 17.7357 13.1611 17.7357 13.1735 17.7295C13.1797 17.7233 13.1921 17.7171 13.1983 17.711L13.2168 17.6924C13.2203 17.6924 13.223 17.6895 13.223 17.6862L17.1602 14.3124C17.4202 14.0901 17.4505 13.6993 17.2283 13.4395C17.0062 13.1797 16.6154 13.1492 16.3554 13.3714L13.4335 15.8724V0.619048C13.4335 0.277024 13.1565 0 12.8145 0C12.4724 0 12.1954 0.277024 12.1954 0.619048V15.8724L9.2735 13.3714C9.0135 13.1492 8.62272 13.1797 8.40064 13.4395C8.17836 13.6993 8.20874 14.0901 8.46874 14.3124Z" fill="black"/>
          </svg>
          <p class="btn-title">Download</p>
        </option-button>
      </div>
    </div>
    <img :src="`${item.urls.regular}`">
  </div>
  </div>
</template>

<script>
import OptionButton from '../components/UI/OptionButton.vue'
  export default {
  components: { OptionButton },
    name: 'photos-page',

    data() {
      return {
        item: null
      }
    },

    methods: {
      addToFavorite() {
        this.$store.state.favorites.includes(this.item) ? this.$store.commit('deleteFromFavorite', this.item) : this.$store.commit('addToFavorite', this.item)
      },

      downloadImage() {
        window.open(this.item.urls.full, '_blank')
      }
    },

    computed: {
      fullName() {
        return `${this.item.user.first_name ? this.item.user.first_name : ''} ${this.item.user.last_name ? this.item.user.last_name : ''}`
      },

      social() {
        let socialResult = ''
        for (let [name, link] of Object.entries(this.item.user.social)) {
          if (link !== null) {
            socialResult = name.match(/[a-zA-Z]+/).join('') + ': ' + link
            break
          }
        }
        return socialResult
        
      }
    },

    created() {
      this.$store.dispatch('getPicWithId', this.$route.params.id).then(res => this.item = res)
    },

  }
</script>

<style lang="scss" scoped>

.photos-page {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.background-block {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: grayscale(100%);
  position: absolute;
  opacity: 0.8;
}

.photo-page__content { 
  width: 70%;
  z-index: 2;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
}

.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.content-item__title {
  display: flex;
  .title-item {
    margin-left: 10px;
  }
  img {
    width: 55px;
    height: 55px;
  }
}

.title-fullname {
  font-size: 30px;
  color: #FFF200;
  font-weight: 600;
}

.title-social {
  color: rgba(255, 242, 0, 0.8);
  font-style: italic;
}

.content-item__action {
  display: flex;
}

.btn-title {
  font-weight: 500;
  margin-left: 15px;
}


@media (width > 324px) and (width < 900px) {
  .btn-title {
    display: none;
  }

  .title-social {
    display: none;
  }

  .title-fullname {
    font-size: 18px;
    word-break: break-all;
  }

  .btn-actions {
    width: 40px;
    height: 40px;
  }

  svg {
    height: 15px;
  }

}

</style>