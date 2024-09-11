<template>
    <div class="block text-center" m="t-4">
      <span class="demonstration">服务器截图</span>
      <el-carousel trigger="click" height="300px">
        <el-carousel-item v-for="(image,index) in images" :key="index">
          <img :src="image" alt="服务器截图">
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/ImgAuto/1.png'),
        require('@/assets/ImgAuto/2.png'),
        require('@/assets/ImgAuto/3.png')
      ]
    };
  }
}
</script>
<style scoped>
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>