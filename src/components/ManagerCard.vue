<template>
    <div class="col">
      <div class="card shadow" style="width: 100%;">
        <img :src="imageSrc" class="card-img-top" :alt="name">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">{{ description }}</p>
          <a :href="contactLink" class="btn btn-primary" target="_blank">联系我！</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      contactLink: {
        type: String,
        required: true
      }
    },
    computed: {
      imageSrc() {
        return require(`@/assets/Manager/${this.image}`);
      }
    }
  }
  </script>
  
  <style scoped>
  /* 可以在这里添加样式 */
  </style>
  