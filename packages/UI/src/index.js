import * as components from "./components";

/* import {
  XButton,
  XCard,
  XAlert,
  XFrameAspect,
  XEmbed,
  XLink,
  XHeading,
  XInput,
} from './components' */

// require('./style/main.scss')
// export * as components from './components'

// export { XButton }

// export default components

// import './style/main.scss'
/* export { XButton: components.XButton }
export { components.XCard }
export { XAlert }
export { XFrameAspect }
export { XEmbed }
export { XLink }
export { XHeading }
export { XInput } */

/* const VXUI = (Vue) => {
  // material(Vue)
} */

// export scss
export default {
  install(Vue, options) {
    // console.log('install')
    Object.values(components).forEach((component) => {
      // console.log(component)
      Vue.component(component.name, component);
    });
  },
};
