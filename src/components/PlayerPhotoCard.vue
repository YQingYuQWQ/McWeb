<template>
    <div class="col">
      <div class="card" style="width: 100%;">
        <img :src="imageSrc" class="img-fluid" :alt="altText">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      altText: {
        type: String,
        default: 'Player Photo'
      }
    },
    computed: {
        imageSrc() {
            return require(`@/assets/PlayerPhoto/${this.image}`)
        }
    }
  }
  </script>
  
  <style scoped>
  /* 可以在这里添加样式 */
  </style>
  