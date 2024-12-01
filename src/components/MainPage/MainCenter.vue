<template>
    <div class="col col-2 p-4 w-full">
        <div>
            
            <!-- 풍경사진 -->
            <img class="mt-[-15px] mb-8 w-full h-48 rounded-md"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2Fdata31%2F2008%2F7%2F25%2F102%2F%25BA%25B8%25B3%25EB%25BA%25B8%25B3%25EB_kbn4081.jpg&type=a340"
                alt="풍경사진">

            <!-- 게시판 -->
            <main-contents />

        </div>
    </div>
</template>

<script>
import MainContents from './MainContents.vue'

export default {
    components: { MainContents },
    name: 'MainCenter',
}
</script>
