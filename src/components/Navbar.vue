<template>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="@/assets/minecraft_logo.png" alt="凌云之都" class="logo-img" />
          <span class="logo-text">凌云之都</span>
        </router-link>
        <ul class="navbar-menu">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/server-info">服务器信息</router-link></li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .navbar-logo {
    display: flex; /* 使用 flex 布局 */
    align-items: center; /* 垂直居中对齐 */
    text-decoration: none;
    color: white;
  }
  
  .logo-img {
    width: 50px; /* 设置固定宽度 */
    height: 50px; /* 设置固定高度 */
    margin-right: 10px; /* 图标和文字之间的间距 */
  }
  
  .logo-text {
    font-size: 1.5em; /* 设置文本字体大小 */
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .navbar-menu li {
    margin: 0;
  }
  
  .navbar-menu a {
    color: white;
    text-decoration: none;
  }
  
  .navbar-menu a:hover {
    text-decoration: underline;
  }
  </style>
  