<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">Image Gallery</router-link> 
        <div class="menu right">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">Gallery</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a class="ui item"  @click="logout">Log Out</a>
            </div>
            <div v-else>
                <a href="#" class="ui item" @click="login">LogIn</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default{
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['login', 'logout'])
    }
</script>

<style scoped>
.horizontal{
    display: flex;
    flex-direction: row;
}
</style>
