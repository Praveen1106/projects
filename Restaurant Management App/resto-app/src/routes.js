import home from './components/home.vue';
import signup from './components/signUp.vue';
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name: 'homePage',
        component: home,
        path: "/",
        beforeEnter(to,from,next){              //takes care of navigation guarding
            const user = localStorage.getItem('user-info')
            if(!user){
                next({
                    path: "/sign-up"
                })
            }
            else{
                next();
            }
        }
    },
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;