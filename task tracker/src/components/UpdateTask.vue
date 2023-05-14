<template>
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Task</label>
        <!-- the :value takes the value of the props,a d the @input calls a function when a input is made -->
        <input type="text" :value="taskToUpdateData.text" @input="textUpdated" name="text" placeholder="Add Task" />
      </div>
      <div class="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          :value="taskToUpdateData.day"
          @input="dayUpdated"
          name="day"
          placeholder="Add Day & Time"
        />
      </div>
      <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" :checked="taskToUpdateData.reminder" @input="reminderUpdated" name="reminder" />
      </div>
  
      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  </template>
  
  <script>
  export default {
    name: 'UpdateTask',
    data() {
      return {
        text: '',
        day: '',
        reminder: '',
        // text : this.taskToUpdateData.text,
        // day : this.taskToUpdateData.day,
        // reminder : this.taskToUpdateData.reminder,
      }
    },
    props: ['taskToUpdateData'],
    methods: {
      // called when the text column recieves an input
        textUpdated(event){
            this.text = event.target.value
            console.log(this.text, "event.target =", event.target.value)
        },
      // called when the day column recieves an input

        dayUpdated(event){
            this.day = event.target.value
        },

      // called when the reminder checkbox recieves an input
        reminderUpdated(event){
            this.reminder = event.target.checked
            console.log(this.reminder, "event.target =", event.target.checked)
        }, 

      // called when the update text form is submitted 
      onSubmit(e) {
        e.preventDefault()
        console.log(this.reminder)

        // in below ifs, we are checking if no input is made in the text/day/reminder section.. if not made, then we are updating the values to the original value of the task, recieved from props
        if (!this.text) {
        //   alert('Please add a task')
          this.text = this.taskToUpdateData.text
        }
        if(!this.day ){
            this.day = this.taskToUpdateData.day
        }
        
        if(this.reminder === ''){
          this.reminder = this.taskToUpdateData.reminder
          console.log(this.reminder)
        }
  
        const newTask = {
        //   id: Math.floor(Math.random() * 100000),
          text: this.text,
          day: this.day,
          reminder: this.reminder,
          id: this.taskToUpdateData.id
        }

        

        console.log(newTask)
        
        // this emit will call the updateDataRecieved() in the homPage.vue
        this.$emit('update-task', newTask)
  
        this.text = ''
        this.day = ''
        this.reminder = ''
      },
    },
    // mounted(){
    //   console.log("from mounted", this.taskToUpdateData.reminder)
    // }
    // watch: {
    //     taskToUpdateData: function(newVal, oldVal){
    //         console.log(newVal , " replaces", oldVal)
    //     }
        
    // },

  }
  </script>
  
  <style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  
  .form-control {
    margin: 20px 0;
  }
  
  .form-control label {
    display: block;
  }
  
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .form-control-check label {
    flex: 1;
  }
  
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
  </style>