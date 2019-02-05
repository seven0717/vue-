import ms from './msg'

const msg = {
  install(Vue,options){
    Vue.prototype.$msg = (chuan)=> {
      return chuan
    }
    Vue.component(ms.name,ms)
  }
};

if(typeof window != 'undefined' && window.Vue){
  window.Vue.use(msg)
}

export default msg;
