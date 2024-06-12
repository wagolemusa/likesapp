"use client";

import React, { useState, useEffect } from 'react';

import { HotelData } from './HotelData';

const Hotel = () => {

  return (
    <>
    <section className='youtubeHotel'>
      <div className='container'>
        <div className='row'>
          <div className='youtubeback1'>
          <div className='col-md-6'>
            <h2>You have Liked All 7 Star Hotels in the world</h2>
          </div><hr/>
          <div className='col-md-6'>
            <h3>Contact <span>Admin</span> for  <br/>your Reword</h3>

            <a href='/message' className='but012 btn'>Contact</a>
          </div>
          </div>
        </div>
      </div>
    </section>

    <div className='you011'>
        <div className='row'>
        {HotelData.map((video) => (
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

export default Hotel;

