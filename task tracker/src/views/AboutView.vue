<template>
    <h3>Version 1.0.0</h3>
    <router-link to="/">Go Home</router-link>
</template>

<!-- the AboutView is the component that is rendered when we go to the /about route -->

<script>

export default{
    name: 'AboutView',
    props: {
        showAddTask: Boolean,
        showUpdateTask: Boolean
    },
    mounted() {
        //emitting the update-status as true is used on the App.vue.. WHat we have done is we have ensured that add task form does not open when the updatetask form is open.. We are making use of the same functionality to ensure that the add task form does not open when we are on the about page.. if we dont do this then somehow the form wasnt opening but the add-task btton was changing color and text, on clicking.. we eanted to avoid this as this is an error..
        this.$emit('update-status', true)
    },
    Unmounted(){
        // to deal with the above usage, we are also ensureing this emit.. this is just for the functionality purpose..
        this.$emit('update-status', false)
    }
}
</script>