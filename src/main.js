import { createApp } from 'vue'
import HomePage from './HomePage.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Font Awesome 라이브러리에 아이콘 추가
library.add(fas, far, fab)

// 앱 생성
const app = createApp(HomePage)

// 전역 컴포넌트로 FontAwesomeIcon 등록
app.component('font-awesome-icon', FontAwesomeIcon)

// 앱 마운트
app.mount('#app')
