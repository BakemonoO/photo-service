<template>
  <button class="btn"
  :class="responsive ? responsive : ''"
  @click="$emit('action')"
  :style="color ? `background-color: ${color}` : 'none'"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'option-button',
    props: {
      color: String,
      width: Number,
      height: Number,
      responsive: String
    },

  }
</script>

<style lang="scss" scoped>

.btn {
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  opacity: 0.8;
}

.btn200 {
  width: 200px;
  height: 50px;
}

.btn50{
  width: 50px;
  height: 50px;
}

@media (width > 324px) and (width < 900px) {
  .btn200 {
  width: 40px;
  height: 40px;
}

.btn50 {
  width: 40px;
  height: 40px;
}
}

</style>