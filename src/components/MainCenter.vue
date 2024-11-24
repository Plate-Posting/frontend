<template>
  
  <!-- 풍경사진 -->
  <img class="mt-2 mb-8 w-full h-48 rounded-md" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjJfMjk0%2FMDAxNzEzNzQ4MDAwMzc3.1ZO6_EgS7RTNF4-XByn2DmBNjplFZ_SvADsZv9kvgp4g.vEtDwrmEatQi7rRotRqvyGNcSbAkN9SCRrOVt3W00F8g.JPEG%2Flala_85.jpg&type=sc960_832">

  <!-- 게시판 -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <MainContents/>
  </div>
  
</template>

<script>
import MainContents from './MainContents.vue'

export default {
  name: 'MainCenter',
  components: {
    MainContents
    
  }
}
</script>

<style>

</style>
