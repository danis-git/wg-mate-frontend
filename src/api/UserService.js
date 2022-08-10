import axios from "axios";

export class UserService {

    // if null user isn't logged in
    static user;

    static async getUserByEmail(email) {
        return axios.get(`http://localhost:8080/user/${email}`);
    }

    static setUser(user) {
        this.user = user;

        sessionStorage.setItem("user", JSON.stringify(user))
    }

    static initialize() {
        console.log("Nice user init -----------------");
        const userJson = sessionStorage.getItem("user");

        if (userJson) {
            this.user = JSON.parse(userJson);
            console.log(JSON.stringify(this.user));
        } else {
            console.log("User isn't set");
        }
    }

}
