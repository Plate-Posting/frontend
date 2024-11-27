<template>
  
  <!-- 헤더 -->
  <NavBar/>
  
  <!-- 바디 -->
  <div :class="{'dark': isDarkMode}" class="board-layout dark:bg-gray-800">
    
    <!-- 1번레이블 -->
    <MainLeft/>

    <!-- 2번레이블 -->
    <MainCenter/>
    
    <!-- 3번레이블 -->
    <MainRight/>

  </div>

 

</template>

<script>
import NavBar from './components/template/NavBar.vue';
import MainCenter from './components/Main/MainCenter.vue';
import MainLeft from './components/Main/MainLeft.vue';
import MainRight from './components/Main/MainRight.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MainLeft,
    MainCenter,
    MainRight,
  }
}
</script>

<style scoped>
  .board-layout {
    display: flex;
    flex-direction: row;
  }
</style>
