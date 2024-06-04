
"use client";

import React, { useContext, useEffect } from 'react';
import { useSession } from "next-auth/react";
import AuthContext from "../context/AuthContext";
import Link from 'next/link';

const Home = () => {

    const { user, setUser } = useContext(AuthContext);

    const { data } = useSession();
  
    useEffect(() => {
      if (data) {
        setUser(data?.user);
      }
    }, [data]);
  

    return (
        <>
            <section className="homes">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>
                            The influencer relies on partners to increase customer traffic.</h2>
                            
                            <h3>Your role in this work is to rate 5 stars ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ on our partner's location</h3> 
                            <br/> 
                            <p>
                                Send me a screenshot and I will pay 10R$.
                                You can earn $1,000 to $3,000 a day just by using your cell phone
                            </p>
                            

                            {user && user.links && (
                            <Link href={`/${user.links}`}>
                              <b className="btn0012">Click $ Link</b>
                            </Link>
                            )}

                            {/* <Link href={`/${user.links}`}>
                              
                            </Link>      */}
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </section>
            <section className="homeTwo">
                <div className="container">
                    <div className="row">

                          <div className="col-md-4 home013">
                            <video playsinline="" autoplay="" preload="none" poster="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/955d2861b64792d1e38e946cdcda6dc6.webp" loop=""><source type="video/webm" src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/befe8cc0a71f86d0ecbc82af510296f3.webm" data-src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/befe8cc0a71f86d0ecbc82af510296f3.webm" />
                                <source type="video/mp4" src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/701892a5a456e11266c7a9f36141b3e6.mp4" data-src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/701892a5a456e11266c7a9f36141b3e6.mp4" /></video>
                        </div>
                        <div className="col-md-8">
                            <div className="stepRefer">

                                <p>
                                For each task(s) completed, we will make payment through your telegram wallet  account.
                                </p>
                                <hr/>
                                <h3>Earn commission for referring new users to the system</h3>
                                    <button className="btnStep1">Refer</button>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;