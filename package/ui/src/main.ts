
import 'virtual:windi.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export { default as VSelect } from '@/atoms/v-select/v-select.vue'
export { default as VDialog } from '@/atoms/v-dialog/v-dialog.vue'
export { default as VContextMenu } from '@/atoms/v-context-menu/v-context-menu.vue'
export { default as VTree } from '@/atoms/v-tree/v-tree.vue'
export { default as VDetails } from '@/atoms/v-details/v-details.vue'
