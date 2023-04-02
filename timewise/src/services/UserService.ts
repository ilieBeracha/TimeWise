import axios from "axios";
import { UserInterface } from "../models/UserModel";
import { BASE_URL } from "./config";

class UserService {

    async Register(user: UserInterface) {
        const results = await axios.post(`${BASE_URL}/register`, user);
        return results;
    }

    async Login(user: UserInterface) {
        const results = await axios.post(`${BASE_URL}/login`, user);
        return results;
    }

    async googleLogin(user: UserInterface) {
        console.log(user);

        const results = await axios.post(`${BASE_URL}/googlelogin`, user);
        return results;
    }
}

export const userService = new UserService();