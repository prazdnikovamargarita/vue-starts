<template>
    <div>
        <Navbar :show="false"/>
        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6 mx-auto">
                    <form >
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="username">
                        </div>

                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="password">
                        </div>

                        <div class="form-group form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox"> Remember me
                            </label>
                        </div>
                        <div class="form-group">
                            <router-link  to="/register"> Registration </router-link>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components : {
        Navbar
    },
    data() {
        return {
            "username": "",
            "password": ""
        }
    },
    methods: {
        login: function () {
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
      }
    }
    
}
</script>
