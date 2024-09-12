<template>
  <div class="home">
    <ImgAuto />
    <p>这里你可以找到服务器的最新信息和公告。</p>
  </div>
</template>

<script>
import ImgAuto from '@/components/ImgAuto.vue';

export default {
  name: 'Home',
  components: {
    ImgAuto,
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>