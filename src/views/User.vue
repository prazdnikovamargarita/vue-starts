<template>
    <div>
        <Navbar :show="true"/>
        <div class="container">
            <p>User Info</p>            
            <table class="table table-bordered">
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td id="info-username">{{username}}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td id="info-email">{{email}}</td>
                </tr>
                <tr>
                    <td>Birthday:</td>
                    <td id="info-birthday">{{birthday}}</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td id="info-gender">{{gender}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components :{
        Navbar
    },
    data () {
        return {
            username: "Oleksandr",
            email: "oleksandr@gmail.com",
            birthday: "01.01.2000",
            gender: "Male"
        }
    }
}
</script>