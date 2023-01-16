<template>
    <div class="container col-12">
        <div class="header col-12">
            <div class="left col-10">
                <h3>transactions</h3>
            </div>
            <div class="right col-2">
                <div @click.prevent="TOGGLE_FILTER_MENU" class="filter">
                    <span>Filter<span v-if="filteredData">: {{ filteredData }}</span></span>
                    <font-awesome-icon icon="search" />
                    <ul v-show="filterMenu" class="filter-menu">
                        <li @click.prevent="filteredTransactions">All</li>
                        <li @click.prevent="filteredTransactions">Cash In</li>
                        <li @click.prevent="filteredTransactions">Cash Out</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="transactions col-12">
            <!-- <div class="table">
                <div class="heading">
                    <p>ID</p>
                    <p>debited</p>
                    <p>credited</p>
                    <p>value</p>
                    <p>date</p>
                </div>
                <div v-for="(item, index) in transactions" class="item" :key="index">
                    <p>{{ item.id }}</p>
                    <p>{{ item.debitedAccountId }}</p>
                    <p>{{ item.creditedAccountId }}</p>
                    <p>${{ item.value }}</p>
                    <p>{{ item.createdAt }}</p>
                </div>
            </div> -->
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Debited</th>
                        <th scope="col">Credited</th>
                        <th scope="col">Value</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in transactions" class="item" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.debitedAccountId }}</td>
                        <td>{{ item.creditedAccountId }}</td>
                        <td>${{ item.value }}</td>
                        <td>{{ item.createdAt }}</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>

</template>
<script src="./TransactionsView.js"></script>
<style lang="scss" scoped>
.container {

    .header {
        display: flex;
        min-height: 4rem;
        border: none;
        border-radius: 20px;
        margin-top: 3rem;
        background-color: rgba(0, 0, 0, 0.2);


        .left {
            margin-top: 1rem;
            margin-left: 1rem;

            h3 {
                color: aqua;
                font-weight: 300;
            }
        }

        .right {
            margin-top: 1rem;

            .filter {
                color: #fff;
                cursor: pointer;

                span {
                    margin-right: 0.5rem;
                }
            }

            .filter-menu {
                width: 120px;
                top: 25px;
                list-style: none;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.10);
                background-color: rgb(56, 55, 55);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;

                li {
                    cursor: pointer;
                    font-size: 12px;
                    padding-top: 10px;

                    &:hover {
                        color: aqua;
                    }
                }
            }
        }
    }

    .transactions {
        display: flex;
        min-height: 4rem;
        border: none;
        border-radius: 20px;
        margin-top: 1rem;
        background-color: rgba(0, 0, 0, 0.2);


        table {
            color: #fff;
            margin: 1rem;
        }
    }
}
</style>