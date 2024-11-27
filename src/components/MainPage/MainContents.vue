<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(item, index) in titles" :key="index" class="p-2">

            <!-- 각 링크 이동 버튼의 사진 -->
            <div class="w-full">
                <a class="relative mb-2 text-gray-900 no-underline dark:text-gray-100" :href="item.go">
                    <div class="group relative">
                        <div class="h-16 w-full rounded-xl bg-gray-300 dark:bg-gray-700">
                            <!-- 클릭 버튼 배경사진 ↓ -->
                            <div class="h-full rounded-xl bg-right-bottom bg-no-repeat"
                                :style="{ backgroundImage: `url(${require(`@/components/picture/${item.picture}`)})`, opacity: 0.3 }">
                            </div>
                        </div>
                        <div
                            class="absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline">
                            <span
                                class="w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 sm:text-lg dark:hover:text-blue-200 dark:group-hover:text-blue-200">{{
                                item.title }}</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- 글 -->
            <div class="w-full">
                <div class="group relative">
                    <ul class="divide-y divide-gray-500/30 dark:divide-gray-500/70">

                        <!-- 반복하여 글 목록 표시 -->
                        <li v-for="i in 3" :key="i" class="py-4 last:pb-0">

                            <div class="mb-2 flex">

                                <!-- 글쓴이 정보 -->
                                <div class="flex flex-1 items-center space-x-1">
                                    <a href="#" alt="유저정보">
                                        <img src="#" alt="프로필 사진" class="h-5 w-5 rounded-full">
                                    </a>
                                    <a class="inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 sm:text-sm dark:text-gray-300 dark:hover:text-blue-200"
                                        href="#">유저이름</a>
                                    <div
                                        class="text-xs font-normal leading-5 text-gray-700 sm:text-sm dark:text-gray-300">
                                        <span class="mr-0.5">·</span>
                                        <span class="space-x-1">
                                            <span>N분 전</span>
                                        </span>
                                    </div>
                                </div>

                                <div class="flex space-x-2 text-gray-700 dark:text-gray-300">

                                    <!-- 따봉 아이콘 -->
                                    <div class="flex flex-1 items-center gap-x-0.5">
                                        <font-awesome-icon icon="thumbs-up" class="h-4 w-4 shrink-0" />
                                        <span class="text-xs font-normal sm:text-sm">0</span>
                                    </div>

                                    <!-- 댓글 아이콘 -->
                                    <div class="flex flex-1 items-center">
                                        <font-awesome-icon icon="comment" class="h-4 w-4 shrink-0" />
                                        <span class="ml-0.5 text-xs font-normal sm:text-sm">0</span>
                                    </div>
                                </div>

                            </div>

                            <!-- 제목 -->
                            <div class="flex items-center gap-x-1">
                                <a class="line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-base sm:leading-5 dark:text-gray-100 dark:hover:text-blue-200"
                                    href="#">글 제목</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MainContents',
    data() {
        return {
            titles: [
                { go: '/kr', title: '한식', picture: 'kr.jpg' },
                { go: '/wf', title: '양식', picture: 'wf.jpg' },
                { go: '/jp', title: '일식', picture: 'jp.jpg' },
                { go: '/cn', title: '중식', picture: 'cn.jpg' },
                { go: '/saf', title: '동남아', picture: 'saf.jpg' },
                { go: '/cafe', title: '카페', picture: 'cafe.png' }
            ]
        }
    }
}
</script>

