"use client"

import axios from 'axios'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

    const pathname = usePathname();
    const courseSlug = pathname.split("/")[2]
    const [syllabusData, setSyllabusData] = useState();

    const getDetailedSyllabus = async () => {
        try {
            const res = await axios.post("/api/courses/getCourseSyllabusBySlug", {
                courseSlug: courseSlug
            })
            if (res.data.status == 1) {
                setSyllabusData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (courseSlug) {
            getDetailedSyllabus();
        }
    }, [courseSlug])

    return (
        <>
            
            <div className=''>
                <div className='detail-syllabus text-center my-5'>
                    <h2>Detailed syllabus</h2>
                </div>
                <div className=' px-5 py-3'>
                {
                    syllabusData?.map((chapter, index) =>
                        <div key={index} className=''>
                            <div className='chapter d-flex mt-0 mb-3'>
                                <h3>Chapter {index + 1}:</h3>
                                <h2 className='chapter-name'>{chapter?.chapterName}</h2>
                            </div>
                            <div className='row'>
                                {chapter?.topics?.map((topic, ind) =>
                                    <div className="col-12 col-md-3 col-lg-4 wow fadeInLeft " data-wow-delay="100ms" key={ind}>
                                        <div className="courses-three__single">

                                            <div className="courses-three__content py-4">
                                                <div className="courses-three__price-and-review mb-3">
                                                    <h5 className="courses-three__price">{topic?.topicName}</h5>
                                                </div>
                                                <ul className="card-text">
                                                    {topic?.subtopic?.map((subTopic, i) =>
                                                        <li key={i}>{subTopic?.subTopicName}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    )
                }
                </div>
                

            </div>
        </>
    )
}

export default page