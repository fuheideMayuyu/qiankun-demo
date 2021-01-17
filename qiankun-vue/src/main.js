import Vue from 'vue'
import App from './App.vue'
import router from './router'

let instance = null
function render(props = {}){
  const { container } = props;
  instance = new Vue({
    router,
    render: h=>h(App)
  }).$mount(container ? container.querySelector('#app') : '#app') // 这里还是挂载到自己的html中，基座会拿到这个挂载后的html,将其插入进去
}
// 如果使用qiankun, 动态注入路径
if (window.__POWERED_BY_QIANKUN__) {
  console.log('注入了')
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 独立运行微应用
if(!window.__POWERED_BY_QIANKUN__){
  console.log('未注入，独立启动')
  render()
}
export async function bootstrap(){}
export async function mount(props){
  render(props);
}
export async function unmount(){
  instance.$destroy();
}