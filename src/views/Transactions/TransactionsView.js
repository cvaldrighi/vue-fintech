import axios from "axios";
import authHeader from "@/services/auth.header";
import { mapState, mapMutations } from "vuex";

const API_URL = 'http://localhost:3333/transaction';

export default {
    name: 'TransactionsView',
    data() {
        return {
            filteredData: null,
            transactions: [],
        }

    },
    computed: {
        ...mapState(['filterMenu']),
    },
    mounted() {
        this.getTransactions()
    },
    methods: {
        ...mapMutations(['TOGGLE_FILTER_MENU']),
        filteredTransactions(e) {
            if (e.target.innerText === 'All') {
                this.filteredData = null;
                this.getTransactions();
                return;
            }
            this.filteredData = e.target.innerText;
        },
        async getTransactions() {
            const result = await axios.get(API_URL + '/user', { headers: authHeader() });
            this.transactions = result.data;
        },
    }

}