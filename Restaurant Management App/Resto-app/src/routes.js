import home from './components/home.vue';
import signup from './components/signUp.vue';
import {createRouter, createWebHistory} from "vue-router";
import login from './components/login.vue'
import add from './components/add.vue'
import update from './components/update.vue'

const routes = [
    {
        name: 'sign-up',
        component: signup,
        path: "/sign-up",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(user){
                next({
                    path: "/"
                })
            }
            else{
                next();
            }
        }
    },
    {
        name: 'login',
        component: login,
        path: "/login",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(user){
                next({
                    path: "/"
                })
            }
            else{
                next();
            }
        }
    },
    {
        name: 'homePage',
        component: home,
        path: "/",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(!user){
                next({
                    path: "/login"
                })
            }
            else{
                next();
            }
        }
    },
    {
        name: 'add',
        component: add,
        path: "/add",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(!user){
                next({
                    path: "/login"
                })
            }
            else{
                next();
            }
        }
    },
    {
        name: 'update',
        component: update,
        path: "/update/:id",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(!user){
                next({
                    path: "/login"
                })
            }
            else{
                next();
            }
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;