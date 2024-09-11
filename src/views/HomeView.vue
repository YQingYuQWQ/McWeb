<template>
  <div class="home">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12"><ImgAuto /></el-col>
          <el-col :span="12"><span>这是公告板块</span></el-col>
        </el-row>
        
      </el-main>
    </el-container>
    <p>这里你可以找到服务器的最新信息和公告。</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ImgAuto from '@/components/ImgAuto.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    ImgAuto,
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>