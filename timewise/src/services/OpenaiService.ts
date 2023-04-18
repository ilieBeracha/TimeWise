import axios from "axios";
import { PrefrencesInterface } from "../models/PrefrencesInterface";
import { BASE_URL } from "./config";

class OpenaiService{
    async sendPrefrencesToOpenai(pref:PrefrencesInterface){
        const results = (await axios.post(`${BASE_URL}/getprefrences`,pref)).data;
        return results;
    }
}

export const openaiService = new OpenaiService()