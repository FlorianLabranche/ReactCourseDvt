import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

export const NewsApi = () => {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=ce5413a9f9a145d1b42b19f45966c010`;
    return fetch(url)
    .then(statusHelper)
    .then(function(response) {
        return response.json();
      })
    .catch((error) => {
      console.error(error)
    })
    .then(data => {return data;})
};

function statusHelper(response){
    if(response.status>=200 && response.status<300){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(new Error(response.statusText));
    }
}