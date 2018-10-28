import header from './components/login.vue';
import Vue from 'vue/dist/vue.min.js';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
import './common/common.less';
new Vue({
    el: '#root',
    components: {
        app: header
    },
    data: {

    }
})