import axios from 'axios';

export class AuthenticationService {

    static login(email, password) {
        return axios.post("http://localhost:8080/auth/login", {email, password});
    }

}