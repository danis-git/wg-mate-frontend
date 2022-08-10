import axios from "axios";
import {UserService} from "./UserService";


export class FlatService {

    static flat;

    static createFlat(name, area, coOwner) {
        const owner = UserService.user;
        //return axios.put(`http://localhost:8080/flat/${UserService.user}`, {flatName, area, memberEmail}); // TODO
        //axios.post("http://localhost:8080/flat/",{name,area,owner,coOwner});
        return axios.post(`http://localhost:8080/flat`, {name, area, owner, coOwner});
    }

    static getFlat(id) {
        return axios.get(`http://localhost:8080/flat/${id}`);
    }

    static setFlat(flat) {
        this.flat = flat;
        
        sessionStorage.setItem("flat", JSON.stringify(flat))
    }

    static initialize() {
        console.log("Nice flat init -----------------");
        const flatJson = sessionStorage.getItem("flat");

        if (flatJson) {
            this.flat = JSON.parse(flatJson);
            console.log(this.flat);
        } else {
            console.log("flat isn't set");
        }
    }
}
