<template>
  <div :class="{'dark': isDarkMode}" class="dark:bg-gray-800 col col-3 p-4 w-1/6 hidden md:block"></div>
  <div class="col col-1 mt-2 fixed right-0 p-4 border-b border-gray-300 w-1/6 h-screen overflow-y-auto hidden md:block">
    <div class="p-2 border border-gray-300 rounded-lg">
      <h2 class="text-xl font-bold p-1 dark:text-gray-100">실시간 인기글</h2>
      
      <!-- 인기글 리스트 -->
      <ul class="flex flex-col pt-2">
        <a v-for="(item, index) in 항목" :key="index" :href="item.link">
          <li :class="['py-2 text-blue-500', index !== 항목.length - 1 ? 'border-b border-dashed border-gray-200' : '']">
            {{ item.title }}
          </li>
        </a>
      </ul>

    </div>    
  </div>
</template>

<script>
export default {
  name: 'MainRight',
  data() {
    return {
      항목: [
        { title: '오늘도 평화로운 린도', link: 'https://www.youtube.com/shorts/D4n24rml7wY' },
        { title: '항목2', link: '/항목2' },
        { title: '항목3', link: '/항목3' },
        { title: '항목4', link: '/항목4' },
        { title: '항목5', link: '/항목5' },
        { title: '항목6', link: '/항목6' },
        { title: '항목7', link: '/항목7' }
      ]
    };
  }
};
</script>
