"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const page = () => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const [rating, setRating] = useState(0);
    const router = useRouter();


    const onSubmit = async (data) => {
        try {
            data.ratings = rating;
            const res = await axios.post("/api/testimonial/createTestimonial", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/testimonial");
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }



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
                                            <h4 className="header-title">Create Testimonial</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/testimonial" className="btn btn-primary mb-2 me-2"> View Testimonial</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

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
                                                        <label htmlFor="simpleinput" className="form-label">Designation</label>
                                                        <input
                                                            {...register("designation",
                                                                { required: { value: true, message: "Designation is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.designation ? "border-danger" : ""}`}
                                                            placeholder='Enter the designation' />
                                                        {
                                                            errors.designation && <span className="help-block text-danger"><small>{errors.designation.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content</label>

                                                        <textarea className={`form-control ${errors.content ? "border-danger" : ""}`}
                                                            {...register("content", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Content is required!"
                                                                }
                                                            })} id="example-textarea" rows="3">
                                                        </textarea>
                                                        {
                                                            errors.content && <span className="help-block text-danger"><small>{errors.content.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Ratings</label>

                                                        <div className="mt-2 rating-star d-flex gap-2">
                                                            {
                                                                [1, 2, 3, 4, 5].map((ele, ind) => {
                                                                    return (
                                                                        <div key={ind} className=''>
                                                                            <label htmlFor={ele} className="mr-2">
                                                                                <i className="fa fa-star" style={ele <= rating ? { color: "yellow", fontSize: "20px" } : { color: "gray", fontSize: "20px" }}></i>
                                                                            </label>
                                                                            <input id={ele} type="radio" name="rating" value={ele}
                                                                                onChange={(e) => setRating(e.target.value)}
                                                                                className="d-none"
                                                                            />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <button className='mt-4 btn btn-primary' onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                    {isSubmitting ? <ButtonLoader /> : "Create"}
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