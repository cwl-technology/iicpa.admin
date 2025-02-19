import Link from 'next/link'
import React from 'react'


const Page = () => {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/shapes/page-header-bg-shape.png)" }}>
                </div>
                <div className="page-header__shape-4">
                    <img src="/assets/images/shapes/page-header-shape-4.png" alt="" />
                </div>
                <div className="page-header__shape-5">
                    <img src="/assets/images/shapes/page-header-shape-5.png" alt="" />
                </div>
                <div className="page-header__social">
                    <a href="#">Facebook</a>
                    <span>//</span>
                    <a href="#">Instagram</a>
                    <span>//</span>
                    <a href="#">LinkedIn</a>
                    <span>//</span>
                    <a href="#">Twitter</a>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img">
                            <img src="/assets/images/resources/page-header-img-1.png" alt="" />
                            <div className="page-header__shape-1">
                                <img src="/assets/images/shapes/page-header-shape-1.png" alt="" />
                            </div>
                            <div className="page-header__shape-2">
                                <img src="/assets/images/shapes/page-header-shape-2.png" alt="" />
                            </div>
                            <div className="page-header__shape-3">
                                <img src="/assets/images/shapes/page-header-shape-3.png" alt="" />
                            </div>
                        </div>
                        <h2>Contact Us</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span>//</span></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-two">
                <div className="container">
                    <ul className="row list-unstyled">
                        <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="contact-two__single">
                                <div className="contact-two__icon">
                                    <img src="/assets/images/icon/contact-two-icon-1.png" alt="" />
                                </div>
                                <h3 className="contact-two__title">Our Address</h3>
                                <p>3149 New Creek Road, Huntsville,<br /> Alabama, USA</p>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="contact-two__single">
                                <div className="contact-two__icon">
                                    <img src="/assets/images/icon/contact-two-icon-2.png" alt="" />
                                </div>
                                <h3 className="contact-two__title">Contact Number</h3>
                                <p><a href="tel:1200123456789">+12 (00) 123 456789</a></p>
                                <p><a href="tel:9100012458963">+91 (000) 1245 8963</a></p>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="contact-two__single">
                                <div className="contact-two__icon">
                                    <img src="/assets/images/icon/contact-two-icon-3.png" alt="" />
                                </div>
                                <h3 className="contact-two__title">Email Addresss</h3>
                                <p><a href="mailto:info@domain.com">info@domain.com</a></p>
                                <p><a href="mailto:support@domain.com">support@domain.com</a></p>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                            <div className="contact-two__single">
                                <div className="contact-two__icon">
                                    <img src="/assets/images/icon/contact-two-icon-4.png" alt="" />
                                </div>
                                <h3 className="contact-two__title">Class Schedule</h3>
                                <p>10:00 AM - 6:00 PM<br /> Monday - Friday</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="contact-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__left">
                            <div className="contact-three__img">
                                <img src="/assets/images/resources/contact-three-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-three__right">
                            <div className="section-title-two text-left sec-title-animation animation-style1">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-shape">
                                        <img src="/assets/images/shapes/section-title-two-shape-1.png" alt=""/>
                                    </div>
                                    <span className="section-title-two__tagline">Get in Touch</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">We’re Here to Help and Ready to
                                    Hear from You</h2>
                            </div>
                            <form className="contact-form-validated contact-three__form"
                                action="https://laravel-fistudy.unicktheme.com/contact" method="POST"
                                noValidate="novalidate">
                                <input type="hidden" name="_token" value="DNQYQF0k5HOqY3fPIKroDlKNpxuvIbBP2WljTFyb"
                                    autoComplete="off"/>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <h4 className="contact-three__input-title">Full Name</h4>
                                        <div className="contact-three__input-box">
                                            <input type="text" name="name" placeholder="John Doe" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <h4 className="contact-three__input-title">Email Address *</h4>
                                        <div className="contact-three__input-box">
                                            <input type="email" name="email" placeholder="john@domain.com" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <h4 className="contact-three__input-title">Subject *</h4>
                                        <div className="contact-three__input-box">
                                            <input type="text" name="subject" placeholder="Write about your enquiry"
                                                required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <h4 className="contact-three__input-title">Message *</h4>
                                        <div className="contact-three__input-box text-message-box">
                                            <textarea name="message" placeholder="Write Your Message"></textarea>
                                        </div>
                                        <div className="contact-three__btn-box">
                                            <button type="submit" className="thm-btn-two contact-three__btn">
                                                <span>Submit Review</span><i className="icon-angles-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        </>
    )
}

export default Page