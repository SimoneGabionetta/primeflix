import axios from 'axios';

const api = axios.create({

    baseURL:'https://api.themoviedb.org/3/'
});

export default api;

//BASE DA API :https://api.themoviedb.org/3/
//URL DA API: /movie//now_playing?api_key=c1e0e1d5126c2a9f5604360c8d187b94&language=pt-BR