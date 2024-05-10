"use client";

import React, { useContext, useEffect } from 'react';
import { useSession } from "next-auth/react";
import AuthContext from "../../context/AuthContext";
import Link from 'next/link';

const Home = () => {

    const { user, setUser } = useContext(AuthContext);

    const { data } = useSession();
  
    console.log("ddsdds", user);
  
    useEffect(() => {
      if (data) {
        setUser(data?.user);
      }
    }, [data]);
  
    // const { user } = useContext(AuthContext);

    // console.log("bbbbbbbbbbbbb", user)

    
    return (
        <>
            <section className="homes">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>EARN BY LIKE TODAY! YOUR IDLE CASH IS WORTH MORE THAN YOU CAN IMAGINE</h2>

                            <Link href={`/${user.links}`}>
                                <b className="btn0012">Link Hotel</b>
                            </Link>     
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>
            <section className="homeTwo">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 home013">
                            <video playsinline="" autoplay="" preload="none" poster="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/955d2861b64792d1e38e946cdcda6dc6.webp" loop=""><source type="video/webm" src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/befe8cc0a71f86d0ecbc82af510296f3.webm" data-src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/befe8cc0a71f86d0ecbc82af510296f3.webm" />
                                <source type="video/mp4" src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/701892a5a456e11266c7a9f36141b3e6.mp4" data-src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/701892a5a456e11266c7a9f36141b3e6.mp4" /></video>
                        </div>
                        <div className="col-md-6">
                            <div className="stepRefer">
                                <center>
                                    <p>Earn commission for referring new users to the system</p>
                                    <button className="btnStep1">Refer</button>
                                </center>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;