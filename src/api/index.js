//axios makes the api requests
import axios from 'axios';

const url =  "https://covid19.mathdro.id/api";

export const fetchData = async ()=>{
    //if fetch is successful
    try{
        const {data} = await axios.get(url);

        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }

        return modifiedData;
    } catch(error){

    }
}
