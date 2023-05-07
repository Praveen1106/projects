<template>
    <Header />
    <h1>Welcome to the Add restaurant page, {{name}} !</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter restaurant address" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter restaurant contact" v-model="restaurant.contact">
        <button type="button" v-on:click="addRestaurant">Add restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './header.vue'
export default{
    name: 'homePage',
    components : {
        Header
    },
    data(){
        return{
            name: '',
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    methods: {
        async addRestaurant(){
            console.log(this.restaurant)
            let result = null
            if(this.restaurant.name.length > 0 && this.restaurant.address.length > 0 && this.restaurant.contact != '') {
                    result = await axios.post("http://localhost:3000/restaurant", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                })
            }

            if(result != null && result.status == 201){
                this.$router.push({name: "homePage"})
            }
        }
    },
    mounted(){
        let result = localStorage.getItem('user-info')
        this.name = JSON.parse(result)[0].name
    }
}
</script>