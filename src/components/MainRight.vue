<template>
    
    <ul class="flex flex-col divide-y divide-dashed divide-gray-200 pt-2">
        
        <a href="https://www.youtube.com/shorts/D4n24rml7wY"><li class="py-2 text-blue-500">오늘도 흥미로운 린도린도</li></a>

        <!-- li 반복문 쓰면 하단 점선이 적용 안되니 직접 하는게 좋다고 봄. 임시로 쓴 내용물. -->
        <a href="#"><li v-for="항목 in 7" :key="항목" class="py-2 text-blue-500">항목</li></a>
    </ul> 
        
</template>

<script>
    export default {
        name: 'MainRight',
        components: {
            
        }
    }
</script>

