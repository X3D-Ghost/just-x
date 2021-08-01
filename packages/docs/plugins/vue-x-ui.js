import Vue from 'vue'

// require ('@vue-x-ui')

// const moduleAlias = require('module-alias')

//
// Register alias
//
// moduleAlias.addAlias('@vue-x-ui', '/UI/src/index.js')

import VXUI from '../../UI/src/index.js'

// eslint-disable-next-line no-console
console.debug(VXUI)

Vue.use(VXUI)

/* import { XButton, XCard, XAlert } from '../UI/src'

Vue.component('XButton', XButton)
Vue.component('XCard', XCard)
Vue.component('XAlert', XAlert) */
