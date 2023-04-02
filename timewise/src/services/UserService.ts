import axios from "axios";
import { UserInterface } from "../models/UserModel";

class UserService {

    async Register(user: UserInterface) {
        const results = await axios.post('http://localhost:3010/register', user);
        return results;
    }

    async Login(user: UserInterface) {
        const results = await axios.post('http://localhost:3010/login', user);
        return results;
    }
}

export const userService = new UserService();