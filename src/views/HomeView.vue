<template>
  <div class="sticky-top">
    <NavBar />
  </div>
  <div class="container-fluid bg-first">
    <div class="row">
      <div class="col-12">
        <h1>凌云之都 | 群组服务器</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h5>1.21 生电轻RPG | 宝可梦 | 建筑 带给您完美体验</h5>
      </div>
    </div>
  </div>
  <div class="container con2">
    <div class="row">
      <div class="col">
        <p style="font-size: 40px;font-weight: bold;margin-bottom: 1px;">服务器列表</p>
        <p style="font-size: 21px;margin-top: 0;color: gray;">Sever List</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImgAuto from '@/components/ImgAuto.vue';
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    ImgAuto,
    NavBar,
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.bg-first {
  background-image: url('@/assets/fjt.jpg'); /* 确保路径正确 */
  background-size: cover; /* 背景图填充整个元素 */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 背景图不重复 */
  height: 550px; /* 根据需要调整高度 */
  display: flex; /* 使用 Flexbox */
  flex-direction: column; /* 使子元素垂直排列 */
  justify-content: center; /* 垂直居中对齐 */
  align-items: center; /* 水平居中对齐 */
  color: white; /* 设置文本颜色 */
  text-align: center; /* 使文本居中对齐 */
  padding: 0 15px; /* 添加左右内边距以防文本超出视口 */
}

.bg-first h1,
.bg-first h5 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* 添加文本阴影 */
}

.bg-first h1 {
  font-size: 2rem;
  font-weight: bold; /* 使 h1 文本加粗 */
}

.con2 {
  margin-top: 75px; /* 调整为你需要的间距 */
}
</style>