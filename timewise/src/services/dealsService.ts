import axios from "axios";
import { AVIATIONSSTACK_API_KEY } from "./config";

class DealsService {
  getDealsByParams() {
    const response = axios
      .get("https://api.aviationstack.com/v1/flights", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          apikey: AVIATIONSSTACK_API_KEY,
        },
        params: {
          flight_price: "true",
          dep_iata: "JFK",
          arr_iata: "LAX",
          flight_status: "active",
          limit: 10,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
      return response
  }
}

export const dealsService = new DealsService();
