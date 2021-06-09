<template>
    <div>
    <Navbar :show="false"/>
    <div class="container mt-4">
        <div class="row">
            <div class="col-sm-6 mx-auto">
                <form >

                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" placeholder="Enter name" id="name" v-model="username">
                    </div>

                    <div class="form-group">
                        <label for="gender">Gender:</label>
                        <select class="form-control" id="gender" v-model="gender" placeholder="Gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <label for="birthday">Birthday:</label>
                        <input type="date" class="form-control" placeholder="Birthday" id="birthday" v-model="birthday_date">
                    </div>

                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="email">
                    </div>
                    
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="password">
                    </div>

                    <div class="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" placeholder="Confirm password" id="pwd_confirm" v-model="confirm_password">
                    </div>
                    <div class="form-group">
                        <router-link  to="/login"> Already have account? </router-link>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components:{
        Navbar
    },
    data(){
        return {
            username: "",
            email: "",
            password: "",
            confirm_password: "",
            gender: "",
            birthday_date: ""
        }
    },
    methods: {
        submit() {
            if (this.password !== this.confirm_password) {
                return false;
            }
            else {
                return true;
            }
            
        }
    }
}
</script>