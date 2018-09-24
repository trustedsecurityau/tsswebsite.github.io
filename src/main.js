import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ie9 from './util/polyfill/ie9'

Vue.config.productionTip = false

ie9.init()

export default new Vue({
    router,
    store,
    mounted () {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    },
    render: h => h(App)
}).$mount('#app')
