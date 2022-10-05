import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    useEffect(() => {
        document.title = "Home"
        document.getElementById('navAtt-Login').classList.remove('active')
        document.getElementById('navAtt-Register').classList.remove('active')
        document.getElementById('navAtt-Home').classList.add('active')
    }, [])
    return (
        <div>
            <Navbar />
            <div class="wrapper mt-5">
                <section class="hero">
                    <div class="jumbotron jumbotron-fluid mb-0">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-md-10 col-lg-6">
                                    <h1 class="display-5 mb-5">Best Book in Google </h1>

                                    <p class="lead">Where you choose to work has impact on your productivity and creativity. It also says a lot about your business. We are the right office space.</p>

                                    <p class="lead">
                                        <a class="btn btn-primary btn-lg" href="#sec-pricing" role="button">Reserve Your Spot</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sec-about" class="sec-about pt-5 pb-5">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-md-10 col-lg-8">
                                <h1 class="h4">About us</h1>
                                <p class="mt-4 mb-4">Co-working spaces are brilliant for smaller companies of up to 4 people who want a regular workspace. Cost effective, flexible and full of a vibrant energy that comes from hundreds of like-minded people going it alone.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sec-features" class="sec-features pt-5 pb-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <h3 class="h4">Lockers</h3>

                                <hr />

                                <p>Lockers come in all different shapes and sizes and can be hired in any building, even if it’s not your home building.</p>
                            </div>

                            <div class="col-md-6 text-center">
                                <img src='https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            </div>

                            <div class="col-md-6">
                                <h3 class="h4">Building address/Mail handling</h3>

                                <hr />

                                <p>A Czech business address for you and your mail. We can either hold your mail for you to collect, or forward it on to wherever you are.</p>
                            </div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <h3 class="h4">Call answering</h3>

                                <hr />

                                <p>We’ll provide someone to answer your calls professionally using your company name. They’ll be put through to you, or we’ll take a message if you’re unavailable.</p>
                            </div>

                            <div class="col-md-6 text-center">
                                <img src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sec-pricing" class="sec-pricing">
                    <div class="container">
                        <h1 class="h4 mb-5 text-center display-4">Great prices for everyone</h1>

                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="card text-center p-4">
                                    <div class="card-block">
                                        <h4 class="card-title h5">Individual</h4>

                                        <h5 class="card-title h6">100 &euro;/month</h5>

                                        <p class="card-text">The flexible place to grow your projects in a community of start-ups, freelancers and entrepreneurs, flex desk.</p>

                                        <a href="#" class="btn btn-primary">Find out more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-block p-4">
                                        <h4 class="card-title h5">Small Group</h4>

                                        <h5 class="card-title h6">320 &euro;/month</h5>

                                        <p class="card-text">Your own personal area in an open space: desk, drawers, locker and bookcase to accessorise however you like.</p>

                                        <a href="#" class="btn btn-primary">Find out more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-block p-4 justify-content-center">
                                        <h4 class="card-title h5">Large Group</h4>

                                        <h5 class="card-title h6">640 &euro;/month</h5>

                                        <p class="card-text">Your own private space, perfect for work teams of up to 50 people, inside a structure that’s always in motion</p>

                                        <a href="#" class="btn btn-primary">Find out more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home