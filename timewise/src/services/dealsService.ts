import axios from "axios";

class DealsService {
  getDealsByParams() {
    const response = axios
      .get("https://api.example.com/deals", {
        params: {
          destination: "any",
          departure_date: "any",
          duration: "any",
          price_range: "any",
        },
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        // Process the travel deals data
      })
      .catch((error) => console.error(error));
    return response;
  }
}

export const dealsService = new DealsService();
