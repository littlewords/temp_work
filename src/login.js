import header from './components/login.vue';
import Vue from 'vue/dist/vue.min.js';
import './common/common.less';
new Vue({
    el: '#root',
    components: {
        app: header
    },
    data: {

    }
})