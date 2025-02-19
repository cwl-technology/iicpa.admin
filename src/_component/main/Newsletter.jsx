import React from 'react'

const Newsletter = () => {
  return (

    <>
     <section className="newsletter-two">
        <div className="container">
            <div className="newsletter-two__inner">
                <div className="newsletter-two__img">
                    <img src="/assets/images/resources/newsletter-two-img-1.png" alt=""/>
                </div>
                <div className="newsletter-two__inner-content">
                    <div className="newsletter-two__shape-bg"
                        style={{backgroundImage: "url('/assets/images/shapes/newsletter-two-shape-bg.png')"}}>
                    </div>
                    <div className="newsletter-two__like">
                        <img src="/assets/images/shapes/newsletter-two-like.png" alt=""/>
                    </div>
                    <div className="newsletter-two__title-box">
                        <h3 className="newsletter-two__title">Subscribe our <span>Newsletter</span></h3>
                        <p className="newsletter-two__text">Explore a diverse selection of courses all in one platform,
                            <br/>
                            designed to cater to various learning</p>
                    </div>
                    <div className="newsletter-two__form-box">
                        <form className="newsletter-two__form">
                            <div className="newsletter-two__input">
                                <input type="email" placeholder="Enter Your Email"/>
                            </div>
                            <button type="submit" className="newsletter-two__btn">
                                <span className="icon-arrow-circle"></span> Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Newsletter