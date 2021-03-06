/**
 * Created by Lorilla on 21/07/2017.
 */
const Home = resolve => require(['./components/Blog/index.vue'], resolve);
const Login = resolve => require(['./components/Auth/Login_.vue'], resolve);

export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }

]