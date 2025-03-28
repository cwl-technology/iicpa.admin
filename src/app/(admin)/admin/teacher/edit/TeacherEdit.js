"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';


const TeacherEdit = () => {
    const [centers, setCenters] = useState();
    const [courses, setCourses] = useState();
    const [teacherData, setTeacherData] = useState();
    const { register, handleSubmit, reset, watch, formState: { isSubmitting, errors } } = useForm({
        defaultValues: {
            centerId: "",
            courseId: ""
        }
    })
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const getCenterData = async () => {
        try {
            const res = await axios.get("/api/center/getAllActiveCenter");
            if (res.data.status == 1) {
                setCenters(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseData = async (req, res) => {
        try {
            const res = await axios.get("/api/courses/getAllActiveCourses");
            if (res.data.status == 1) {
                setCourses(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    const onSubmit = async (data) => {
        try {
            data.id = id;
            const res = await axios.post("/api/teacher/updateTeacher", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/teacher");
            } else {
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getTeacherData = async (data) => {
        try {
            const res = await axios.post("/api/teacher/getTeacherDataById", { id: id });
            if (res.data.status == 1) {
                setTeacherData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (teacherData, courses, centers) {
            reset(teacherData);
        }
    }, [teacherData, courses, centers])

    useEffect(() => {
        getCenterData();
        getCourseData();
    }, []);

    useEffect(() => {
        if (id) {
            getTeacherData();
        }
    }, [id])



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
                                            <h4 className="header-title">Update Teacher</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/teacher" className="btn btn-primary mb-2 me-2"> View Teacher</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Center</label>
                                                        <select id="example-select"
                                                            {...register("centerId", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Center is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.centerId ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked >Select Center</option>
                                                            {
                                                                centers?.map((ele, ind) =>
                                                                    <option value={ele._id} key={ind}>{ele.name}</option>)
                                                            }
                                                        </select>
                                                        {
                                                            errors.centerId && <span className="help-block text-danger"><small>{errors.centerId.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Course</label>
                                                        <select id="example-select"
                                                            {...register("courseId", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Course is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.courseId ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked >Select Course</option>
                                                            {
                                                                courses?.map((ele, ind) =>
                                                                    <option value={ele._id} key={ind}>{ele.courseName}</option>)
                                                            }
                                                        </select>
                                                        {
                                                            errors.courseId && <span className="help-block text-danger"><small>{errors.courseId.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Name</label>
                                                        <input
                                                            {...register("name",
                                                                { required: { value: true, message: "Name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.name ? "border-danger" : ""}`}
                                                            placeholder='Enter the name' />
                                                        {
                                                            errors.name && <span className="help-block text-danger"><small>{errors.name.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Email</label>
                                                        <input
                                                            {...register("email",
                                                                {
                                                                    required: { value: true, message: "Email is required!" }, pattern: {
                                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                        message: "Invalid email!"
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.email ? "border-danger" : ""}`}
                                                            placeholder='Enter the email' />
                                                        {
                                                            errors.email && <span className="help-block text-danger"><small>{errors.email.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Phone</label>
                                                        <input
                                                            {...register("phone",
                                                                {
                                                                    required: { value: true, message: "Phone is required!" }, pattern: {
                                                                        value: /^\d{10}$/,
                                                                        message: "Invalid phone!"
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.phone ? "border-danger" : ""}`}
                                                            placeholder='Enter the phone' />
                                                        {
                                                            errors.phone && <span className="help-block text-danger"><small>{errors.phone.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Password</label>
                                                        <input
                                                            {...register("password")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the password' />

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

export default TeacherEdit