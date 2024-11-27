<!-- 1. 화면 전체 설정 / 2. 로고사진 / 3. 중앙 링크 모음 / 4. 다크모드 / 5. 로그인_회원가입(주석_보류) -->

<template>
    <!-- 1. 화면 전체 설정 (공중 상단 맨위에서 16높이 흰색/회색800 하단구분선)-->
    <nav
        class="sticky top-0 z-30 h-16 bg-white dark:bg-gray-800 border-b dark:border-b-gray-500/70 border-b-gray-500/30">

        <!-- 2.-4.묶어두고 세로_가운데정렬 아이콘_양측정렬  -->
        <div class="container mx-auto px-4 h-full flex items-center justify-between">

            <!-- 2. 로고 (홈으로이동 16길이 이미지) -->
            <a href="/" class="w-16 h-16 flex items-center">
                <!-- !수정필요 이미지 주소 ↓ -->
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2OGHS_6BkIigG6A9gj1M9OUfb7Lx9A4_rQ&s"
                    alt="Logo" class="max-w-full max-h-full object-contain">
            </a>

            <!-- 3. 메뉴 아이템(양측공간4 menuItems_array 다크모드 호버) -->
            <div class="hidden md:flex space-x-4">
                <a v-for="item in menuItems" :key="item.name" :href="item.link"
                    class="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    {{ item.name }}
                </a>
            </div>

            <!-- 4. 다크모드 토글 버튼 (8공간 중앙정렬) -->
            <div class="flex items-center space-x-2">

                <!-- 5. 로그인_회원가입(주석_보류) -->
                <!-- <a href="/login"
                    class="w-20 h-8 flex items-center justify-center text-gray-500 dark:text-gray-200 rounded-full border-2 border-current">
                    로그인
                </a>
                <a href="/register"
                    class="w-20 h-8 flex items-center justify-center text-white bg-blue-500 rounded-full">
                    회원가입
                </a> -->

                <button @click="toggleDarkMode"
                    class="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-full border-2 border-current">
                    <font-awesome-icon :icon="isDarkMode ? ['fas', 'sun'] : ['fas', 'moon']" class="text-xl" />
                </button>
            </div>

        </div>
    </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'HeaderBar',

    setup() {
        //다크모드 상태 확인
        const isDarkMode = ref(false)

        //메뉴 이름 + 링크 -> menuItems
        const menuItems = [
            { name: '한식', link: '/kr' },
            { name: '양식', link: '/wf' },
            { name: '일식', link: '/jp' },
            { name: '중식', link: '/cn' },
            { name: '동남아', link: '/saf' },
            { name: 'cafe', link: '/cafe' },
        ]

        //다크모드 토글 (HTML 다크 설정)
        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value
            document.documentElement.classList.toggle('dark')
        }

        //초기 다크모드 확인
        onMounted(() => {
            isDarkMode.value = document.documentElement.classList.contains('dark')
        })

        return {
            isDarkMode,
            menuItems,
            toggleDarkMode
        }
    }
}
</script>

<style>


</style>