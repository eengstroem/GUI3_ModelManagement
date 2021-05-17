import Vue from "vue";


Vue.use(Router);


expport default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: Home },
        { path: '/startPage', component: StartPage}
    ]
})

