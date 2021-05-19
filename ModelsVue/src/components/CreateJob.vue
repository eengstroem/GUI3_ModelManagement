<template>
    <div class="container" id="create">
        <h3>Users:</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <th scope="row">{{model.}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.address.city}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>



</script>