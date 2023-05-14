<template>
    <!-- double click will emit the toggle reminder event, with the task.id of the concerned task -->
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder?'reminder':'' , 'task']">
        <h3>
            {{ task.text }}
            <div class="icons">
                <i @click="onUpdate(task.id)" class="fa-solid fa-pen-to-square fa-sm upd"></i>
                <i @click="onDelete(task.id)" class="fa-solid fa-xmark fas"></i>
            </div>
        </h3>
        <p>
            {{ task.day }}
        </p>
    </div>
</template>
<script>
export default{
    name: 'TaskComp',
    props :{
        task: Object
    },
    methods:{
        onDelete(id){
            // console.log(id)
            this.$emit('delete-task', id)
        },
        onUpdate(id){
            this.$emit('update-task', id)
        }
    }


}
</script>
<style scoped>
.upd{
    margin-right: 10px;
    /* width: 20px; */
}
.fas{
    color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>