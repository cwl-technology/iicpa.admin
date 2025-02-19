"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";


const QuizCreate = () => {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");

    const onSubmit = async (data) => {
        try {
            data.courseId = courseId;
            data.chapterId = chapterId;
            const res = await axios.post("/api/chapterTopic/createTopic", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/topic?${searchParams.toString()}`);
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
                                            <h4 className="header-title">Create Topic</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Topic Name</label>
                                                        <input
                                                            {...register("topicName",
                                                                { required: { value: true, message: "Topic name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.topicName ? "border-danger" : ""}`}
                                                            placeholder='Enter topic name' />
                                                        {
                                                            errors.topicName && <span className="help-block text-danger"><small>{errors.topicName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Topic Slug</label>
                                                        <input
                                                            {...register("topicSlug",
                                                                { required: { value: true, message: "Topic slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.topicSlug ? "border-danger" : ""}`}
                                                            placeholder='Enter topic slug' />
                                                        {
                                                            errors.topicSlug && <span className="help-block text-danger"><small>{errors.topicSlug.message}</small></span>
                                                        }
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

export default QuizCreate