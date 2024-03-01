import React from 'react';
import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      part: 'snippet',
    videoId: 'M7FIvfx5J10',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '7ec71348f7msha3724a6cdee8b48p1c9881jsn89e0767a7a6c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI= async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }