<template>
    <nav class="navbar navbar-expand">
        <a href="/" class="navbar-brand">finTech</a>
        <div class="navbar-nav mr-auto">
        </div>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/register" class="nav-link">
                    <font-awesome-icon icon="user-plus" /> Sign Up
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/login" class="nav-link">
                    <font-awesome-icon icon="sign-in-alt" /> Login
                </router-link>
            </li>
        </div>

        <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" @click.prevent="logOut">
                    <font-awesome-icon icon="sign-out-alt" /> LogOut
                </a>
            </li>
        </div>
    </nav>
</template>
<script src="./NavBar.js"></script>