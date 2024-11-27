<template>
    <header-bar />
    <left-bar />
    <main-center />
    <right-bar />
</template>

<script>
import MainCenter from '../MainPage/MainCenter.vue'
import HeaderBar from '../Template/HeaderBar.vue'
import LeftBar from '../Template/LeftBar.vue'
import RightBar from '../Template/RightBar.vue'
export default {
  components: { HeaderBar, LeftBar, RightBar, MainCenter },
  name: 'KrRep'
}
</script>