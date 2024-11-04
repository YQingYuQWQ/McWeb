<template>
    <div class="col-12 col-md-4">
      <div class="card" style="width: 100%;">
        <div class="card-body shadow">
          <h5 class="card-title">{{ title }}</h5>
          <p style="color: cadetblue;">版本:{{ version }}</p>
          <hr style="color: gray; margin: 10px;">
          <p style="color: chartreuse;">地址: {{ address }}</p>
          <p style="color: chartreuse;">端口: {{ port }}</p>
          <hr style="color: gray; margin: 10px;">
          <img class="responsive-img" :src="statusImage" style="max-width: 100%; height: auto;">
          <hr style="color: gray; margin: 10px;">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      version: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      port: {
        type: Number,
        required: true
      }
    },
    computed: {
      statusImage() {
        return `https://api.mcstatus.io/v2/widget/java/${this.address}:${this.port}?dark=false`;
      }
    }
  }
  </script>
  
  <style scoped>
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
  </style>
  