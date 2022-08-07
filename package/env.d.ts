/// <reference types="vite-svg-loader" />
/// <reference types="@histoire/plugin-vue/components" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
