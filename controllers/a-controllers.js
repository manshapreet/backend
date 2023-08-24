//const express = require('express');

import { UrlModel } from '../db/models/a-schems.js';

export const acontroller={
async view(request, response) {
  
    const { url } = request.body;
    console.log(url)
    try {
        console.log('yus');
    const newUrl =await UrlModel.create( {url });
    console.log('doc is ', newUrl);
    
    if(newUrl && newUrl._id){
        console.log('yus1');
        response.json({ message: 'URL added to the database' });
        console.log('yus2');
    } else {
        console.log('yus3');
        response.json({ message: 'URL not added to DAta base' });
        console.log('yus4');
    }
  } 
  catch (error) {
    response.json({ error: 'An error occurred' });
  }
},

async play(request,response){
    const playVideo = request.params.playVideo;
    console.log(playVideo)
    try{
        const newVideo = await UrlModel.findOne({'url': playVideo.url});
        console.log('URLHGJKL',newVideo.url);
        response.json({message:newVideo.url});
    }
    catch(err){
        console.log('error is',err);
    }
}

}



