require("./bootstrap");

import Vue from "vue";
import VueToastr from "vue-toastr";
import VueRouter from "vue-router";
import { routes } from "./routes";

window.Vue = require("vue");

Vue.use(VueToastr, {
    /* OverWrite Plugin Options if you need */
});

Vue.use(VueRouter);

Vue.component(
    "task-component",
    require("./components/TaskComponent.vue").default
);

Vue.component(
    "create-task-component",
    require("./components/CreateTaskComponent.vue").default
);

const router = new VueRouter({
    mode: "history",
    routes
});

const app = new Vue({
    el: "#app",
    router,
    mounted() {
        // You are able to access plugin from everywhere via this.$toastr
        this.$toastr.defaultPosition = "toast-bottom-right";
    }
});
