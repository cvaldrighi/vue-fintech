import axios from "axios"
import authHeader from "@/services/auth.header";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const API_URL = 'http://localhost:3333/';

export default {
    name: 'HomeView',
    components: {
        Form, Field, ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string().required("Username is required!"),
            value: yup.number().required("Value is required!"),
        });
        return {
            loading: false,
            message: "",
            schema,
            currentUser: '',
            currentAccount: ''
        }
    },
    mounted() {
        this.getCurrentUser();
        this.getAccountByCurrentUser();
    },
    methods: {
        async getCurrentUser() {
            const result = await axios.get(API_URL + 'user', { headers: authHeader() });
            this.currentUser = result.data;
        },

        async getAccountByCurrentUser() {
            const result = await axios.get(API_URL + 'account', { headers: authHeader() });
            this.currentAccount = result.data;
        },

        async transfer(data) {
            const result = await axios.post(API_URL + 'transaction/transfer', {
                username: data.username,
                value: parseInt(data.value)
            }, { headers: authHeader() });

            document.querySelector('Form').reset();
            this.getAccountByCurrentUser();

            if (result.status === 200) {
                this.message = "successful transaction"
            }

            setTimeout(() => {
                this.message = ""
            }, "5000")

        }
    }

}