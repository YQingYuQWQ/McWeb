<template>
    <footer class="footer bg-dark text-white py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <h5>关于我们</h5>
            <p>我们致力于为玩家提供最好的游戏体验和社区支持。</p>
          </div>
          <div class="col-lg-4 col-md-12 mb-4">
            <h5>关注我们</h5>
            <a href="https://www.baidu.com" target="_blank" class="text-white mr-3">
              <i class="bi bi-tiktok"></i> 抖音
            </a>
            <a href="https://qm.qq.com/q/8vZcBo18vC" target="_blank" class="text-white mr-3">
              <i class="bi bi-tencent-qq"></i> QQ群
            </a>
          </div>
        </div>
        <div class="text-center mt-4">
          <p>&copy; 2024 凌云之都 | All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer"
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #343a40;
  }
  
  .footer a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  