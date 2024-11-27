<template>
  <div :class="{'dark': isDarkMode}" class="dark:bg-gray-800 col col-1 p-2 border-b border-gray-300 w-1/6 ml-4 hidden md:block">
    <div class="p-2 border border-gray-300 rounded-lg mt-4">

      <a href="/login" class="text-center">
        <div class="p-2 hover:bg-blue-400 rounded-lg border-2 border-blue-500 bg-blue-500 text-white mb-3">로그인</div>
      </a>
      
      <!-- 반복되는 카테고리 및 항목 -->
      <ul v-for="category in categories" :key="category.name" class="p-2 border-t dark:text-white">
        <a :href="category.link">
          <div class="flex justify-between hover:bg-blue-400 rounded-lg p-1">
            <p>{{ category.name }}</p>
            <p>></p>
          </div>
        </a>
        <a v-for="item in category.items" :key="item" :href="`${category.link}/${item}`">
          <li class="ml-5 p-1 hover:bg-blue-400 rounded-lg mt-1">{{ item }}</li>
        </a>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLeft',
  data() {
    return {
      isDarkMode: false, // 다크 모드 상태를 관리하는 변수
      categories: [
        { name: '한식', link: '/kr', items: ['test1', 'test2', 'test3'] },
        { name: '양식', link: '/wf', items: ['test1', 'test2'] },
        { name: '일식', link: '/jp', items: ['test1', 'test2', 'test3', 'test4'] },
        { name: '중식', link: '/cn', items: ['test1'] },
        { name: '동남아', link: '/saf', items: ['test1', 'test2'] },
        { name: 'cafe', link: '/cafe', items: ['test1', 'test2', 'test3'] }
      ]
    };
  }
};
</script>

<style>

</style>