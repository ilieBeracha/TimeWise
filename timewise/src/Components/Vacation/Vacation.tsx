import { useEffect, useState } from 'react';
import './Vacation.css';
import { imagesService } from '../../services/imagesService';

function Vacation({vacation} : {vacation:any}){
    const [image,setImage] = useState<any>();

    useEffect(()=>{
        imagesService.getPhotosByCountry(vacation.country).then((res)=> setImage(res.hits[0].largeImageURL))
    },[]);

    return(
        <div className="Vacation">
            <img src={image} alt={vacation.country} />
            <h4>{vacation.country}</h4>
            <h5>{vacation.reccomendedCity}</h5>
            <p>{vacation.description}</p>
        </div>
    )
}

export default Vacation