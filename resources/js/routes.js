import CreateTaskComponent from "./components/CreateTaskComponent.vue";
import TaskComponent from "./components/TaskComponent.vue";

export const routes = [
    {
        path: "/vue/task/create",
        component: CreateTaskComponent,
        name: "Create"
    },
    { path: "/vue/tasks", component: TaskComponent, name: "Home" }
];
