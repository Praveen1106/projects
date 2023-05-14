<template>
    <div v-for="task in tasks" :key="task.id">
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @update-task="$emit('update-task', task.id)" @delete-task="$emit('delete-task' , task.id)" :task="task"/>
    </div>
</template>

<script>
import Task from './TaskComp'
export default{
    name: "tasksComp",
    props: {
        tasks: Array
    },
    components :{
        Task
    },

    // delete-task: when delete button is pressed
    // toggle-reminder: to toggle between reminder
    // update-task: when update button is pressed
    emits : ['delete-task', 'toggle-reminder', 'update-task']
}
</script>