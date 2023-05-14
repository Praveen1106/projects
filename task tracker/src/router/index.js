import {createRouter, createWebHistory} from 'vue-router'
import about from '../views/AboutView'
import home from '../views/HomePage.vue'

//all routes contained here..
const routes = [
    {
        path: '/about',
        name: 'about',
        component: about,
    },
    {
        path: '/',
        name: 'home',
        component: home,
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;