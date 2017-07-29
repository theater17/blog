/**
 * Created by Lorilla on 30/07/2017.
 */
window.Vue = require('vue');
import blogPost from  './components/Blog/post.vue'
import listsComponent from  './components/Blog/list.vue'
import staggeredFade from  './components/Transition/staggered-fade.vue'
import fade from  './components/Transition/fade.vue'

Vue.component('lists-component', function (resolve, reject) {
    setTimeout(function () {
        resolve(listsComponent)
    }, 600)
});
Vue.component('blog-post', function (resolve, reject) {
    setTimeout(function () {
        resolve(blogPost)
    }, 600)
});
Vue.component('staggered-fade', function (resolve, reject) {
    setTimeout(function () {
        resolve(staggeredFade)
    }, 600)
});
Vue.component('fade', function (resolve, reject) {
    setTimeout(function () {
        resolve(fade)
    }, 600)
});
