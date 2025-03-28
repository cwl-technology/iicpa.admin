"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
// import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';

const Edit = () => {


    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm({
        defaultValues: {
            courseId: ""
        }
    })
    const router = useRouter();
    const [courseData, setCourseData] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [image, setImage] = useState();
    const [currentImage, setCurrentImage] = useState();


    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("description", data.description)
            formdata.append("courseId", data.courseId)
            formdata.append("date", data.date)
            formdata.append("startTime", data.startTime)
            formdata.append("endTime", data.endTime)
            formdata.append("image", image)
            formdata.append("price", data.price)
            formdata.append("link", data.link)
            formdata.append("id", id)

            const res = await axios.post("/api/livesessions/updateLiveSession", formdata);
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

    const getLiveSessionData = async () => {
        try {
            const res = await axios.post("/api/livesessions/getLiveSessionById", {
                id: id
            });
            if (res.data.status == 1) {
                reset(res.data.data);
                setCurrentImage(res.data.data.image);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourseData();
    }, [])

    useEffect(() => {
        if (id && courseData) {
            getLiveSessionData();
        }
    }, [id, courseData])

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
                                            <h4 className="header-title">Update Live Session</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/live-session" className="btn btn-primary mb-2 me-2"> View Live Sessions</Link>
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
                                                                    <option key={ind} value={ele._id}>{ele.courseName}</option>
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
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className={`form-control ${errors.image ? "border-danger" : ""}`}
                                                            {...register("image")}
                                                            accept="image/*"
                                                            onChange={(e) => setImage(e.target.files[0])}
                                                        />
                                                        {
                                                            errors.image && <span className="help-block text-danger"><small>{errors.image.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        image ? <img src={URL.createObjectURL(image)} alt="error" width={"100px"} /> : <img src={`/uploads/${currentImage}`} alt="error" width={"100px"} />
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <label className='form-label mt-2'>
                                                        Content
                                                    </label>
                                                    <input
                                                        {...register("description")}
                                                        type="text" id="simpleinput" className={`form-control`}
                                                        placeholder='Enter the content' />
                                                </div>
                                                <div className="col-md-6">

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
                                                <div className="col-md-6">

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
                                                <div className="col-md-6">

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
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Link</label>
                                                        <input
                                                            {...register("link")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the link' />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Price (In Rupees)</label>
                                                        <input
                                                            {...register("price",
                                                                {
                                                                    required: { value: true, message: "Price is required!" },
                                                                    min: { value: 0, message: "Price cannot be less than 0!" }
                                                                }
                                                            )}
                                                            type="number" min={0} id="simpleinput" className={`form-control ${errors.price ? "border-danger" : ""}`}
                                                            placeholder='Enter the price' />
                                                        {
                                                            errors.price && <span className="help-block text-danger"><small>{errors.price.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <button className='mt-4 btn btn-primary' onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                    {isSubmitting ? <ButtonLoader /> : "Update"}
                                </button>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
}

export default Edit