import axios from 'axios';

const API_URL = 'http://localhost:3333/auth/';

class AuthService {
    async login(user) {
        const response = await axios
            .post(API_URL + 'local/signin', {
                username: user.username,
                password: user.password
            });
        if (response.data.access_token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        return axios.post(API_URL + 'local/signup', {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();