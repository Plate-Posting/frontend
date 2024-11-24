<template>

    <div v-for="(title, index) in titles" :key="index" class="p-2">
        <!-- 사진 -->
        <div class="w-full">
            <a class="relative mb-2 text-gray-900 no-underline dark:text-gray-100" href="#">
                <div class="group relative">
                    <div class="h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700">
                        <!-- 클릭 버튼 배경사진 -->
                        <div class="h-full rounded-xl bg-right-bottom opacity-10" style="background-image: url(#);"></div>
                    </div>
                    <div class="absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline">
                        <span class="w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 sm:text-lg dark:hover:text-blue-200 dark:hover:no-underline dark:group-hover:text-blue-200">{{ title }}</span>
                    </div>

                    <!-- 여백 그림(잡다한거)
                    <div class="absolute -top-[4px] right-0 mr-6 h-[68px] w-[145px] overflow-y-hidden">
                        <img class="dark:hidden" src="#" alt="여백 그림">
                        <img class="hidden dark:block" src="#" alt="여백 그림">
                    </div> -->
                </div>
            </a>
        </div>

        <!-- 글 -->
        <div class="w-full">
            <div class="group relative">
                <ul class="divide-y divide-gray-500/30 dark:divide-gray-500/70">
                    
                    <!-- 반복반복반복반복반복반복반복반복반복반복반복반복반복반복반복 -->
                    <li v-for="i in 3" :key="i" class="py-4 last:pb-0">
                        
                        <div class="mb-2 flex">
                            
                            <!-- 글쓴이 정보 -->
                            <div class="flex flex-1 items-center space-x-1">
                                <a href="#" alt="유저정보">
                                    <img src="#" alt="프로필 사진" class="h-5 w-5 rounded-full">
                                </a>
                                <a class="inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 sm:text-sm dark:text-gray-300 dark:hover:text-blue-200" href="#">유저이름</a>
                                <div class="text-xs font-normal leading-5 text-gray-700 sm:text-sm dark:text-gray-300">
                                    <span class="mr-0.5">·</span>
                                    <span class="space-x-1">
                                        <span>N분 전</span>
                                    </span>
                                </div>
                            </div>

                            <div class="flex space-x-2 text-gray-700 dark:text-gray-300">
                                
                                <!-- 따봉 -->
                                <div class="flex flex-1 items-center gap-x-0.5">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 shrink-0">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"></path>
                                    </svg>
                                    
                                    <span class="text-xs font-normal sm:text-sm">0</span>
                                </div>
                                
                                <!-- 댓글 -->
                                <div class="flex flex-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4 shrink-0">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path>
                                    </svg>
                                    <span class="ml-0.5 text-xs font-normal sm:text-sm">0</span>
                                </div>
                            </div>

                        </div>

                        <!-- 제목 -->
                        <div class="flex items-center gap-x-1">
                            <a class="line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 sm:text-base sm:leading-5 dark:text-gray-100 dark:hover:text-blue-200" href="#">글 제목</a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'MainContents',
        data() {
            return {
                titles: ['한식', '양식', '일식', '중식', '동남아', 'cafe']
            }
        }
    }
</script>

<style>

</style>