import VXUI from "./src";
// export { VXUI }
export default {
  install(Vue, options) {
    Vue.myGlobalMethod = function () {
      // некоторая логика ...
    };
    Vue.use(VXUI);
  },
};
