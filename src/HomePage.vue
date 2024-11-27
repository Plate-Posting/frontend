<template>

  <div class="bg-white dark:bg-gray-800 min-w-[350px]">
    <!-- HEADER 헤더 -->
    <header-bar />

    <!-- BODY 바디 -->
    <div class="flex flex-grow space-x-2 p-4">
      <left-bar class=" hidden md:block w-1/6" />
      <main-center class="w-full md:w-4/6 mx-auto" />
      <right-bar class=" hidden md:block w-1/6" />
    </div>

    <!-- FOOTER 푸터 -->
    <footer-bar />
  </div>


</template>

<script>
import MainCenter from './components/MainPage/MainCenter.vue'
import FooterBar from './components/Template/FooterBar.vue'
import HeaderBar from './components/Template/HeaderBar.vue'
import LeftBar from './components/Template/LeftBar.vue'
import RightBar from './components/Template/RightBar.vue'
export default {
  name: 'HomePage',
  components: {
    HeaderBar,
    FooterBar,
    LeftBar,
    MainCenter,
    RightBar
  }
}
</script>

<style>

</style>
