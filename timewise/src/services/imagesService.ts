import axios from "axios"
import { PIXABAY_API_KEY, UNSPLASH_ACCESS_KEY } from "./config"

class ImagesService{
    async getPhotosByCountry(country:string){
        const response = (await axios.post(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${country}`)).data
        return response
    }
}

export const imagesService = new ImagesService()