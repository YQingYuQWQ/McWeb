<template>
  <div :class="['sticky-top', { 'navbar-scrolled': NavScrolled }]">
    <NavBar />
  </div>
  <div class="container-fluid bg-first">
    <div class="row">
      <div class="col-12 text-center">
        <h1>凌云之都 | 群组服务器</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h5>1.21 生电轻RPG | 宝可梦 | 建筑 带给您完美体验</h5>
      </div>
    </div>
    <div class="row" style="margin-top: 30px;">
      <div class="col-12 text-center">
        <a class="btn btn-outline-primary btn-lg" href="https://qm.qq.com/q/ZKHnxgFuc6" role="button">加入我们</a>
      </div>
    </div>
  </div>
  <div class="container-fluid con2">
    <div class="row row-first text-center">
      <div class="col">
        <p style="font-size: 40px; font-weight: bold; margin-bottom: 1px;">服务器列表</p>
        <p style="font-size: 21px; margin-top: 0; margin-bottom: 50px; color: gray;">Server List</p>
      </div>
    </div>
    <div class="row row-last">
      <ServerCard v-for="server in servers" :key="server.id" :title="server.title" :version="server.version"
        :address="server.address" :port="server.port" />
    </div>
  </div>
  <div class="container con3">
    <div class="row row-first text-center">
      <div class="col">
        <p style="font-size: 40px; font-weight: bold; margin-bottom: 1px;">管理员列表</p>
        <p style="font-size: 21px; margin-top: 0; margin-bottom: 50px; color: gray;">manager list</p>
      </div>
    </div>
    <div class="row row-last">
      <div class="col" :class="['animate__animated', 'animate__fadeInRight']" v-if="ManagerScrolled"
        style="animation-duration: 1.5s; animation-delay: 0ms;">
        <ManagerCard name="蛋挞" description="主要负责服务器技术与维护问题" image="danta.jpg"
          contactLink="https://qm.qq.com/q/YIBhKZWRa2" />
      </div>
      <div class="col" :class="['animate__animated', 'animate__fadeInRight']" v-if="ManagerScrolled"
        style="animation-duration: 1.5s; animation-delay: 500ms;">
        <ManagerCard name="Z" description="主要负责服务器规则及新手引导" image="xiaozb.jpg" contactLink="https://www.baidu.com" />
      </div>
    </div>
  </div>
  <div class="container-fluid con2">
    <div class="row row-first text-center">
      <p style="font-size: 40px; font-weight: bold; margin-bottom: 1px;">玩家风采</p>
      <p style="font-size: 21px; margin-top: 0; margin-bottom: 50px; color: gray;"></p>
    </div>
    <div class="row row-last">
      <div class="col" :class="['animate__animated', 'animate__jackInTheBox']" v-if="PhotoScrolled">
        <PlayerPhotoCard image="1.png" altText="Player 1" v-if="PhotoScrolled" />
      </div>
      <div class="col" :class="['animate__animated', 'animate__jackInTheBox']" v-if="PhotoScrolled">
        <PlayerPhotoCard image="2.png" altText="Player 2" v-if="PhotoScrolled" />
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
import ServerCard from '@/components/ServerCard.vue';
import ManagerCard from '@/components/ManagerCard.vue';
import PlayerPhotoCard from '@/components/PlayerPhotoCard.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer,
    ServerCard,
    ManagerCard,
    PlayerPhotoCard,
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
  data() {
    return {
      servers: [
        { id: 1, title: "生存服务器", version: "1.21", address: "lyzd.fun", port: "4081" },
        { id: 2, title: "宝可梦服务器", version: "1.20", address: "lyzd.fun", port: "4081" },
        { id: 3, title: "建筑服务器", version: "1.21", address: "lyzd.fun", port: "4081" }
      ]
    }
  }
}
</script>

<style scoped>
/*导航css*/
.sticky-top {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* 导航下滑css */
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

/* 首页背景 */
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

/* Mobile-specific styles */
@media (max-width: 576px) {
  .card {
    margin-bottom: 20px;
    /* Add space between cards */
  }
}
</style>
