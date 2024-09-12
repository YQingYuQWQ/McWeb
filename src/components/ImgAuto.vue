<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/ImgAuto/1.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/ImgAuto/2.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="@/assets/ImgAuto/3.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>

</template>

<script>

</script>

<style scoped>
/* 样式可以根据需要自定义 */
.carousel-item img {
  height: 500px;
  /* 例如设置固定高度 */
}
</style>
