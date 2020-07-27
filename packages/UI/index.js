import VXUI from './src'
export default {
  install(Vue, options) {
    Vue.myGlobalMethod = function () {
      // некоторая логика ...
    }
    Vue.use(VXUI)
  },
}
