<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add restaurant</router-link>
    <a v-on:click="logout" href="/">Logout</a>
</div>
</template>
<script>
export default{
    name: 'headerPage',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style>
.nav{
    background: #1E2022;
    overflow: hidden;
}
.nav a{
    color: #F0F5F9;
    float: left;
    padding: 14px 16px;
    margin-right: 5px;
    text-decoration: none;
    text-align: center;
    font-size: 17px;
}

.nav a:hover {
    background: #F0F5F9;
    color: #1E2022;
}
</style>