<template>
    <img src="../assets/logo.jpg" alt="logo" class="logo">
    <h1>Sign Up!</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" >
        <input type="email" v-model="email" placeholder="Enter Email" >
        <input type="password" v-model="password" placeholder="Enter Password" >
        <button v-on:click="signUp" type="submit">submit</button>
        <p>
            <router-link to="/login">login</router-link>
        </p>
    </div>
</template>


<script>
import axios from 'axios';

export default{
    name: 'signUp',
    data()
    {
        return{
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp(){
            var posts = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log(posts)
            if(posts.status == 201){
                // alert("User signed up!!")
                localStorage.setItem("user-info", JSON.stringify(posts.data))
                this.$router.push({path: '/'})
            }
        }
    },
    mounted(){
        // the below code was used to block user from going to login page, if they have already logged in..
        // currently it is taken care by the beforeEnter function in the router.js

        // const user = localStorage.getItem('user-info')            
        // if(user){
        //     this.$router.push({name: 'home'})
        // }
    }

}
</script>

<style>

</style>