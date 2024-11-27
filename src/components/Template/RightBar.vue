<template>
    <div
        class="fixed right-0 top-20 w-1/7 p-5 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-300 dark:border-gray-600">
        <h2 class="text-lg font-bold mb-4 text-center dark:text-white">이번주 인기글</h2>
        <ul class="space-y-2">
            <li v-for="(post, index) in popularPosts" :key="post.id" class="text-blue-500 dark:text-blue-400">
                <a :href="post.link" class="hover:text-blue-700 dark:hover:text-blue-400">
                    {{ post.title }}
                </a>

                <!-- 점선 경계선 추가 (마지막은 제외) -->
                <div v-if="index < popularPosts.length - 1"
                    class="border-b border-dashed border-gray-300 dark:border-gray-600 my-2"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { ref } from 'vue'

    export default {
        name: 'RightBar',
        setup() {
            const popularPosts = ref([
                { id: 1, title: '김치찜에 김치싸먹기', link: '/popular/1' },
                { id: 2, title: '스시의 회 구워먹기', link: '/popular/2' },
                { id: 3, title: '킹크랩으로 맛살해먹기', link: '/popular/3' },
                { id: 4, title: '따뜻한 사이다', link: '/popular/4' },
                { id: 5, title: '쌀국수 면 밀가루로 바꾸기', link: '/popular/5' },
            ])

            return {
                popularPosts
            }
        }
    }
</script>
