<!-- 1. 전체설정 2. 로고사진+팀명 3. 메뉴(소개/정책/사용기술/연락) 4.저작권(팀명링크) -->
<template>

    <!-- 1. 전체설정(다크모드 상단구분선 높이8) 가로간격4 세로간격8 병렬정리 양측정렬 -->
    <footer class="bg-white dark:bg-gray-800 border-t dark:border-t-gray-500/70 border-t-gray-500/30 mt-8">
        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col sm:flex-row items-center justify-between">

                <!-- 2. 로고사진 (홈이동 로고+팀명) -->
                <a href="/" class="flex items-center mb-4 sm:mb-0">
                    <!-- !수정필요 이미지 주소 ↓ -->
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2OGHS_6BkIigG6A9gj1M9OUfb7Lx9A4_rQ&s"
                        class="h-8 mr-3" alt="Logo" />
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">포스팅</span>
                </a>

                <!-- 3. 메뉴 (랩핑 링크 !수정필요) -->
                <ul
                    class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:text-blue-600 dark:hover:text-blue-400">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                    </li>
                </ul>
            </div>

            <!-- 두번째 구분선 -->
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <!-- 4. 저작권 (팀명링크 !수정필요) -->
            <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="/"
                    class="hover:text-blue-600 dark:hover:text-blue-400">포스팅</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style>

</style>