<template>
  <div>
    <!-- the showAddTask div is used to show or hide the addTask form -->
    <!-- it takes 1 manual event @add-task, taht is emitted when the submit form button is clicked -->
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"  />
    </div>
    <!-- the showUpdate div is used to show or hide the UpdateTask form -->
    <!-- it takes manual event: @update-task,emitted when the submit form button is clicked -->
    <!-- it passes a prop to the updateTask page conating the data of the task that is to be updated -->
    <div v-show="showUpdate">
      <UpdateTask :taskToUpdateData="taskToUpdateData" @update-task="updateDataRecieved"/>
    </div>
    <!-- Taskspage takes manual events: toggle-reminder, to toggle the task.reminder.. @update-task, to open the updateTAsk form with prefilled data.. @delete-task, to dlete a particular task..  -->
    <!-- it passes al the tasks as a prop using :tasks -->
    <TasksPage @toggle-reminder="toggleTask" @update-task="updateTask" @delete-task="deleteTask" :tasks="this.tasks"/>
  </div>
</template>

<!-- HomePage.vue is renderd when we route to thhe home page -->

<script>
import TasksPage from '../components/TasksComp.vue'
import AddTask from '../components/AddTask.vue'
import UpdateTask from '../components/UpdateTask.vue'

export default{
  name: 'homePage',
  components: {
    TasksPage,
    AddTask,
    UpdateTask
  },
  props: {
    showAddTask: Boolean,
    showUpdateTask: Boolean
  },
  data(){
    return{
      tasks: [],
      taskToUpdateData : {
        text: '',
        day: '',
        reminder: false
      },
      showAdd: this.showAddTask,
      showUpdate: this.showUpdateTask
    }
  },
  methods : {
    // called when the addTask form is filled and submit button pressed..
    async addTask(task){
      console.log(task);
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body : JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
      console.log(this.tasks)

      
    },
    // called when the delete button on individual tasks is pressed ..
    async deleteTask(id){
      // console.log("task", id);
      if(confirm("Are you sure?")){

        const res = await fetch('http://localhost:5000/tasks/' + id, {
          method: 'DELETE',
        })

        res.status == 200 ? (this.tasks = this.tasks.filter((task) => task.id != id)) :
        (alert("error deleting data"))
      }
    },

    // this function opens the UpdateTask form if the addTask form is closed..
    async updateTask(id){
      if(!this.showAddTask){     //this if condition ensures that update task form doesnt open when add task is open
        console.log(id);
        this.showUpdate = true
        this.showAdd = false
        const taskToUpdate = await this.fetchTask(id)
        console.log(taskToUpdate);
        this.taskToUpdateData = taskToUpdate
        // this.taskToUpdateData.day = taskToUpdate.day
        // this.taskToUpdateData.reminder = taskToUpdate.reminder
        // this.taskToUpdateData.text = taskToUpdate.text
        console.log(this.taskToUpdateData)
        // this is emtted to inform the app.vue that the upate form is now opened.. this woks only if addTask form is closed..
        this.$emit('update-status', this.showUpdate)
      }
    },
    // called when the updteTask form is filled and submit button pressed.. recives the updated data of the task
    async updateDataRecieved(task){
      console.log(task)
      this.showUpdate = false
      const res = await fetch('http://localhost:5000/tasks/' + task.id , {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(task)     
      })

      var data = await res.json()
      console.log(data)

      this.tasks = this.tasks.map((data) => data.id === task.id ? 
      {...task, reminder: task.reminder, text:task.text, day: task.day} : data
      )
      // this is emtted to inform the app.vue that the upate form is now closed, and the addTask form can be opened now, if required..
      this.$emit('update-status', this.showUpdate)
    },

    // used to toggle the reminder of a particular task
    async toggleTask(id){
      console.log(id)
      let taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      console.log(updTask)

      const res = await fetch('http://localhost:5000/tasks/' + id , {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(updTask)     
      })

      const data = await res.json()
      console.log(data)

      this.tasks = this.tasks.map((task) => task.id === id ? 
      {...task, reminder: data.reminder} : task
      )
    },

    // used to ftch all the tasks
    async fetchTasks(){
      let res= await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    },

    // used to fetch a particuar task based on the id provided
    async fetchTask(id){
      let res= await fetch('http://localhost:5000/tasks/' + id)
      const data = await res.json()
      return data
    },
  },

  // to accept all the tasks in the this.tasks
  async created(){
    this.tasks = await this.fetchTasks()
    console.log(this.showAdd, this.showUpdate)
  }
}
</script>