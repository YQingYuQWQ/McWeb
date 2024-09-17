<template>
  <div :class="['sticky-top', { 'navbar-scrolled': NavScrolled }]">
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
    <div class="row" style="margin-top: 30px;">
      <div class="col-12">
        <a class="btn btn-outline-primary btn-lg" href="https://qm.qq.com/q/ZKHnxgFuc6" role="button">加入我们</a>
      </div>
    </div>
  </div>
  <div class="container-fluid con2">
    <div class="row row-first">
      <div class="col">
        <p style="font-size: 40px;font-weight: bold;margin-bottom: 1px;">服务器列表</p>
        <p style="font-size: 21px;margin-top: 0;margin-bottom: 50px;color: gray;">Server List</p>
      </div>
    </div>
    <div class="row row-last">
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">生存服务器</h5>
            <p style="color: cadetblue;">版本:1.21 支持互通</p>
            <hr style="color: gray;margin: 10px;">
            <p style="color: chartreuse;">地址:lyzd.fun</p>
            <p style="color: chartreuse;">端口:4081</p>
            <hr style="color: gray;margin: 10px;">
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false"
              style="max-width: 100%; height: auto;">
            <hr style="color: gray;margin: 10px;">
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">宝可梦服务器</h5>
            <p style="color: cadetblue;">版本:1.20</p>
            <hr style="color: gray;margin: 10px;">
            <p style="color: chartreuse;">敬请期待</p>
            <p style="color: chartreuse;">敬请期待</p>
            <hr style="color: gray;margin: 10px;">
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false"
              style="max-width: 100%; height: auto;">
            <hr style="color: gray;margin: 10px;">
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body shadow">
            <h5 class="card-title">建筑服务器</h5>
            <p style="color: cadetblue;">版本:1.21</p>
            <hr style="color: gray;margin: 10px;">
            <p style="color: chartreuse;">敬请期待</p>
            <p style="color: chartreuse;">敬请期待</p>
            <hr style="color: gray;margin: 10px;">
            <img class="responsive-img" src="https://api.mcstatus.io/v2/widget/java/lyzd.fun:4081?dark=false"
              style="max-width: 100%; height: auto;">
            <hr style="color: gray;margin: 10px;">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container con3">
    <div class="row row-first">
      <div class="col">
        <p style="font-size: 40px;font-weight: bold;margin-bottom: 1px;">管理员列表</p>
        <p style="font-size: 21px;margin-top: 0;margin-bottom: 50px;color: gray;">manager list</p>
      </div>
    </div>
    <div class="row row-last">
      <div class="col-6" :class="['animate__animated', 'animate__fadeInRight']" v-if="ManagerScrolled"
        style="animation-duration: 1.5s; animation-delay: 0ms;">
        <div class="card shadow" style="width: 18rem;">
          <img src="@/assets/Manager/danta.jpg" class="card-img-top" alt="danta">
          <div class="card-body">
            <h5 class="card-title">蛋挞</h5>
            <p class="card-text">主要负责服务器技术与维护问题</p>
            <a href="https://qm.qq.com/q/YIBhKZWRa2" class="btn btn-primary" target="_blank">联系我！</a>
          </div>
        </div>
      </div>
      <div class="col-6" :class="['animate__animated', 'animate__fadeInRight']" v-if="ManagerScrolled"
        style="animation-duration: 1.5s; animation-delay: 500ms;">
        <div class="card shadow" style="width: 18rem;">
          <img src="@/assets/Manager/xiaozb.jpg" class="card-img-top" alt="xiaozb">
          <div class="card-body">
            <h5 class="card-title">Z</h5>
            <p class="card-text">主要负责服务器规则及新手引导</p>
            <a href="https://www.baidu.com" class="btn btn-primary" target="_blank">联系我！</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid con2">
    <div class="row row-first">
      <p style="font-size: 40px;font-weight: bold;margin-bottom: 1px;">玩家风采</p>
      <p style="font-size: 21px;margin-top: 0;margin-bottom: 50px;color: gray;"></p>
    </div>
    <div class="row row-last">
      <div class="col-6" :class="['animate__animated', 'animate__jackInTheBox']" v-if="PhotoScrolled">
        <div class="card" style="width: 28rem;">
          <img src="@/assets/PlayerPhoto/1.png" class="img-fluid" alt="...">
        </div>
      </div>
      <div class="col-6" :class="['animate__animated', 'animate__jackInTheBox']" v-if="PhotoScrolled">
        <div class="card" style="width: 28rem;">
          <img src="@/assets/PlayerPhoto/2.png" class="img-fluid" alt="...">
        </div>
      </div>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import { useScroll } from '@vueuse/core';
import { computed } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
  },
  setup() {
    const { y } = useScroll(window);
    const NavScrolled = computed(() => y.value > 50);
    const ManagerScrolled = computed(() => y.value > 600);
    const PhotoScrolled = computed(() => y.value > 1600);

    return {
      NavScrolled,
      ManagerScrolled,
      PhotoScrolled,
    };
  },
}
</script>

<style scoped>
.sticky-top {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.con2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f0f0f0;
}

.con3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  margin-bottom: 0px;
}

.bg-first h1,
.bg-first h5 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}

.bg-first h1 {
  font-size: 2rem;
  font-weight: bold;
}

.row-first {
  margin-top: 65px;
  margin-bottom: 50px;
}

.row-last {
  margin-bottom: 240px;
}
</style>
