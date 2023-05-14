import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// the createApp() func is imported from vue, that is used to mount the app.vue component into the 
// div #app at the index.html.. 
// the router is used to route the route the differnt views in the app.vue