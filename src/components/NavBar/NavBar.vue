<template>
    <nav class="navbar navbar-expand">
        <div class="navbar-brand"><img src="@/assets/wallet.png">finTech</div>
        <div class="navbar-nav mr-auto">
        </div>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/register" class="nav-link">
                    <font-awesome-icon icon="user-plus" /> Register
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
<style lang="scss" scoped>
nav {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(0, 0, 0);

    .navbar-brand {
        color: #fff;
        text-align: center;

        img {
            width: 25px;
            height: 25px;
            margin-right: 0.5rem;
        }
    }

    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            color: aqua;
        }

        &:focus {
            color: #fff;
        }
    }

}
</style>