"use client"



import BreadCrumb from '@/_component/main/BreadCrumb';
import { CartContext } from '@/_context/CartContext';
import CurrencyFormatter from '@/_helper/frontend/CurrencyFormatter';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [courseData, setCourseData] = useState();
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const pathname = usePathname()
    const courseSlug = pathname.split("/")[2];
    const session = useSession();
    const userId = session?.data?.user?.id;
    const { setCartNumber } = useContext(CartContext);


    const [accrodionactive, setAccrodionActive] = useState()
    const handleAccrodionClick = (tabIndex) => {
        setAccrodionActive(accrodionactive == tabIndex ? null : tabIndex);
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const getCourseData = async () => {
        try {
            const res = await axios.post("/api/courses/getCourseBySlug", { courseSlug: courseSlug });
            if (res.data.status == 1) {
                setCourseData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleAddToCart = async (e, courseId) => {
        try {
            e.preventDefault();
            const res = await axios.post("/api/cart/addToCart", {
                userId: userId,
                courseId: courseId
            })
            if (res.data.status == 1) {
                toast.success(res.data.message);
                setAlreadyAdded(true);
                setCartNumber(res.data.cartNumber)

            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (courseSlug) {
            getCourseData();
        }
    }, [courseSlug])

    const isItemInCart = async () => {
        try {
            const res = await axios.post("/api/cart/alreadyAdded", { userId: userId, courseId: courseData?._id });
            if (res.data.status == 1) {
                setAlreadyAdded(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (userId && courseData) {
            isItemInCart();
        }
    }, [userId, courseData])


    return (


        <>
            {/* <div className='detail-syllabus text-center my-3'>
                    <h2>Detailed syllabus</h2>
                </div> */}

            <BreadCrumb title={courseData?.courseName} />


            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="course-details__left">
                                {/* <div className="course-details__img">
                                    <img src={`/uploads/${courseData?.courseImage}`} alt="" />
                                </div> */}
                                <div className="course-details__content">

                                    {/* <h3 className="course-details__title mb-1">{courseData?.courseName}</h3> */}
                                    {/* <div className="course-details__tag-box my-2">
                                        <div className="course-details__tag-shape"></div>
                                        <span className="course-details__tag">{courseData?.courseCategoryName}</span>
                                    </div> */}
                                    <p dangerouslySetInnerHTML={{ __html: courseData?.courseDesc || "" }}></p>


                                    <div className="course-details__main-tab-box tabs-box">

                                        <ul className="tab-buttons list-unstyled">
                                            <li onClick={() => handleTabClick('1')} className={`tab-btn ${activeTab === '1' ? 'active-btn' : ''}`}>
                                                <p><span className="icon-pen-ruler"></span>Case Study</p>
                                            </li>

                                            <li onClick={() => handleTabClick('2')} className={`tab-btn ${activeTab === '2' ? 'active-btn' : ''}`}>
                                                <p><span className="icon-pen-ruler"></span>Curriculum</p>
                                            </li>

                                            <li onClick={() => handleTabClick('3')} className={`tab-btn ${activeTab === '3' ? 'active-btn' : ''}`}>
                                                <p><span className="icon-pen-ruler"></span>Exam & Certification</p>
                                            </li>

                                            <li onClick={() => handleTabClick('4')} className={`tab-btn ${activeTab === '4' ? 'active-btn' : ''}`}>
                                                <p><span className="icon-pen-ruler"></span>Simulation &  Experiments</p>
                                            </li>

                                        </ul>


                                        <div className="tabs-content">

                                            <div className={`tab ${activeTab === '1' ? "active-tab" : ""}`} id="overview">
                                                <div dangerouslySetInnerHTML={{ __html: courseData?.caseStudyDesc || "" }}>
                                                </div>
                                            </div>

                                            <div className={`tab ${activeTab === '2' ? 'active-tab' : ''}`} id='curriculum'>
                                                <div className="course-details__tab-inner">
                                                    <div className="course-details__curriculam">
                                                        <Link id="full_syllabus_link" className="btn-full-course" href={`/course/${courseData?.courseSlug}/syllabus`}>View
                                                            Full Syllabus</Link>
                                                        <h3 className="course-details__curriculam-title">Course Curriculum</h3>

                                                        <div className="course-details__curriculam-faq mt-2">
                                                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                                                                {
                                                                    courseData?.chapters?.map((chapter, index) =>
                                                                        <div className={`accrodion ${accrodionactive == index ? 'accrodion active' : ''}`} key={index}>
                                                                            <div className="accrodion-title" onClick={() => handleAccrodionClick(index)} >
                                                                                <div className="accrodion-title-box">
                                                                                    <div className="accrodion-title__count"></div>
                                                                                    <div className="accrodion-title-text">
                                                                                        <h4>{chapter?.chapterName}</h4>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="accrodion-content" style={accrodionactive == index ? { display: "block" } : { display: "none" }}>
                                                                                <div className="inner">

                                                                                    <ul
                                                                                        className="accrodion-content__points list-unstyled">
                                                                                        {
                                                                                            chapter?.topic?.map((ele, ind) =>
                                                                                                <li key={ind}>
                                                                                                    <p
                                                                                                        className="accrodion-content__points-text">
                                                                                                        {ele.topicName}</p>

                                                                                                    <div className="accrodion-content__icon">
                                                                                                        <span
                                                                                                            className="far fa-lock-alt"></span>
                                                                                                    </div>
                                                                                                </li>)
                                                                                        }


                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>)
                                                                }



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`tab ${activeTab === '3' ? 'active-tab' : ''}`} id='instructor'>
                                                <div dangerouslySetInnerHTML={{ __html: courseData?.examAndCertiDesc || "" }}>
                                                </div>
                                            </div>

                                            <div className={`tab ${activeTab === '4' ? "active-tab" : ""}`} id="overview">
                                                <div className="course-details__tab-inner">
                                                    <div className="course-details__overview">
                                                        <div dangerouslySetInnerHTML={{ __html: courseData?.simulationAndExpDesc || "" }}>
                                                        </div>
                                                        <div className="course-details__points-box">
                                                            <div className="row">
                                                                {courseData?.simulationAndExp?.map((ele, ind) =>
                                                                    <div className="col-12 col-md-4" key={ind}>
                                                                        <div className="card mb-3" style={{ maxWidth: "18rem", borderRadius: "15px" }}>

                                                                            <div className="card-body">
                                                                                <h5 className="card-title">{ele.heading}</h5>
                                                                                <p className="card-text">{ele.content}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>)}
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
                        <div className="col-xl-4 col-lg-5">
                            <div className="course-details__right">
                                <div className="course-details__info-box">
                                    <div className="course-details__video-link">
                                        <div className="course-details__video-link-bg"
                                            style={{ backgroundImage: "url('/assets/images/backgrounds/course-details-video-link-bg.jpg')" }}>
                                        </div>
                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                            <div className="course-details__video-icon">
                                                <span className="icon-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="course-details__doller-and-btn-box">
                                        <div className='d-flex flex-column'>
                                            <h3 className="course-details__doller">{<CurrencyFormatter price={courseData?.priceAfterDiscount} />}</h3>
                                            <del>{<CurrencyFormatter price={courseData?.actualPrice} />}</del>
                                        </div>
                                        <div className="course-details__doller-btn-box">
                                            {
                                                alreadyAdded ? <a href="#" className="thm-btn-two pe-none opacity-50" onClick={(e) => handleAddToCart(e, courseData._id)}>
                                                    <span>Added</span>
                                                    <i className="bi bi-cart2"></i>
                                                </a> : <a href="#" className="thm-btn-two" onClick={(e) => handleAddToCart(e, courseData?._id)}>
                                                    <span>Add to Cart</span>
                                                    <i className="bi bi-cart2"></i>
                                                </a>
                                            }

                                        </div>
                                    </div>

                                    <div className="course-details__info-list">
                                        <h3 className="course-details__info-list-title">This Course Included</h3>
                                        <ul className="course-details__info-list-1 list-unstyled">
                                            <li>
                                                <p><i className="icon-book"></i>Lesson</p>
                                                <span>50</span>
                                            </li>
                                            <li>
                                                <p><i className="icon-clock"></i>Duration</p>
                                                <span>30h, 20m</span>
                                            </li>
                                            <li>
                                                <p><i className="icon-chart-simple"></i>Skill Level</p>
                                                <span>Advance</span>
                                            </li>
                                            <li>
                                                <p><i className="icon-globe"></i>Language</p>
                                                <span>English, French</span>
                                            </li>
                                            <li>
                                                <p><i className="icon-stamp"></i>Certificate</p>
                                                <span>After Completed </span>
                                            </li>
                                            <li>
                                                <p><i className="icon-hourglass"></i>Deadline</p>
                                                <span>November 23, 2024</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page