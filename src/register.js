import app from './components/register.vue';
import Vue from 'vue/dist/vue.min.js';
import './common/common.less';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
new Vue({
    el: '#root',
    components: {
        app,
    },
    data: {

    }
})