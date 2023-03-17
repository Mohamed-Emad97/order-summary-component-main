import React from 'react';
import heroPic from "../assets/images/illustration-hero.svg";

export default function Card() {
  return (
    <>
        <section id="card">
            <main className="center p-5">
                <div className="CardContent center flex-column rounded-4">
                    <div className="bgImg w-100">
                        <img src={heroPic} alt="" className="w-100" />
                    </div>
                    <div className="content p-5 text-center">
                        <h3 className='fw-bolder'>Order Summary</h3>
                        <p>
                            You can now listen to millions of songs, <br/>
                            audiobooks, and podcasts on any device <br/>
                            anywhere you like!
                        </p>
                    </div>
                    <div className="divider d-flex rounded-3 align-items-center">
                        <div className="icon fs-2 rounded-circle center">
                            <i className="fa-solid fa-music"></i>
                        </div>
                        <div className="desc">
                            <h3 className='fw-bolder'>Annual Plan</h3>
                            <p>$59.99/year</p>
                        </div>
                        <a href="" className='changeBtn fw-bold'>Change</a>
                    </div>
                    <a href="" className='btn btnMain text-center w-50 p-2 px-3 rounded-3 fw-bolder'>Proceed to Payment</a>
                    <div className="cancel pb-4 ">
                        <a href="" className='cancelBtn fw-bold text-center'>Cancel Order</a>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}
