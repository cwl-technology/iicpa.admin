"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
// import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

import dynamic from "next/dynamic";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

const page = () => {


    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const [description, setDescription] = useState();
    const [courseData, setCourseData] = useState();
    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );


    const onSubmit = async (data) => {
        try {
            data.description = description;
            const res = await axios.post("/api/livesessions/createLiveSession", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/live-session");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseData = async () => {
        try {
            const res = await axios.get("/api/courses/getAllActiveCourses");
            if (res.data.status == 1) {
                setCourseData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourseData();
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-bordered mb-3 d-flex justify-content-between">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Create Live Session</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/live-session" className="btn btn-primary mb-2 me-2"> View Live Sessions</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select course</label>
                                                        <select id="example-select"
                                                            {...register("courseId", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Course is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.courseId ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked value={""}>Select Course</option>
                                                            {
                                                                courseData?.map((ele, ind) =>
                                                                    <option key={ind}>{ele.courseName}</option>
                                                                )
                                                            }
                                                            {/* {
                                                    courseData?.map((ele, ind) =>
                                                        <option value={ele._id} key={ind}>{ele.courseName} </option>)
                                                } */}
                                                        </select>
                                                        {
                                                            errors.courseId && <span className="help-block text-danger"><small>{errors.courseId.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='col-md-6'></div>
                                                <div className="col-md-4">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Date</label>
                                                        <input
                                                            {...register("date",
                                                                { required: { value: true, message: "Date is required!" } }
                                                            )}
                                                            type="date" id="simpleinput" className={`form-control ${errors.date ? "border-danger" : ""}`}
                                                            placeholder='Enter course name' />
                                                        {
                                                            errors.date && <span className="help-block text-danger"><small>{errors.date.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-4">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Start Time</label>
                                                        <input
                                                            {...register("startTime",
                                                                { required: { value: true, message: "Start time is required!" } }
                                                            )}
                                                            type="time" id="simpleinput" className={`form-control ${errors.startTime ? "border-danger" : ""}`}
                                                            placeholder='Enter course name' />
                                                        {
                                                            errors.startTime && <span className="help-block text-danger"><small>{errors.startTime.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-4">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">End Time</label>
                                                        <input
                                                            {...register("endTime",
                                                                { required: { value: true, message: "End time is required!" } }
                                                            )}
                                                            type="time" id="simpleinput" className={`form-control ${errors.endTime ? "border-danger" : ""}`}
                                                            placeholder='Enter course name' />
                                                        {
                                                            errors.endTime && <span className="help-block text-danger"><small>{errors.endTime.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-12">
                                                    <label className='form-label mt-2'>
                                                        Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={description}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setDescription(newContent)}
                                                    />
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <button className='mt-4 btn btn-primary' onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                    {isSubmitting ? <ButtonLoader/> : "Create"}
                                </button>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
}

export default page