<template>
    <h1>Welcome to the Home page, user!</h1>
</template>

<script>
export default{
    name: 'homePage',
    mounted(){
        // the below code was used to block user from going to home page, if they have not already logged in..
        // currently it is taken care by the beforeEnter function in the router.js

        // const user = localStorage.getItem('user-info')
        // if(!user){
        //     this.$router.push({name: 'sign-up'})
        // }
    }
}
</script>