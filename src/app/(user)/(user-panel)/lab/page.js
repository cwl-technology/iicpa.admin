"use client"

import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const session = useSession();
    const [courseData, setCourseData] = useState();
    const userId = session?.data?.user?.id;

    const getCourseData = async () => {
        try {
            const res = await axios.post("/api/courses/getPurchasedCourse", {
                userId: userId
            })

            if (res.data.status == 1) {
                setCourseData(res.data.data);
            }
        } catch (err) {
            console.log(er);
        }
    }

    useEffect(() => {
        if (userId) {
            getCourseData();
        }
    }, [userId])


    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-primary-light">
                            <div className="card-header">
                                <h4 className="card-title">Purchased Course</h4>
                            </div>
                        </div>

                        {
                            courseData?.map((ele, ind) =>
                                <div className="box" key={ind}>
                                    <div className="box-header with-border d-flex">
                                        <h6 className="box-title">{ele.courseName}</h6>
                                        {/* <span aria-label="dashboard" className="certified-btn"><span>Not Certified</span></span> */}
                                        <div className="box-controls pull-right d-flex">
                                            <a href="#" aria-label="dashboard" className="download-btn"><span>Download Certificate</span></a>
                                            {/* <div className="progress progress-xs w-100 mb-0 mt-10">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%", ariaValuenow: "40", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                    </div> */}
                                        </div>
                                    </div>

                                    {
                                        ele.chapters?.map((e, i) =>
                                            <div className="custom-box-body" key={i}>

                                                <div className="custom-card-header">
                                                    <h3>
                                                        <span className="custom-step-number">{i + 1}.</span>{e.chapterName}
                                                    </h3>
                                                </div>
                                                <div className="custom-card-body">
                                                    <div className="progress progress-xs-1 w-100 mb-0 mt-10">

                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%", ariaValuenow: "40", ariaValuemin: "0", ariaValuemax: "100" }}>40%</div>
                                                    </div>
                                                    <Link href={{
                                                        pathname: `/lab/${ele.courseSlug}`,
                                                        query: {
                                                            id: ele._id,
                                                            chapterName: e.chapterName,
                                                            chapterId: e._id,
                                                            topicId: e.firstTopicId

                                                        }
                                                    }} className="custom-status-link">Completed</Link>
                                                </div>

                                            </div>)
                                    }

                                </div>
                            )
                        }

                    </section>
                </div>
            </div>
        </>
    )
}

export default page