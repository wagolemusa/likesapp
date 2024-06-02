"use client";

import React from 'react';


import { AirportData } from './AirData';

const AirPort = () => {

  return (
    <>
    <section className='youtubeAir'>
      <div className='container'>
        <div className='row'>
          <div className='youtubeback1'>
          <div className='col-md-6'>
            <h2>You have Liked All <span>Restaurants</span>In the World</h2>
          </div>
          <div className='col-md-6'>
            <h2>Contact <span>Admin</span> for  <br/>your Reword</h2>

            <a href='/message' className='but012 btn'>Contact</a>
          </div>
          </div>
        </div>
      </div>
    </section>

    <div className='you011'>
        <div className='row'>
        {AirportData.map((video) => (
          <div className='col-md-4'>  
            <h3>{video.title}</h3>  
            <iframe width="420" height="345" src={video.url}></iframe>
          </div>
        ))}
        </div>
    </div>
    </>
    
  );
};

export default AirPort;

