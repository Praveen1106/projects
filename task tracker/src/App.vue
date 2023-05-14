<template>
  <div class="container">
  <!-- app.vue contains the things that are present on all pages of the application.. So, header (HeaderPage) and footer(FooterPage) will be present on all pages.. the <router-link> in between will route the differnt views, i.e, the home and about view, based on the route we choose to go on.. so when we are on home route, the router-link will render the home component, and on about component, it will render the about component  -->
    <HeaderPage
      @toggle-add-task="toggleAddTask"
      title="Task tracker"
      :showAddTask="showAddTask"
    />

    <!-- we are passing :showAddTask and :showUpdatetask as props in the router.. so the components that are routed can catch the props in their script section.. similarly, all will have to $emit the @update-status event with data(having true/false value) -->
    <router-view
      :showAddTask="showAddTask"
      :showUpdateTask="showUpdateTask"
      @update-status="updateStatus"
    ></router-view>

    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./components/Header.vue";
import FooterPage from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      //we need the below 2 data values because the header component has the addTask button, which is affected by the update task button present on individual tasks(TaskComp.vue) on the home component..
      showAddTask: false,
      showUpdateTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      if (!this.showUpdateTask) {
        //the above if condition ensures that add task form doesnt open when update task is open
        this.showAddTask = !this.showAddTask;
      }
    },
    updateStatus(status) {
      // console.log(status)
      this.showUpdateTask = status;
    },
  },
  watch: {
    // we watch the change in routes.. and on every route change we ensure that the addTask and the UpdateTask forms are not being shown..
    $route() {
      this.showUpdateTask = false;
      this.showAddTask = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
