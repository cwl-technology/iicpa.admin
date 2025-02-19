"use client"

import BreadCrumb from '@/_component/main/BreadCrumb';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [jobData, setJobData] = useState();


    const getJobData = async () => {
        try {
            const res = await axios.get("/api/jobs/getAllActiveJobs");
            if (res.data.status == 1) {
                setJobData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getJobData();
    }, [])

    return (
        <>
            <BreadCrumb title={"jobs"}/>

            <section className="course-list job-page-div">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="course-grid__left">
                                <div className="course-grid__sidebar">
                                    <div className="course-grid__search course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Search Now</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <form action="#">
                                            <input type="search" placeholder="Find by Designation" />
                                            <button type="submit"><i className="icon-search"></i>Search</button>
                                        </form>
                                    </div>

                                    <div className="course-grid__categories course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Select State</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <select className="course-grid__select pro-style">
                                            <option value="select">Select</option>
                                            <option value="accounting-finance">Accounting & Finance (12)</option>
                                            <option value="programming-tech">Programming & Tech (25)</option>
                                            <option value="art-design">Art & Design (59)</option>
                                            <option value="health-fitness">Health & Fitness (24)</option>
                                            <option value="sales-marketing">Sales & Marketing (40)</option>
                                            <option value="user-research">User Research (40)</option>
                                            <option value="business-development">Business Development (30)</option>
                                        </select>
                                    </div>


                                    <div className="course-grid__categories course-grid__single">
                                        <div className="course-grid__title-box">
                                            <h3 className="course-grid__title">Select District:</h3>
                                            <div className="course-grid__title-shape-1">
                                                <img src="/assets/images/shapes/course-grid-title-shape-1.png" alt="" />
                                            </div>
                                        </div>
                                        <select className="course-grid__select pro-style">
                                            <option value="select">Select</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="course-list__right">
                                {
                                    jobData?.map((ele, ind) =>
                                        <div className="course-list__single job-list-single" key={ind}>
                                            <div className="course-list__content">
                                                <div className='d-flex justify-content-between'>
                                                    <h3 className="course-list__title mt-0"><a href="#">{ele.jobTitle}</a></h3>

                                                    <div className='disclosed'>
                                                        <div className='disclosed-icon'>
                                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                                            {ele.jobPackage}
                                                        </div>
                                                        {/* <div className='date'>
                                                            feb 18 ,2025
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <ul className="course-list__meta list-unstyled mt-0">
                                                    <li>
                                                        <p><i className="fa-solid fa-chart-line"></i>{ele.jobExperienceYear} year</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="fa-solid fa-location-dot"></i>{ele.jobLocation}</p>
                                                    </li>
                                                </ul>
                                                <div className="course-list__btn-and-client-info">
                                                    <div className="course-list__btn-box job-description-box">
                                                        <div dangerouslySetInnerHTML={{__html:ele.jobDescription || ""}}>
                                                        </div>
                                                    </div>
                                                    <div className="course-list__client-box">
                                                        <div className="course-list__btn-box">
                                                            <a href={`/${ele.jobLink}`} className="thm-btn-two">
                                                                <span>view link</span>
                                                                <i className="icon-angles-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default page