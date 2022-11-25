// this is going to be utility fn for api data
import axios from "axios";

// declare url here for better understanding
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,
    options);

     return data;  //so this will just return data
    // so whatever req we want to make want to start with base_url
  }
