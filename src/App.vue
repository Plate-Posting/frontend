<template>
  
  <!-- 헤더 -->
  <MainMenu/>
  
  <!-- 바디 -->
  <div :class="{'dark': isDarkMode}" class="board-layout dark:bg-gray-800">
    
    <!-- 1번레이블 -->
    <div :class="{'dark': isDarkMode}" class="dark:bg-gray-800 col col-1 p-2 border-b border-gray-300 w-1/6 ml-4 hidden md:block">
      <div class="p-2 border border-gray-300 rounded-lg mt-4">
        <MainLeft/>
      </div>
    </div>
    
    <!-- 2번레이블 -->
    <div :class="{'dark': isDarkMode}" class="col col-2 p-4 border-b border-gray-300 w-full md:w-4/6 dark:bg-gray-800">
      <MainCenter/>
    </div>
    
    <!-- 3번레이블 -->
    <div :class="{'dark': isDarkMode}" class="dark:bg-gray-800 col col-3 p-4 w-1/6 hidden md:block"></div>
    <div class="col col-1 mt-2 fixed right-0 p-4 border-b border-gray-300 w-1/6 h-screen overflow-y-auto hidden md:block">
      <div class="p-2 border border-gray-300 rounded-lg">
        <h2 class="text-xl font-bold p-1 dark:text-gray-100">실시간 인기글</h2>
        <MainRight/>
      </div>    
    </div>
      
      
    

  </div>

</template>

<script>
import MainMenu from './components/MainMenu.vue';
import MainCenter from './components/MainCenter.vue';
import MainLeft from './components/MainLeft.vue';
import MainRight from './components/MainRight.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    MainLeft,
    MainCenter,
    MainRight,
  }
}
</script>

<style scoped>
  .board-layout {
    display: flex;
    flex-direction: row; /* 세로 방향으로 정렬 */
  }
</style>
