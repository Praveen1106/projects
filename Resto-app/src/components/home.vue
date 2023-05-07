<template>
    <Header />
    <h1>Welcome to the Home page, {{ name }} !</h1>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurantList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>
                <router-link class="action" :to="'/update/'+item.id">Update</router-link>
                <a class="action" v-on:click="deleteRestaurant(item.id)">Delete</a>
            </td>
        </tr>
    </table>
</template>

<script>
import Header from './header.vue'
import axios from 'axios'

export default{
    name: 'homePage',
    components : {
        Header
    },
    data(){
        return{
            name: '',
            restaurantList: []
        }
    },
    methods : {
        async deleteRestaurant(id){
            let restaurants = await axios.delete('http://localhost:3000/restaurant/' + id)
            console.log(restaurants);
            this.loadData()
        },
        async loadData(){
            let result = localStorage.getItem('user-info')
            this.name = JSON.parse(result)[0].name

            let restaurants = await axios.get('http://localhost:3000/restaurant')
            this.restaurantList = restaurants.data
            console.log(this.restaurantList)
        }
    },
    async mounted(){
        this.loadData()
    }
}
</script>

<style>
table{
    display: table;
    margin-left: auto;
    margin-right: auto;
}
td{
    width: 170px;
    height: 45px;
    border: 1px solid #C9D6DF;
    background: #C9D6DF;
    border-radius: 5%;
}

.action{
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;
    color: darkblue;
}

.action:hover{
    cursor: pointer;
}
</style>