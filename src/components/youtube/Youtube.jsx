"use client";

import React, { useState, useEffect } from 'react';

import { videoData } from "./video"

const Youtube = () => {

  return (
    <>
    <section className='youtube'>
      <div className='container'>
        <div className='row'>
          <div className='youtubeback'>
          <div className='col-md-6'>
            <h2>You have Liked All <span>YouTube </span>Videos</h2>
          </div>
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
        {videoData.map((video) => (
          <div className='col-md-4'>    
            <iframe width="420" height="345" src={video.url}></iframe>
          </div>
        ))}
        </div>
    </div>
    </>
    
  );
};

export default Youtube;

