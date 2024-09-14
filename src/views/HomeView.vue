<template>
  <div :class="['sticky-top', { 'navbar-scrolled': isScrolled }]">
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
        <p style="font-size: 21px;margin-top: 0;margin-bottom: 50px;color: gray;">Sever List</p>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">生存服务器</h5>
            <p style="color: cadetblue;">版本:1.21 支持互通</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">地址:lyzd.fun</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">端口:4081</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false">
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">生存服务器</h5>
            <p style="color: cadetblue;">版本:1.21 支持互通</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">地址:lyzd.fun</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">端口:4081</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false">
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">生存服务器</h5>
            <p style="color: cadetblue;">版本:1.21 支持互通</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">地址:lyzd.fun</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <p style="color: chartreuse;">端口:4081</p>
            <p style="color: gray;margin: 10px;">-----------------</p>
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container con3">
    <p>aaaaaaaa</p>
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
  },
  data() {
    return {
      isScrolled: false, // 控制背景颜色变化的状态
    };
  },
  methods: {
    handleScroll() {
      // 当页面滚动时，设置 isScrolled 的值
      this.isScrolled = window.scrollY > 50; // 可以根据需要调整阈值
    }
  },
  mounted() {
    // 添加滚动事件监听器
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件监听器以防止内存泄漏
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.sticky-top {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  /* 平滑过渡 */
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.8);
  /* 半透明黑色背景 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* 添加阴影 */
}

.con2 {
  display: flex; /* 启用 Flexbox 布局 */
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center; /* 水平居中对齐 */
  justify-content: center; /* 垂直居中对齐 */
  text-align: center; /* 文本居中对齐 */
  margin-top: 75px; /* 根据需要调整间距 */
}

.responsive-img {
  max-width: 100%; /* 确保图片不会超出容器宽度 */
  max-height: 200px; /* 根据需要调整最大高度 */
  width: auto; /* 保持图片比例 */
  height: auto; /* 保持图片比例 */
}

.bg-first {
  background-image: url('@/assets/fjt.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 15px;
}

.bg-first h1,
.bg-first h5 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}

.bg-first h1 {
  font-size: 2rem;
  font-weight: bold;
}

.con2 {
  margin-top: 75px;
}
</style>
