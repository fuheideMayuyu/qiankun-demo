import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(ElementUI);
import { registerMicroApps, start } from 'qiankun';
const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000', // 默认会加载这个html，解析里面的js, 动态执行（子应用必须支持跨域）
    container: '#vue', // 容器
    activeRule: '/vue' // 激活路径
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', 
    container: '#react',
    activeRule: '/react'
  }
]
// 注册子应用
registerMicroApps(apps);
start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
