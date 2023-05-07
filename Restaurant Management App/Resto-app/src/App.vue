<template>
<router-view/>
</template>

<script>


export default {
    name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1E2022;
}

body{
  margin: 0;
  padding: 0;
  background-color: #F0F5F9;
}

.logo{
    width: 100px;
}

.register, .login, .add, .update{
  border: 1px solid #C9D6DF;
    width: 400px;
    margin: auto;
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #C9D6DF;
    border-radius: 20%;
}

.register p, .login p{
  margin-bottom: 0px;
}

.register p a, .login p a{
  text-decoration: none;
  color: #1E2022;
}

.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 1px solid #52616B;
}

.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid #52616B;
    cursor: pointer;
    background: #52616B;
    color: white;
}
</style>
