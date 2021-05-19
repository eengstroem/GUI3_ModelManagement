<template>
    <div class="home" >
        <h1>{{ msg }}</h1>
        <p>Welcome to your gamer application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
        <p>You will need to log in.</p>
        <br />
        <p>testy testy3</p>
        
        <input type="text" placeholder="Enter Username" name="email" v-model="input.email" required>

       
        <input type="password" placeholder="Enter Password" name="password" v-model="input.password" required>

        <button type="button" v-on:click="login()">Login</button>
        

    </div>

    
</template>


<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: "",
                    oldpassword: ""
                }
            }
        },
        store,
        methods: {
            async login() {
                let url = "https://localhost:44368/api/account/login";
                try {
                    let obj = 
                    {
                        Email: this.input.email, 
                        Password: this.input.password,
                        OldPassword: ""
                    }

                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(obj),//Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                        this.$store.commit("login");
                        this.input.password = "";
                        this.input.email = "";
                        //Change view to some other component// ...
                    }

                    else {
                        alert("Server returned: " + response.statusText);
                    }

                }

                catch (err) {
                    alert("Error: " + err);
                }

                return;
            },
            async changepass() {
                let url = "https://localhost:44368/api/account/password";
                try {
                    let obj = 
                    {
                        Email: this.input.email, 
                        Password: this.input.password,
                        OldPassword: this.input.oldpassword
                    }

                    let response = await fetch(url, {
                        method: "PUT",
                        body: JSON.stringify(obj),//Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json",
                            "Authorization" : "Bearer " + localStorage.getItem("token"),
                        })

                    });
                    if (response.ok) {
                        this.input.password = "";
                        this.input.email = "";
                        this.input.oldpassword = "";
                        alert("Password has been changed!")
                        //Change view to some other component// ...
                    }

                    else {
                        alert("Server returned: " + response.statusText);
                    }

                }

                catch (err) {
                    alert("Error: " + err);
                }

                return;
            },
            async logout() {
                
                localStorage.setItem("token", "");
                this.$store.commit("logout");
                this.input.password = "";
                this.input.email = "";
                  
                return;
            },
        }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

