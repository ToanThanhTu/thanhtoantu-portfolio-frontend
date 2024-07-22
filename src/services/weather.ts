import axios from 'axios';

// getting the base url from .env.development or .env.production file
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const baseUrl = 'api/weather';

const getWeather = async () => {
    const response = await axios.get(`${apiUrl}/${baseUrl}`);
    return response.data;
};

export default { getWeather };