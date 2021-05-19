<template>
    <div id="app">
        <Login></Login>
        <Manager></Manager>
    </div>
</template>

<script>
    import store from './Store/store.js';
    import Login from './components/LoginComponent.vue';
    import Manager from './components/ManagerComponent.vue'
    export default {
        name: 'app',
        store,
        components: {
            Login,
            Manager
        },
        data: () => ({
            hompage: true
        }),
        methods: {
            changeState(){
                this.homepage = false;
            }
        }
    };
</script>

<style>
</style>