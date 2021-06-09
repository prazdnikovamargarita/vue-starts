<template>
    <div>
        <Navbar :show="true"/>
        <div class="container mt-3">
            <h2>Home page</h2>
            <p class="text-left mt-3">
                This application can help you markup your articles for Named Entity Recognition in order to train neural networks. Also include 6 type of tags: 
                <ul>
                    <li>1 Persons - for mark persons (ex. Bill Gates)</li>
                    <li>2 Locations - for mark locations (ex. Redmond)</li>
                    <li>3 Organizations - for mark organizations (ex. Microsoft Corporation)</li>
                    <li>4 Date - for mark dates (months, days, year,etc)</li>
                    <li>5 Nationality - for mark nationality(ex. American, Ukrainian)</li>
                    <li>6 Title - for marks title, position, names etc. </li>
                </ul>
                To try it please refer to: <router-link to="/markup"> Markup </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components : {
        Navbar
    }
}
</script>

<style scoped>
.container {
    width: 70%;
}
</style>