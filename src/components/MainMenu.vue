<template>
  <header :class="{'dark': isDarkMode}" class="top-0 sticky z-30 flex h-16 items-center border-b border-b-gray-500/30 bg-white text-sm font-medium leading-6 dark:border-b-gray-500/70 dark:bg-gray-800">
    <nav class="mx-10 flex w-full max-w-7xl gap-x-10 px-4 lg:px-0">

      <!-- [1/3] 좌측(로고) 누르면 홈으로 이동 -->
      <div class="flex items-center lg:w-[180px]">
        <a class="flex items-center" href="/"><span class="sr-only">HOME</span>

          <!-- 로고 사진 -->
          <div class="w-16">
            <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2OGHS_6BkIigG6A9gj1M9OUfb7Lx9A4_rQ&s">
          </div>
        </a>
      </div>

      <!-- [2/3] 중앙(링크) 누르면 사이트로 이동 -->
      <div class="flex-1 justify-between sm:flex ">

        <!-- 링크 버튼 -->
        <div class="hidden py-3 sm:flex sm:items-center sm:gap-x-4 xl:gap-x-6">
          <!-- 메뉴 1-4 -->
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">한식</span> </a>
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">양식</span> </a>
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">일식</span> </a>
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">중식</span> </a>
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">동남아</span> </a>
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">cafe</span> </a>
          
          <!-- 메뉴와 컨택트 구분칸 (|) -->
          <div class="h-3 w-px shrink-0 bg-gray-400 dark:bg-gray-400/70"></div>

          <!-- Contact 버튼 -->
          <a class="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 relative inline-block shrink-0 font-medium" href="/menu1"> <span class="hover:no-underline">Contact</span> </a>
        </div>
      </div>

      <!-- [3/3] 우측(버튼) 다크모드/로그인/회원가입 -->
      <div class="shrink-0 items-center justify-end gap-x-2 sm:flex lg:w-[180px] lg:gap-x-4">
        
        <!-- 다크모드 버튼 -->
        <button @click="toggleDarkMode" class="bg-gray-700 hover:bg-gray-200 relative hidden h-[35px] items-center justify-center rounded-3xl border border-gray-500/60 px-2 py-0.5 text-xs font-medium text-white focus:outline-none focus:ring-offset-0 sm:flex">
          <span v-if="isDarkMode">
            <!-- 해 아이콘 (라이트 모드로 전환) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <span v-else>
            <!-- 달 아이콘 (다크 모드로 전환) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-400 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" />
            </svg>
          </span>
        </button>

        <!-- 1.로그인/ 2.회원가입 (href 수정 필요) -->
        <!-- <div class="right-0 hidden shrink-0 items-center gap-x-2 sm:flex">
          <div class="hidden items-center gap-x-2 sm:flex">

            <a rel="nofollow" class="flex h-[35px] items-center justify-center rounded-3xl border border-gray-500/30 bg-white px-4 text-center text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" href="/로그인">
              <span class="hidden lg:inline">로그인</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 lg:hidden">
                <path fill-rule="evenodd" d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z" clip-rule="evenodd"></path>
                <path fill-rule="evenodd" d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z" clip-rule="evenodd"></path>
              </svg>
            </a>
            
            <a rel="nofollow" class="flex h-[35px] items-center justify-center rounded-3xl border border-transparent bg-blue-500 px-4 text-xs font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-offset-0" href="/회원가입">
              <span class="hidden lg:inline">회원가입</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 lg:hidden">
                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd"></path>
              </svg>
            </a>
            
          </div>
        </div> -->

      </div>

    </nav>
  </header>
</template>

<script>
  import { ref, onMounted, watch } from 'vue';

  export default {
    name: 'MainMenu',
    setup() {
      const isDarkMode = ref(false);

      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        localStorage.setItem('darkMode', isDarkMode.value);
        updateDarkMode();
      };

      const updateDarkMode = () => {
        if (isDarkMode.value) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      onMounted(() => {
        const savedMode = localStorage.getItem('darkMode');
        isDarkMode.value = savedMode === 'true';
        updateDarkMode();
      });

      watch(isDarkMode, updateDarkMode);

      return {
        isDarkMode,
        toggleDarkMode
      };
    }
  };
</script>