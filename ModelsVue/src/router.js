import Vue from "vue";
import Router from "vue-router";
import ManagerComponent from './components/ManagerComponent.vue';
import CreateJob from './components/CreateJob';

Vue.use(Router);


export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/CreateJob",
            name: "CreateJob",
            component: CreateJob
        },
        {
            path: "/ManagerComponent",
            name: "ManagerComponent",
            component: ManagerComponent
        }
    ]
});

