<template>
  <img src="../assets/logo.jpg" alt="logo" class="logo" />
  <h1>Login!</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" type="submit">submit</button>
    <p>
      <router-link to="/sign-up">Signup</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "loginPage",
  data(){
    return{
        email: '',
        password: '',
    }
  },
  methods: {
    async login(){
        let result =await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        console.log(result);
        if(result.status == 200 && result.data.length > 0){
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({path: '/'})
        }

        else if( result.status == 200 && result.data.length == 0){
            alert("The given creadentials did not match an existing account. Please enter correct credentials or signup.")
        }
    }
  }
};
</script>
