"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';



const Home = () => {


  return (
    <>
      {/* <!-- Banner Two Start --> */}
      <section className="banner-two">
        <div className="banner-two__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/banner-two-shape-bg.png)" }}></div>
        <div className="banner-two__shape-box float-bob-y">
          <div className="banner-two__shape-1"></div>
        </div>
        <div className="banner-two__shape-2 img-bounce">
          <img src="/assets/images/shapes/banner-two-shape-2.png" alt="" />
        </div>
        <div className="banner-two__shape-3">
          <img src="/assets/images/shapes/banner-two-shape-3.png" alt="" />
        </div>
        <div className="banner-two__shape-4 shapemover">
          <img src="/assets/images/shapes/banner-two-shape-4.png" alt="" />
        </div>
        <div className="banner-two__shape-5 float-bob-y">
          <img src="/assets/images/shapes/banner-two-shape-5.png" alt="" />
        </div>
        <div className="banner-two__shape-6 rotate-me">
          <img src="/assets/images/shapes/banner-two-shape-6.png" alt="" />
        </div>
        <div className="banner-two__shape-7 float-bob-y"></div>
        <div className="banner-two__shape-8 float-bob-x"></div>
        {/* <div className="banner-two__edu-icon shapemover">
          <img src="/assets/images/icon/banner-two-edu-icon.png" alt="" />
        </div> */}
        <div className="banner-two__book-icon img-bounce">
          <img src="/assets/images/icon/banner-two-book-icon.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="banner-two__left">
                <p className="banner-two__sub-title"># Best Online Platform</p>
                <h2 className="banner-two__title">Start Learning <span>Today</span> <br /> <span>Discover</span>
                  Your Next <br /> Great Skill</h2>
                <p className="banner-two__text">Enhance your educational journey with our cutting-edge <br />
                  course platform.</p>
                <div className="banner-two__btn-and-success-student-box">
                  <div className="banner-two__btn-box">
                    <a href="#" className="thm-btn-two">
                      <span>Get Started</span>
                      <i className="icon-angles-right"></i>
                    </a>
                  </div>
                  <div className="banner-two__success-student">
                    <ul className="list-unstyled banner-two__success-student-list">
                      <li>
                        <div className="banner-two__success-student-img">
                          <img src="/assets/images/resources/banner-two-success-student-1-1.jpg" alt="" />
                        </div>
                      </li>
                      <li>
                        <div className="banner-two__success-student-img">
                          <img src="/assets/images/resources/banner-two-success-student-1-2.jpg" alt="" />
                        </div>
                      </li>
                      <li>
                        <div className="banner-two__success-student-img">
                          <img src="/assets/images/resources/banner-two-success-student-1-3.jpg" alt="" />
                        </div>
                      </li>
                    </ul>
                    <div className="banner-two__success-student-content">
                      <div className="banner-two__success-student-count-box">
                        <CountUp start={0} end={2000} duration={2.5} />
                        <span>+</span>
                      </div>
                      <p className="banner-two__success-student-text">Success Student</p>
                    </div>
                  </div>
                </div>
                <div className="banner-two__video-link">
                  <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                    <div className="banner-two__video-icon-box">
                      <div className="banner-two__video-icon-inner">
                        <div className="banner-two__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="banner-two__right">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="banner-two__content-one">
                      <div className="banner-two__content-one-img">
                        <img src="/assets/images/resources/banner-two-content-one-img-1.jpg" alt="" />
                      </div>
                      <div className="banner-two__course-discount">
                        <div className="banner-two__course-discount-img">
                          <img src="/assets/images/resources/banner-two-course-discount-img-1.jpg" alt="" />
                          <p className="banner-two__course-discount-rate">-10% Off</p>
                        </div>
                        <div className="banner-two__course-discount-content">
                          <h4 className="banner-two__course-discount-title"><a href="#">UI/UX Design
                            Enhancing <br /> User Experience Effectively</a></h4>
                          <p className="banner-two__course-discount-price">$150.00</p>
                          <div className="banner-two__course-discount-rating">
                            <p className="banner-two__course-discount-rating-text">5.50/
                              <span>14</span> </p>
                            <div className="banner-two__course-discount-star">
                              <span className="icon-star"></span>
                              <span className="icon-star"></span>
                              <span className="icon-star"></span>
                            </div>
                          </div>
                          <div className="banner-two__course-discount-arrow">
                            <a href="#"><span
                              className="icon-angles-right"></span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="banner-two__content-two">
                      <div className="banner-two__content-two-img">
                        <img src="/assets/images/resources/banner-two-content-two-img-1.jpg" alt="" />
                      </div>
                      <div className="banner-two__experience-box">
                        <div className="banner-two__experience-box-inner">
                          <div className="banner-two__experience-icon">
                            <img src="/assets/images/icon/banner-two-experience-icon.png" alt="" />
                          </div>
                          <div className="banner-two__experience-count-box">
                            <div className="banner-two__experience-count">
                            <CountUp start={0} end={25} duration={2.5} />
                              <span>+</span>
                              <p>Years</p>
                            </div>
                            <p>of experience</p>
                          </div>
                        </div>
                        <div className="banner-two__experience-box-shape"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Two End --> */}


      {/* <!--Category Two Start --> */}
      <section className="category-two">
        <div className="container">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-shape">
                <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
              </div>
              <span className="section-title-two__tagline">Category</span>
            </div>
            <h2 className="section-title-two__title title-animation">
              Explore Our World's Class <br />Best Courses <span>Categories</span>
            </h2>
          </div>
          <div className="row">
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-1.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title">
                    <a href="#">Tech &<br /> Programming</a>
                  </h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">
                      View More<span className="icon-circle-left"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}

            {/* <!-- Repeat similar blocks for other categories --> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-2.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title">
                    <a href="#">Creative Art <br /> & Design</a>
                  </h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">
                      View More<span className="icon-circle-left"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-3.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">Business &
                    <br /> Finance</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="700ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-4.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">Health, Fitness &
                    <br />Wellness</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="900ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-5.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">Writing &
                    <br />Communication</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="1100ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-6.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">User Research &
                    <br />Analytics</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1300ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-7.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">Digital Marketing
                    <br /> & Camping</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
            {/* <!--Category Two Single Start--> */}
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1400ms">
              <div className="category-two__single">
                <div className="category-two__icon">
                  <img src="/assets/images/icon/categoyr-two-icon-8.png" alt="" />
                </div>
                <div className="category-two__single-inner">
                  <p className="category-two__sub-title">14 Courses</p>
                  <h3 className="category-two__title"><a href="#">Lifestyle &
                    <br />Productivity</a></h3>
                  <div className="category-two__btn-box">
                    <a href="#" className="category-two__btn thm-btn">View More<span
                      className="icon-circle-left"></span></a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Category Two Single End--> */}
          </div>
        </div>
      </section>
      {/* <!--Category Two End --> */}


      {/* <!--About Two Start --> */}
      <section className="about-two">
        <div className="about-two__bg-shape" style={{ backgroundImage: "url(/assets/images/shapes/about-two-bg-shape.png)" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <img src="/assets/images/resources/about-two-img-1.png" alt="" />
                  </div>
                  <div className="about-two__shape-1">
                    <img src="/assets/images/shapes/about-two-shape-1.png" alt="" />
                  </div>
                  <div className="about-two__shape-2">
                    <img src="/assets/images/shapes/about-two-shape-2.png" alt="" />
                  </div>
                  <div className="about-two__shape-3 rotate-me">
                    <img src="/assets/images/shapes/about-two-shape-3.png" alt="" />
                  </div>
                  <div className="about-two__client-box">
                    <p className="about-two__client-text">“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</p>
                    <div className="about-two__client-info">
                      <div className="about-two__client-img">
                        <img src="/assets/images/resources/about-two-client-img-1.png" alt="" />
                      </div>
                      <div className="about-two__client-content">
                        <h3>Alisa Oliva</h3>
                        <p>Web Designer</p>
                      </div>
                      <div className="about-two__client-quote">
                        <span className="icon-quote"></span>
                      </div>
                    </div>
                  </div>
                  <div className="about-two__class-day">
                    <div className="about-two__class-day-icon">
                      <img src="/assets/images/icon/about-two-class-day-icon.png" alt="" />
                    </div>
                    <h3 className="about-two__class-title">Our Class Day</h3>
                    <ul className="about-two__class-list list-unstyled">
                      <li>
                        <p>Saturday</p>
                        <span>10:00 - 16:00</span>
                      </li>
                      <li>
                        <p>Sunday</p>
                        <span>10:00 - 16:00</span>
                      </li>
                      <li>
                        <p>Monday</p>
                        <span>10:00 - 16:00</span>
                      </li>
                      <li>
                        <p>Tuesday</p>
                        <span>10:00 - 16:00</span>
                      </li>
                      <li>
                        <p>Wednesday</p>
                        <span>10:00 - 16:00</span>
                      </li>
                    </ul>
                    <div className="about-two__class-btn-box">
                      <a href='#' className="thm-btn"><span className="icon-circle-left"></span>Book Free Class</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-two__right">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <div className="section-title-two__tagline-box">
                    <div className="section-title-two__tagline-shape">
                      <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
                    </div>
                    <span className="section-title-two__tagline">About Us</span>
                  </div>
                  <h2 className="section-title-two__title title-animation">Behind the Scenes: Discover the People & Passion <span>Behind</span></h2>
                </div>
                <p className="about-two__text">Meet the talented individuals who bring our vision to life every day. With a shared passion and commitment, our team works tirelessly to deliver exceptional quality and innovation. Discover the stories, skills, and dedication that make us who we are.</p>
                <ul className="about-two__points-list list-unstyled">
                  <li>
                    <div className="about-two__icon">
                      <img src="/assets/images/icon/about-two-points-icon-1.png" alt="" />
                    </div>
                    <div className="about-two__content">
                      <h3>It provides tools for course creation</h3>
                      <p>Enrollment management, and tracking learner progress, ensuring a streamlined learning experience.</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-two__icon">
                      <img src="/assets/images/icon/about-two-points-icon-2.png" alt="" />
                    </div>
                    <div className="about-two__content">
                      <h3>An effective LMS offers robust analytics</h3>
                      <p>Reporting features that enable businesses to track <br />learner performance, completion rates, and<br /> engagement levels.</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-two__icon">
                      <img src="/assets/images/icon/about-two-points-icon-3.png" alt="" />
                    </div>
                    <div className="about-two__content">
                      <h3>Many LMS platforms include collaborative </h3>
                      <p>Collaborative features such as discussion forums, <br />messaging, and group projects, which facilitate<br /> interaction and communication among learners.</p>
                    </div>
                  </li>
                </ul>
                <div className="about-two__client-and-btn-box">
                  <div className="about-two__client-info-2">
                    <div className="about-two__client-two-img">
                      <img src="/assets/images/resources/about-two-client-two-img-1.png" alt="" />
                    </div>
                    <div className="about-two__client-two-content">
                      <p>Have a Questions</p>
                      <h4><a href="mailto:info@domain.com">info@domain.com</a></h4>
                    </div>
                  </div>
                  <div className="about-two__btn-box">
                    <a href='#' className="thm-btn-two">
                      <span>Know More</span>
                      <i className="icon-angles-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--About Two End --> */}

      {/* <!--Courses Two Start --> */}
      <section className="courses-two">
        <div className="container">
          <div className="section-title-two text-left sec-title-animation animation-style2">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-shape">
                <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
              </div>
              <span className="section-title-two__tagline">Our Courses</span>
            </div>
            <h2 className="section-title-two__title title-animation">Explore Our Comprehensive<br /> Course
              <span>Offerings</span>
            </h2>
          </div>
          <div className="courses-two__inner">
            <ul className="courses-two__filter style1 post-filter list-unstyled clearfix">
              <li data-filter=".filter-item" className="active">
                <p><span className="icon-catagory"></span>All Categories</p>
              </li>
              <li data-filter=".design">
                <p><span className="icon-pen-ruler"></span>Design</p>
              </li>
              <li data-filter=".programming">
                <p><span className="icon-computer"></span>Programming</p>
              </li>
              <li data-filter=".marketing">
                <p><span className="icon-bullhorn"></span>Marketing</p>
              </li>
            </ul>
            <div className="row filter-layout">
              {/* <!--Courses Two Single Start--> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item design marketing">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-1.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$240.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">Getting Started with Computers and Beginner's Guide to Basic Skills</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-1.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Sarah Alison</h4>
                          <p><span className="odometer" data-count="12">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Beginner</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>45 Lessons</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>620h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--Courses Two Single End--> */}
              {/* <!-- Courses Two Single Start --> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item design programming">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-2.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$120.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">Cooking Made Easy: Essential Skills for Everyday Meals</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-2.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Mitchel March</h4>
                          <p><span className="odometer" data-count="20">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Advance</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>120 Lesson</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>12h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Courses Two Single End --> */}
              {/* <!-- Courses Two Single Start --> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item programming marketing">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-3.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$640.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">Graphic Design Basics: Learn the Foundations of Visual</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-3.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Mr. Harry</h4>
                          <p><span className="odometer" data-count="5">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Entry Level</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>45 Lesson</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>620h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Courses Two Single End --> */}
              {/* <!-- Courses Two Single Start --> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item marketing">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-4.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$350.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">Photography for Everyone: How to Capture Stunning Photos with Ease</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-4.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Alisa Olivia</h4>
                          <p><span className="odometer" data-count="8">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Advance</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>80 Lesson</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>156h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Courses Two Single End --> */}
              {/* <!-- Courses Two Single Start --> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item marketing">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-5.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$150.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">Writing Made Simple: From Ideas to Finished Pieces for All Levels</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-5.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Jordan Walk</h4>
                          <p><span className="odometer" data-count="16">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Medium</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>45 Lesson</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>326h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Courses Two Single End --> */}
              {/* <!-- Courses Two Single Start --> */}
              <div className="col-xl-4 col-lg-6 col-md-6 filter-item design marketing">
                <div className="courses-two__single">
                  <div className="courses-two__img-box">
                    <div className="courses-two__img">
                      <img src="/assets/images/resources/courses-2-6.jpg" alt="" />
                    </div>
                    <div className="courses-two__heart">
                      <a href="#"><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <div className="courses-two__content">
                    <div className="courses-two__doller-and-review">
                      <div className="courses-two__doller">
                        <p>$290.00</p>
                      </div>
                      <div className="courses-two__review">
                        <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                      </div>
                    </div>
                    <h3 className="courses-two__title">
                      <a href="#">A Beginner’s Guide to Building Your Online Presence</a>
                    </h3>
                    <div className="courses-two__btn-and-client-box">
                      <div className="courses-two__btn-box">
                        <a href="#" className="thm-btn-two">
                          <span>Enroll Now</span>
                          <i className="icon-angles-right"></i>
                        </a>
                      </div>
                      <div className="courses-two__client-box">
                        <div className="courses-two__client-img">
                          <img src="/assets/images/resources/courses-two-client-img-6.jpg" alt="" />
                        </div>
                        <div className="courses-two__client-content">
                          <h4>Aman Ellison</h4>
                          <p><span className="odometer" data-count="12">00</span><i>+</i> Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <ul className="courses-two__meta list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-chart-simple"></span>
                        </div>
                        <p>Beginner</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-book"></span>
                        </div>
                        <p>45 Lesson</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <p>620h, 55min</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Courses Two Single End --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--Courses Two End --> */}


      {/* <!--Why Choose Two Start --> */}
      <section className="why-choose-two">
        <div className="why-choose-two__shape-5 shapemover">
          <img src="/assets/images/shapes/why-choose-two-shape-5.png" alt="" />
        </div>
        <div className="why-choose-two__shape-6"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-two__left">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <div className="section-title-two__tagline-box">
                    <div className="section-title-two__tagline-shape">
                      <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
                    </div>
                    <span className="section-title-two__tagline">Why Choose Us</span>
                  </div>
                  <h2 className="section-title-two__title title-animation">Discover Why Our Student <br /> and
                    Clients
                    <span>Choose Us</span>
                  </h2>
                </div>
                <div className="why-choose-two__left-content-box">
                  <div className="why-choose-two__shape-1"></div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-two__left-content">
                        {/* <!--Why Choose Two Single Start --> */}
                        <div className="why-choose-two__single wow fadeInUp" data-wow-delay="100ms">
                          <div className="why-choose-two__icon">
                            <img src="/assets/images/icon/why-choose-two-icon-1.png" alt="" />
                          </div>
                          <h3 className="why-choose-two__title"><a href="#">It provides tools
                            for <br />
                            course creation,</a></h3>
                          <ul className="list-unstyled why-choose-two__points">
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text">Enrollment management,
                                and <br /> tracking learner progress,</p>
                            </li>
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text"> ensuring a streamlined
                                learning <br /> experience.</p>
                            </li>
                          </ul>
                        </div>
                        {/* <!--Why Choose Two Single End --> */}
                        {/* <!--Why Choose Two Single Start --> */}
                        <div className="why-choose-two__single wow fadeInUp" data-wow-delay="200ms">
                          <div className="why-choose-two__icon">
                            <img src="/assets/images/icon/why-choose-two-icon-2.png" alt="" />
                          </div>
                          <h3 className="why-choose-two__title"><a href="#">Many LMS
                            platforms <br />
                            include collaborative</a></h3>
                          <ul className="list-unstyled why-choose-two__points">
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text">Features such as
                                discussion <br /> forums, messaging,</p>
                            </li>
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text">Which facilitate
                                interaction and <br /> communication among learners <br /> and
                                instructors.</p>
                            </li>
                          </ul>
                        </div>
                        {/* <!--Why Choose Two Single End --> */}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="why-choose-two__video-box">
                        {/* <!--Why Choose Two Single Start --> */}
                        <div className="why-choose-two__single wow fadeInUp" data-wow-delay="300ms">
                          <div className="why-choose-two__icon">
                            <img src="/assets/images/icon/why-choose-two-icon-3.png" alt="" />
                          </div>
                          <h3 className="why-choose-two__title"><a href="#">An effective LMS
                            offers
                            <br /> robust analytics </a></h3>
                          <ul className="list-unstyled why-choose-two__points">
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text">Reporting features that
                                enable <br /> businesses to track learner</p>
                            </li>
                            <li>
                              <div className="why-choose-two__points-icon">
                                <img src="/assets/images/icon/check-icon.png" alt="" />
                              </div>
                              <p className="why-choose-two__points-text"> This data helps
                                organizations <br /> assess the effectiveness of their <br />
                                training programs </p>
                            </li>
                          </ul>
                        </div>
                        {/* <!--Why Choose Two Single End --> */}
                        <div className="why-choose-two__video">
                          <div className="why-choose-two__video-link">
                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                              className="video-popup">
                              <div className="why-choose-two__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                          </div>
                          <div className="why-choose-two__video-content">
                            <h4>Join Our Live Class</h4>
                            <p>It has survived not only five centuries, but also the</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-two__right">
                <div className="why-choose-two__shape-box">
                  <div className="why-choose-two__shape-2">
                    <div className="why-choose-two__shape-3">
                      <div className="why-choose-two__shape-4 float-bob-y">
                        <img src="/assets/images/shapes/why-choose-two-shape-4.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-choose-two__dot-1">
                  <img src="/assets/images/shapes/why-choose-two-dot-1.png" alt="" />
                </div>
                <div className="why-choose-two__dot-2">
                  <img src="/assets/images/shapes/why-choose-two-dot-2.png" alt="" />
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-two__right-content-one">
                      <div className="why-choose-two__right-content-one-user-details">
                        <div className="why-choose-two__right-content-one-user-details-top">
                          <div className="why-choose-two__right-content-one-user-details-top-shape-bg"
                            style={{ backgroundImage: "url('/assets/images/shapes/why-choose-two-right-content-one-user-details-top-shape-bg.png')" }}>
                          </div>
                          <div className="why-choose-two__right-content-one-user-details-top-img">
                            <img src="/assets/images/resources/why-choose-two-right-content-one-user-details-top-img.png" alt="" />
                          </div>
                        </div>
                        <div className="why-choose-two__right-content-one-user-details-bottom">
                          <div className="why-choose-two__right-content-one-user-details-img">
                            <img src="/assets/images/resources/why-choose-two-right-content-one-user-details-img-1.jpg" alt="" />
                          </div>
                          <div className="why-choose-two__right-content-one-user-details-content">
                            <h5>Sarah Amanda</h5>
                            <p>Product Designer</p>
                          </div>
                        </div>
                      </div>
                      <div className="why-choose-two__student-trained">
                        <div className="why-choose-two__student-trained-shape-1"></div>
                        <ul className="list-unstyled why-choose-two__student-trained-list">
                          <li>
                            <div className="why-choose-two__student-trained-img">
                              <img src="/assets/images/resources/why-choose-two-student-trained-img-1-1.jpg" alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="why-choose-two__student-trained-img">
                              <img src="/assets/images/resources/why-choose-two-student-trained-img-1-2.jpg" alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="why-choose-two__student-trained-img">
                              <img src="/assets/images/resources/why-choose-two-student-trained-img-1-3.jpg" alt="" />
                            </div>
                          </li>
                          <li>
                            <div className="why-choose-two__student-trained-img">
                              <img src="/assets/images/resources/why-choose-two-student-trained-img-1-4.jpg" alt="" />
                            </div>
                          </li>
                        </ul>
                        <div className="why-choose-two__student-trained-count-box">
                          <div className="why-choose-two__student-trained-count-box-inner count-box">
                          <CountUp start={0} end={100} duration={2.5} />
                            <span>+</span>
                          </div>
                          <p className="why-choose-two__student-trained-text">Student Trained</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="why-choose-two__right-content-two">
                      <div className="why-choose-two__udemy-review">
                        <div className="why-choose-two__udemy-review-img">
                          <img src="/assets/images/resources/why-choose-two-udemy-review-img.jpg" alt="" />
                        </div>
                        <div className="why-choose-two__udemy-review-logo">
                          <img src="/assets/images/resources/why-choose-two-udemy-review-logo.png" alt="" />
                        </div>
                        <div className="why-choose-two__udemy-review-client-info">
                          <p className="why-choose-two__udemy-review-client-name">Alisa Olivia/</p>
                          <div className="why-choose-two__udemy-review-star">
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                          </div>
                        </div>
                      </div>
                      <div className="why-choose-two__right-content-two-user-details">
                        <div className="why-choose-two__right-content-two-user-details-top">
                          <div className="why-choose-two__right-content-two-user-details-top-shape-bg"
                            style={{ backgroundImage: "url('/assets/images/shapes/why-choose-two-right-content-one-user-details-top-shape-bg.png')" }}>
                          </div>
                          <div className="why-choose-two__right-content-two-user-details-top-img">
                            <img src="/assets/images/resources/why-choose-two-right-content-two-user-details-top-img.png" alt="" />
                          </div>
                        </div>
                        <div className="why-choose-two__right-content-two-user-details-bottom">
                          <div className="why-choose-two__right-content-two-user-details-icon">
                            <img src="/assets/images/icon/why-choose-two-right-content-two-user-details-icon.png" alt="" />
                          </div>
                          <div className="why-choose-two__right-content-two-user-details-content">
                            <h5>Jhon Oleson</h5>
                            <p>Sr. Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Why Choose Two End --> */}


      {/* <!-- Counter Two Start --> */}
      <section className="counter-two">
        <div className="counter-two__wrap">
          <ul className="list-unstyled counter-two__list marquee_mode">
            <li>
              <div className="counter-two__single">
                <div className="counter-two__img-box">
                  <div className="counter-two__img">
                    <img src="/assets/images/resources/counter-2-1.jpg" alt="" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                  <CountUp start={0} end={120} duration={3.5} />
                    <span>K+</span>
                  </div>
                  <p className="counter-two__text">Successfully <br /> Student</p>
                </div>
              </div>
            </li>
            <li>
              <div className="counter-two__shpae-1">
                <img src="/assets/images/shapes/counter-two-shape-1.png" alt="" />
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__img-box">
                  <div className="counter-two__img">
                    <img src="/assets/images/resources/counter-2-2.jpg" alt="" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                  <CountUp start={0} end={560} duration={3.5} />
                    <span>K+</span>
                  </div>
                  <p className="counter-two__text">Courses <br /> Completed</p>
                </div>
              </div>
            </li>
            <li>
              <div className="counter-two__shpae-1">
                <img src="/assets/images/shapes/counter-two-shape-1.png" alt="" />
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__img-box">
                  <div className="counter-two__img">
                    <img src="/assets/images/resources/counter-2-3.jpg" alt="" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                  <CountUp start={0} end={3} duration={4.5} />
                    <span>M+</span>
                  </div>
                  <p className="counter-two__text">Satisfied <br /> Review</p>
                </div>
              </div>
            </li>
            <li>
              <div className="counter-two__shpae-1">
                <img src="/assets/images/shapes/counter-two-shape-1.png" alt="" />
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__img-box">
                  <div className="counter-two__img">
                    <img src="/assets/images/resources/counter-2-4.jpg" alt="" />
                  </div>
                </div>
                <div className="counter-two__content">
                  <div className="counter-two__count-box">
                  <CountUp start={0} end={120} duration={3.5} />
                    <span>K+</span>
                  </div>
                  <p className="counter-two__text">Successfully <br /> Student</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- Counter Two End --> */}

      {/* <!-- Courses Three Start --> */}
      <section className="courses-three">
        <div className="container">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-shape">
                <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
              </div>
              <span className="section-title-two__tagline">Best Selling</span>
            </div>
            <h2 className="section-title-two__title title-animation">Our Courses Designed for <br />Your Success
              <span>History</span>
            </h2>
          </div>
          <div className="row">
            {/* <!-- Courses Three Single Start --> */}
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="courses-three__single">
                <div className="courses-three__img">
                  <img src="/assets/images/resources/courses-3-1.jpg" alt="" />
                </div>
                <div className="courses-three__content">
                  <div className="courses-three__price-and-review">
                    <h4 className="courses-three__price">$240.00</h4>
                    <div className="courses-three__review-box">
                      <div className="courses-three__review-star">
                        <span className="icon-star"></span>
                      </div>
                      <p className="courses-three__review-text">4.5 <span>(129 Reviews)</span></p>
                    </div>
                  </div>
                  <h3 className="courses-three__title"><a href='#'>A Beginner's Guide to
                    Basic <br /> Skills and Improved</a></h3>
                  <div className="courses-three__btn-and-heart-box">
                    <div className="courses-three__btn-box">
                      <a href='#' className="thm-btn-two">
                        <span>Enroll Now</span>
                        <i className="icon-angles-right"></i>
                      </a>
                    </div>
                    <div className="courses-three__heart-box">
                      <a href='#'><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <ul className="courses-three__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-book"></span>
                      </div>
                      <p>12 Lesson</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <p>620h, 20min</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Courses Three Single End --> */}
            {/* <!-- Courses Three Single Start --> */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="courses-three__single">
                <div className="courses-three__img">
                  <img src="/assets/images/resources/courses-3-2.jpg" alt="" />
                </div>
                <div className="courses-three__content">
                  <div className="courses-three__price-and-review">
                    <h4 className="courses-three__price">$240.00</h4>
                    <div className="courses-three__review-box">
                      <div className="courses-three__review-star">
                        <span className="icon-star"></span>
                      </div>
                      <p className="courses-three__review-text">4.5 <span>(129 Reviews)</span></p>
                    </div>
                  </div>
                  <h3 className="courses-three__title"><a href='#'>Learn the Foundations of
                    <br /> Visual Communication</a></h3>
                  <div className="courses-three__btn-and-heart-box">
                    <div className="courses-three__btn-box">
                      <a href='#' className="thm-btn-two">
                        <span>Enroll Now</span>
                        <i className="icon-angles-right"></i>
                      </a>
                    </div>
                    <div className="courses-three__heart-box">
                      <a href='#'><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <ul className="courses-three__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-book"></span>
                      </div>
                      <p>12 Lesson</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <p>620h, 20min</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Courses Three Single End --> */}
            {/* <!-- Courses Three Single Start --> */}
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="courses-three__single">
                <div className="courses-three__img">
                  <img src="/assets/images/resources/courses-3-3.jpg" alt="" />
                </div>
                <div className="courses-three__content">
                  <div className="courses-three__price-and-review">
                    <h4 className="courses-three__price">$240.00</h4>
                    <div className="courses-three__review-box">
                      <div className="courses-three__review-star">
                        <span className="icon-star"></span>
                      </div>
                      <p className="courses-three__review-text">4.5 <span>(129 Reviews)</span></p>
                    </div>
                  </div>
                  <h3 className="courses-three__title"><a href='#'>Cooking Made Easy: Essential <br /> Skills
                    for Everyday Meals</a></h3>
                  <div className="courses-three__btn-and-heart-box">
                    <div className="courses-three__btn-box">
                      <a href='#' className="thm-btn-two">
                        <span>Enroll Now</span>
                        <i className="icon-angles-right"></i>
                      </a>
                    </div>
                    <div className="courses-three__heart-box">
                      <a href='#'><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <ul className="courses-three__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-book"></span>
                      </div>
                      <p>12 Lesson</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <p>620h, 20min</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Courses Three Single End --> */}
            {/* <!-- Courses Three Single Start --> */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="400ms">
              <div className="courses-three__single">
                <div className="courses-three__img">
                  <img src="/assets/images/resources/courses-3-4.jpg" alt="" />
                </div>
                <div className="courses-three__content">
                  <div className="courses-three__price-and-review">
                    <h4 className="courses-three__price">$240.00</h4>
                    <div className="courses-three__review-box">
                      <div className="courses-three__review-star">
                        <span className="icon-star"></span>
                      </div>
                      <p className="courses-three__review-text">4.5 <span>(129 Reviews)</span></p>
                    </div>
                  </div>
                  <h3 className="courses-three__title"><a href='#'>How to Capture Stunning <br /> Photos with
                    Ease</a></h3>
                  <div className="courses-three__btn-and-heart-box">
                    <div className="courses-three__btn-box">
                      <a href='#' className="thm-btn-two">
                        <span>Enroll Now</span>
                        <i className="icon-angles-right"></i>
                      </a>
                    </div>
                    <div className="courses-three__heart-box">
                      <a href='#'><span className="icon-heart"></span></a>
                    </div>
                  </div>
                  <ul className="courses-three__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-book"></span>
                      </div>
                      <p>12 Lesson</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <p>620h, 20min</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Courses Three Single End --> */}
          </div>
        </div>
      </section>
      {/* <!-- Courses Three End --> */}

      {/* <!--Team Two Start --> */}
      <section className="team-two">
        <div className="team-two__shape-1 float-bob-y">
          <img src="/assets/images/shapes/team-two-shape-1.png" alt="" />
        </div>
        <div className="team-two__shape-2 float-bob-x">
          <img src="/assets/images/shapes/team-two-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title-two text-left sec-title-animation animation-style2">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-shape">
                <img src="/assets/images/shapes/section-title-two-shape-2.png" alt="" />
              </div>
              <span className="section-title-two__tagline">Our Team</span>
            </div>
            <h2 className="section-title-two__title title-animation">Meet the Experts A Team <br />
              Team United by <span>Purpose</span>
            </h2>
          </div>
          <div className="team-two__carousel owl-theme owl-carousel">

            <Swiper
              slidesPerView={1}
              spaceBetween={10}

              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{

                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}

              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-1.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">Graphics Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Thomas<br /><span>Alison</span></a>
                      </h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-2.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">Fashion Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Monalisa<br /><span>Olivia</span></a></h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-3.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">UI Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Richard<br /><span>Mark</span></a></h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-1.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">Graphics Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Thomas<br /><span>Alison</span></a>
                      </h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-2.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">Fashion Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Monalisa<br /><span>Olivia</span></a></h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="team-two__single">
                    <div className="team-two__img-1">
                      <img src="/assets/images/team/team-2-3.jpg" alt="" />
                    </div>
                    <div className="team-two__arrow">
                      <a href="#"><span className="icon-circle-left"></span></a>
                    </div>
                    <div className="team-two__content">
                      <p className="team-two__sub-title">UI Designer</p>
                      <h3 className="team-two__name">
                        <a href="#">Richard<br /><span>Mark</span></a></h3>
                    </div>
                    <div className="team-two__social-box">
                      <div className="team-two__plus">
                        <i><span className="icon-plus"></span></i>
                      </div>
                      <div className="team-two__social-list">
                        <a href="#"><span className="fab fa-linkedin-in"></span></a>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        <div className="sliding-text-five">
          <ul className="sliding-text-five__list list-unstyled marquee_mode-2">
            <li>
              <h2 data-hover="Our Professional" className="sliding-text-five__title">Our Professional</h2>
            </li>
            <li><img src="/assets/images/shapes/sliding-text-five-shape-1.png" alt="" /></li>
            <li>
              <h2 data-hover="Our Professional" className="sliding-text-five__title">Our Professional</h2>
            </li>
            <li><img src="/assets/images/shapes/sliding-text-five-shape-1.png" alt="" /></li>
          </ul>
        </div>
      </section>
      {/* <!--Team Two End --> */}

      {/* <!--live class Two Start --> */}
      <section className="live-class-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="live-class-two__left">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <div className="section-title-two__tagline-box">
                    <div className="section-title-two__tagline-shape">
                      <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
                    </div>
                    <span className="section-title-two__tagline">Join Live</span>
                  </div>
                  <h2 className="section-title-two__title title-animation">Join Our live Class, Start<br /> Your Online
                    <span>Journey</span>
                  </h2>
                </div>
                <ul className="live-class-two__list list-unstyled">
                  <li>
                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                      <div className="live-class-two__icon"></div>
                    </a>
                    <div className="live-class-two__content">
                      <ul className="live-class-two__content-meta-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-book"></span>
                          </div>
                          <p>45 Lesson</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <p>620h 55min</p>
                        </li>
                      </ul>
                      <h3 className="live-class-two__content-title">
                        <a href="#">Master Python Programming for<br /> Beginners and Beyond</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                      <div className="live-class-two__icon"></div>
                    </a>
                    <div className="live-class-two__content">
                      <ul className="live-class-two__content-meta-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-book"></span>
                          </div>
                          <p>45 Lesson</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <p>620h 55min</p>
                        </li>
                      </ul>
                      <h3 className="live-class-two__content-title">
                        <a href="#">Meet the Team: Passionate People,<br /> Exceptional Talent</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                      <div className="live-class-two__icon"></div>
                    </a>
                    <div className="live-class-two__content">
                      <ul className="live-class-two__content-meta-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-book"></span>
                          </div>
                          <p>45 Lesson</p>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <p>620h 55min</p>
                        </li>
                      </ul>
                      <h3 className="live-class-two__content-title">
                        <a href="#">The Faces Behind the Brand,<br /> Dedicated, Driven</a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="live-class-two__right">
                <div className="live-class-two__shape-1 rotate-me">
                  <img src="/assets/images/shapes/live-class-two-shape-1.png" alt="" />
                </div>
                <div className="live-class-two__shape-2 text-rotate-box">
                  <img src="/assets/images/shapes/live-class-two-shape-2.png" alt="" />
                </div>
                <div className="live-class-two__img-box">
                  <img src="/assets/images/resources/live-class-two-img-1.jpg" alt="" />
                  <ul className="list-unstyled live-class-two__video-control">
                    <li><a href="#"><span className="icon-screen-share"></span></a></li>
                    <li><a href="#"><span className="icon-microphone"></span></a></li>
                    <li><a href="#"><span className="icon-phone"></span></a></li>
                    <li><a href="#"><span className="icon-video-slash"></span></a></li>
                    <li><a href="#"><span className="icon-share-from"></span></a></li>
                  </ul>
                  <div className="live-class-two__live">
                    <div className="live-class-two__live-icon">
                      <span className="icon-wifi"></span>
                    </div>
                    <p className="live-class-two__live-text">LIVE - 01:30:56</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--live class Two End --> */}

      {/* <!-- Testimonial Two Start --> */}
      <section className="testimonial-two">
        <div className="testimonial-two__shape-6">
          <img src="/assets/images/shapes/testimonial-two-shape-6.png" alt="" />
        </div>
        <div className="testimonial-two__shape-1">
          <img src="/assets/images/shapes/testimonial-two-shape-1.png" alt="" />
          <div className="testimonial-two__shape-icon-1">
            <img src="/assets/images/icon/testimonial-two-shape-icon-1.png" alt="" className="zoom-fade" />
          </div>
          <div className="testimonial-two__shape-img-2">
            <img src="/assets/images/testimonial/testimonial-two-shape-img-2.jpg" alt="" />
          </div>
          <div className="testimonial-two__shape-img-3 img-bounce">
            <img src="/assets/images/testimonial/testimonial-two-shape-img-3.jpg" alt="" />
          </div>
        </div>
        <div className="testimonial-two__shape-2">
          <img src="/assets/images/shapes/testimonial-two-shape-2.png" alt="" />
          <div className="testimonial-two__shape-icon-2 float-bob-y">
            <img src="/assets/images/icon/testimonial-two-shape-icon-2.png" alt="" />
          </div>
          <div className="testimonial-two__shape-img-1 zoom-fade">
            <img src="/assets/images/testimonial/testimonial-two-shape-img-1.jpg" alt="" />
          </div>
        </div>
        <div className="testimonial-two__shape-3 float-bob-x">
          <img src="/assets/images/shapes/testimonial-two-shape-3.png" alt="" />
        </div>
        <div className="testimonial-two__shape-4"></div>
        <div className="testimonial-two__shape-5"></div>
        <div className="container">
          <div className="testimonial-two__inner">
            <div className="testimonial-two__quote">
              <span className="icon-quote"></span>
            </div>
            <div className="testimonial-two__slider">

              <div className="testimonial-two__main-content">
                <div className="testimonial-two__carousel owl-carousel owl-theme">

                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial-two__item">
                        <div className="testimonial-two__inner-content">
                          <div className="testimonial-two__rating">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                          </div>
                          <p className="testimonial-two__text">
                            It has survived not only five centuries, but also the leap into electronic<br />
                            typesetting, remaining essentially unchanged. It was popularised in the<br />
                            1960s with the release of Letraset sheets containing Lorem Ipsum<br />
                            passages, and more recently with desktop publishing software like Aldus<br />
                            PageMaker including versions of Lorem Ipsum.
                          </p>
                          <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-logo">
                              <img src="/assets/images/testimonial/testimonial-two-client-logo.png" alt="" />
                            </div>
                            <div className="testimonial-two__client-name-box">
                              <h4 className="testimonial-two__client-name">
                                <a href='#'>Mitchel Clack</a>
                              </h4>
                              <p className="testimonial-two__client-sub-title">Tech Specialist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial-two__item">
                        <div className="testimonial-two__inner-content">
                          <div className="testimonial-two__rating">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                          </div>
                          <p className="testimonial-two__text">
                            It has survived not only five centuries, but also the leap into electronic<br />
                            typesetting, remaining essentially unchanged. It was popularised in the<br />
                            1960s with the release of Letraset sheets containing Lorem Ipsum<br />
                            passages, and more recently with desktop publishing software like Aldus<br />
                            PageMaker including versions of Lorem Ipsum.
                          </p>
                          <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-logo">
                              <img src="/assets/images/testimonial/testimonial-two-client-logo.png" alt="" />
                            </div>
                            <div className="testimonial-two__client-name-box">
                              <h4 className="testimonial-two__client-name">
                                <a href='#'>Mitchela Smith</a>
                              </h4>
                              <p className="testimonial-two__client-sub-title">Tech Specialist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial-two__item">
                        <div className="testimonial-two__inner-content">
                          <div className="testimonial-two__rating">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                          </div>
                          <p className="testimonial-two__text">
                            It has survived not only five centuries, but also the leap into electronic<br />
                            typesetting, remaining essentially unchanged. It was popularised in the<br />
                            1960s with the release of Letraset sheets containing Lorem Ipsum<br />
                            passages, and more recently with desktop publishing software like Aldus<br />
                            PageMaker including versions of Lorem Ipsum.
                          </p>
                          <div className="testimonial-two__client-info">
                            <div className="testimonial-two__client-logo">
                              <img src="/assets/images/testimonial/testimonial-two-client-logo.png" alt="" />
                            </div>
                            <div className="testimonial-two__client-name-box">
                              <h4 className="testimonial-two__client-name">
                                <a href='#'>Sarah Smith</a>
                              </h4>
                              <p className="testimonial-two__client-sub-title">Tech Specialist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>

              <div className="testimonial-two__thumb-outer-box">
                <div className="testimonial-two__thumb-carousel owl-carousel owl-theme">
                  <div className="testimonial-two__thumb-item">
                    <div className="testimonial-two__img-holder-box">
                      <div className="testimonial-two__img-holder">
                        <img src="/assets/images/testimonial/testimonial-2-1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-two__thumb-item">
                    <div className="testimonial-two__img-holder-box">
                      <div className="testimonial-two__img-holder">
                        <img src="/assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-two__thumb-item">
                    <div className="testimonial-two__img-holder-box">
                      <div className="testimonial-two__img-holder">
                        <img src="/assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Two End --> */}

      {/* <!-- Sliding Text Three Start --> */}
      {/* <section className="sliding-text-three sliding-text-four">
        <div className="sliding-text-three__wrap">
          <ul className="sliding-text-three__list list-unstyled">

            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
              }}
              loop

              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>
 
               <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li>
                  <h2 data-hover="20+ Instructor" className="sliding-text-three__title count-box">
                    Testimonial
                    <img src="/assets/images/shapes/sliding-text-three-shape-1.png" alt="" />
                  </h2>
                </li>
              </SwiperSlide> 

            </Swiper>
           </ul> 
        </div>
      </section> */}
      {/* <!-- Sliding Text Three End --> */}


      {/* <!-- Blog Two Start --> */}
      <section className="blog-two">
        <div className="container">
          <div className="section-title-two text-center sec-title-animation animation-style1">
            <div className="section-title-two__tagline-box">
              <div className="section-title-two__tagline-shape">
                <img src="/assets/images/shapes/section-title-two-shape-1.png" alt="" />
              </div>
              <span className="section-title-two__tagline">Our Insight</span>
            </div>
            <h2 className="section-title-two__title title-animation">
              Your Source for Ideas, <br />Insights, and <span>Inspiration</span>
            </h2>
          </div>
          <div className="row">
            {/* <!-- Blog Two Single Start --> */}
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="/assets/images/blog/blog-2-1.jpg" alt="" />
                  <div className="blog-two__date">
                    <span className="icon-calendar"></span>
                    <p>Nov 02, 2024</p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__meta-box">
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <a href='#'><span className="icon-tags"></span>Business</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-clock"></span>10 Min Read</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-comments"></span>(Comments)</a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-two__title">
                    <a href='#'>How to Succeed in Online Learning: Tips for Students</a>
                  </h4>
                  <p className="blog-two__text">The discusses the advantages of using LMS for upskilling employees, managing compliance training,</p>
                </div>
              </div>
            </div>
            {/* <!-- Blog Two Single End --> */}
            {/* <!-- Blog Two Single Start --> */}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="/assets/images/blog/blog-2-2.jpg" alt="" />
                  <div className="blog-two__date">
                    <span className="icon-calendar"></span>
                    <p>Nov 02, 2024</p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__meta-box">
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <a href='#'><span className="icon-tags"></span>Business</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-clock"></span>10 Min Read</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-comments"></span>(Comments)</a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-two__title">
                    <a href='#'>The Future of Education: Why Online Learning is Here to Stay</a>
                  </h4>
                  <p className="blog-two__text">The discusses the advantages of using LMS for upskilling employees, managing compliance training,</p>
                </div>
              </div>
            </div>
            {/* <!-- Blog Two Single End --> */}
            {/* <!-- Blog Two Single Start --> */}
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <img src="/assets/images/blog/blog-2-3.jpg" alt="" />
                  <div className="blog-two__date">
                    <span className="icon-calendar"></span>
                    <p>Nov 02, 2024</p>
                  </div>
                </div>
                <div className="blog-two__content">
                  <div className="blog-two__meta-box">
                    <ul className="blog-two__meta list-unstyled">
                      <li>
                        <a href='#'><span className="icon-tags"></span>Business</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-clock"></span>10 Min Read</a>
                      </li>
                      <li>
                        <a href='#'><span className="icon-comments"></span>(Comments)</a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-two__title">
                    <a href='#'>Creating a Productive Study Space for Online Learning</a>
                  </h4>
                  <p className="blog-two__text">The discusses the advantages of using LMS for upskilling employees, managing compliance training,</p>
                </div>
              </div>
            </div>
            {/* <!-- Blog Two Single End --> */}
          </div>
        </div>
      </section>
      {/* <!-- Blog Two End --> */}


    </>

  )
}

export default Home