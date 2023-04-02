import axios from "axios";
import { GMAIL_URL, oauth2Endpoint } from "./config";

class GmailService {
    async getMails(token: string) {
        const results = await axios.get(`${GMAIL_URL}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return results;
    }

}

export const gmailService = new GmailService();