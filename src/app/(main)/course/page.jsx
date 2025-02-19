"use client"

import BreadCrumb from '@/_component/main/BreadCrumb';
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Page = () => {
    const [courseCateogry, setCourseCateogory] = useState();
    const [course, setCourse] = useState();

    const getCourseCategoryData = async () => {
        try {
            const res = await axios.get("/api/courseCategory/getAllActiveCourseCategory");
            if (res.data.status == 1) {
                setCourseCateogory(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseData = async () => {
        try {
            const res = await axios.get("/api/courses/getAllActiveCourses");
            console.log(res.data);
            if (res.data.status == 1) {
                setCourse(res.data.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCourseCategoryData();
        getCourseData();
    }, [])

    return (
        <>
            <BreadCrumb title={"Course"}/>

            <section className="course-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="course-grid__left">
                                <div className="course-grid__sidebar">
                                    <div className="course-grid__search course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Search Now</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <p className="course-grid__search-text">With the release of Letraset sheets containi
                                            Lorem Ipsum passages</p>
                                        <form action="#">
                                            <input type="search" placeholder="Find by Course Name" />
                                            <button type="submit"><i className="icon-search"></i>Search</button>
                                        </form>
                                    </div>

                                    <div className="course-grid__categories course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Categories</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <ul className="list-unstyled course-grid__list-item">
                                            {
                                                courseCateogry?.map((ele, ind) =>
                                                    <li key={ind}>
                                                        <div className="course-grid__list-check"></div>
                                                        <p className="course-grid__list-text">{ele.categoryName}</p>
                                                    </li>
                                                )
                                            }

                                        </ul>
                                    </div>
                                    <div className="course-grid__skill course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Skills Level</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <ul className="list-unstyled course-grid__list-item">
                                            <li>
                                                <div className="course-grid__list-check"></div>
                                                <p className="course-grid__list-text">Foundation</p>
                                            </li>
                                            <li>
                                                <div className="course-grid__list-check"></div>
                                                <p className="course-grid__list-text">Core</p>
                                            </li>
                                            <li>
                                                <div className="course-grid__list-check"></div>
                                                <p className="course-grid__list-text">Expert</p>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="course-grid__discount course-grid__single">
                                        <div className="course-grid__discount-shape-bg"
                                            style={{ backgroundImage: "url('/assets/images/shapes/course-grid-discount-shape-bg.png')" }}>
                                        </div>
                                        <h4 className="course-grid__discount-title">20% Discount</h4>
                                        <p className="course-grid__discount-text">is simply dummy text of the printing <br /> and
                                            typesetting industry</p>
                                        <div className="course-grid__discount-img">
                                            <img src="/assets/images/resources/course-grid-discount-img-1.png" alt="" />
                                        </div>
                                        <div className="course-grid__discount-coupon">
                                            <p>Use Coupon</p>
                                            <h5>#FuStudy56</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="course-grid__right">
                                <div className="course-grid__right-content-box">
                                    <div className="row">
                                        {
                                            course?.map((ele, ind) =>
                                                <div className="col-xl-6" key={ind}>
                                                    <div className="courses-two__single">
                                                        <div className="courses-two__img-box">
                                                            <div className="courses-two__img">
                                                                <img src={`/uploads/${ele.courseImage}`} alt="" />
                                                            </div>
                                                            <div className="courses-two__heart">
                                                                <a href='/course/course-details'><span className="icon-heart"></span></a>
                                                            </div>
                                                        </div>
                                                        <div className="courses-two__content pb-2">
                                                            <div className="courses-two__doller-and-review">
                                                                <div className="courses-two__client-box">
                                                                    <div className="courses-two__client-content">
                                                                        <h4>{ele.courseCategoryName}</h4>
                                                                    </div>
                                                                </div>

                                                                <div className="courses-two__review">
                                                                    <p><i className="icon-star"></i> 4.5 <span>(129 Reviews)</span></p>
                                                                </div>
                                                            </div>
                                                            <h3 className="courses-two__title"><Link href={`/course/${ele.courseSlug}`}>{ele.courseName}</Link></h3>
                                                            <div className="courses-two__btn-and-client-box">
                                                                <div className="courses-two__btn-box">
                                                                    <Link href={`/course/${ele.courseSlug}`} className="thm-btn-two">
                                                                        <span>Enroll Now</span>
                                                                        <i className="icon-angles-right"></i>
                                                                    </Link>
                                                                </div>
                                                                <div className="courses-two__doller">
                                                                    <p className='mb-0'><i className="bi bi-currency-rupee"></i>{ele.priceAfterDiscount}</p>
                                                                    <del><i className="bi bi-currency-rupee"></i>{ele.actualPrice}</del>
                                                                </div>
                                                                {/* <div className='thm-btn-two'>
                                                                    <span>5% OFF</span>
                                                                </div> */}

                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
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