import axios from 'axios';//makes url 

const url = "https://covid19.mathdro.id/api";

export const fetchDAta = async(country) =>{
 
   let chageableUrl = url;
    if(country){
        chageableUrl = `${url}/countries/${country}`;//be carefull with the tag cotation
    }

    try{
        const {data: {confirmed, recovered,deaths,lastUpdate}} = await axios.get(chageableUrl);
           return  {confirmed, recovered, deaths, lastUpdate};
    }catch(error){
        console.log(error);
    }
}
export const fetchDailyData = async() => {
    try{
        const {data} = await axios.get("https://covid19.mathdro.id/api/daily"); //("${url}/daily"); 
             // console.log(data);
        const modifiedData = data.map((dailyData) =>({ //return object
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        })); 
        return modifiedData;
    }catch(error){
    }
}

export const fetchCountries = async() =>{
    try{
        const {data :{countries}}  = await axios.get("https://covid19.mathdro.id/api/countries");
        // console.log(data);
        return countries.map((country) => country.name);
    }catch(error){
        console.log(error);
    }
}