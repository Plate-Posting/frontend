<!-- 1. 로그인버튼 2. 메뉴 3. 하위메뉴 -->

<template>
    <div
        class="p-5 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-300 dark:border-gray-600">

        <!-- 1. 로그인 버튼 (/login이동 파란색) -->
        <!-- <a href="/login" class="block bg-blue-500 hover:bg-blue-400 text-white rounded-lg p-3 mb-4 text-center">
            로그인
        </a> -->

        <!-- 구분선 -->
        <!-- <hr class="border-gray-300 dark:border-gray-700 mb-4" /> -->

        <!-- 2. 카테고리 메뉴 categories 이름별게시판링크 버튼호버 -->
        <ul class="space-y-4">
            <li v-for="category in categories" :key="category.name"
                class="border-b dark:border-gray-700 pb-2 mb-2 last:border-b-0">
                <div class="flex items-center justify-between mb-2">
                    <a :href="category.link"
                        class="flex items-center justify-between w-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-300 dark:hover:bg-gray-600 rounded-lg p-1">
                        <span class="text-gray-900 dark:text-gray-100 font-semibold">{{ category.name }}</span>
                        <font-awesome-icon icon="chevron-right" class="ml-2 dark:text-gray-100" />
                    </a>
                </div>

                <!-- 하위 메뉴 항목들 -->
                <ul class="ml-4 mt-1 space-y-1">
                    <li v-for="(item, index) in category.items" :key="item">
                        <!-- 인덱스 번호를 사용해 추가 번호 부여 / 상위이름+menuN 으로 번호 부여 -->
                        <a :href="`${category.link}/menu${index + 1}`" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600
                            dark:hover:text-blue-400 mb-2">
                            {{ item }}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'LeftBar',
    components: {
        FontAwesomeIcon
    },
    setup() {
        const categories = ref([
            { name: '한식', link: '/kr', items: ['김치', '밥', '찌개', '국'] },
            { name: '양식', link: '/wf', items: ['스테이크', '파스타'] },
            { name: '일식', link: '/jp', items: ['초밥', '라멘', '덮밥', '모찌'] },
            { name: '중식', link: '/cn', items: ['탕후루'] },
            { name: '동남아', link: '/saf', items: ['똠양꿍', '쌀국수'] },
            { name: 'cafe', link: '/cafe', items: ['커피', '쉐이크', '쿠키'] }
        ])

        return {
            categories
        }
    }
}
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성 */
</style>