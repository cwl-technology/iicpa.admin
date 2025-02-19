import React from 'react'

function Footer() {
  return (
    <>

{/* <!--Contact Info One Start --> */}
    {/* <section className="contact-info-one">
        <div className="container">
            <ul className="list-unstyled contact-info-one__list">
                <li>
                    <div className="contact-info-one__single">
                        <div className="contact-info-one__icon">
                            <span className="icon-envelope"></span>
                        </div>
                        <div className="contact-info-one__content">
                            <p className="contact-info-one__sub-title">Email Address:</p>
                            <h5 className="contact-info-one__email">
                                <a href="mailto:info@example.com">info@example.com</a>
                            </h5>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="contact-info-one__single">
                        <div className="contact-info-one__icon">
                            <span className="icon-phone"></span>
                        </div>
                        <div className="contact-info-one__content">
                            <p className="contact-info-one__sub-title">Phone Number</p>
                            <h5 className="contact-info-one__email">
                                <a href="tel:001239957689">+00 123 (99) 57689</a>
                            </h5>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="contact-info-one__single">
                        <div className="contact-info-one__icon">
                            <span className="icon-location"></span>
                        </div>
                        <div className="contact-info-one__content">
                            <p className="contact-info-one__sub-title">Our Address</p>
                            <h5 className="contact-info-one__email">1234 Elm Street Springfield,</h5>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section> */}
    {/* <!--Contact Info One End --> */}

     <footer className="site-footer-two">
        <div className="site-footer-two__shape-1 img-bounce"></div>
        <div className="site-footer-two__shape-2 float-bob-y"></div>
        <div className="site-footer-two__star text-rotate-box">
            <img src="/assets/images/shapes/site-footer-star.png" alt=""/>
        </div>
        <div className="site-footer-two__top">
            <div className="site-footer-two__main-content">
                <div className="container">
                    <div className="site-footer-two__main-content-inner">
                        <div className="row">

                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-two__about">
                                    <div className="footer-widget-two__about-logo">
                                        <a href="#">
                                            {/* <img src="/assets/images/resources/logo_1.jpg" alt="" width={150}/> */}
                                        </a>
                                    </div>
                                    <p className="footer-widget-two__about-text">Lorem Ipsum is simply dummy text of the
                                        printing and typesetting</p>
                                    <div className="site-footer-two__social">
                                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                                        <a href="#"><span className="fab fa-instagram"></span></a>
                                    </div>
                                    <div className="footer-widget-two__app-download-box">
                                        <h4 className="footer-widget-two__app-download-title">Download Apps</h4>
                                        <div className="footer-widget-two__app-download">
                                            <a href="#" className="footer-widget-two__app-download-single">
                                                <img src="/assets/images/icon/google-play-icon-2.png" alt=""/>
                                            </a>
                                            <a href="#" className="footer-widget-two__app-download-single">
                                                <img src="/assets/images/icon/apple-icon-2.png" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links">
                                    <h4 className="footer-widget-two__title">Quick Links</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><a href="#"> <span className="icon-plus"></span> Home</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> About
                                                Us</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Courses</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> FAQs</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Contact</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Live class</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__support">
                                    <h4 className="footer-widget-two__title">Support</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><a href="#"> <span className="icon-plus"></span> Became
                                                Partners</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Privacy &
                                                Policy</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Tearm & Condition</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Refund Policy</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Live Workshop</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Chose Career</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__courses">
                                    <h4 className="footer-widget-two__title">Our Courses</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><a href="#"> <span className="icon-plus"></span> Website
                                                Design</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Digital
                                                marketing</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Product Design</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Web
                                                Development</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> App Development</a></li>
                                        <li><a href="#"> <span className="icon-plus"></span> Many More</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
    </>
  )
}

export default Footer