"use client"

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import usePermission from '@/_helper/frontend/Permission';


const TopicEdit = () => {

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const chapterName = searchParams.get("chapterName");
    const courseName = searchParams.get("courseName");
    const id = searchParams.get("id");

    //Permission Logic
    const menuId = "67a1c4aabaf5937f5c93a983"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])

    const createQueryString = (name, value) => {
        const params = new URLSearchParams()
        params.set(name, value)
        return params.toString()
    }

    const onSubmit = async (data) => {
        try {
            data.id = id;
            data.courseId = courseId;
            data.chapterId = chapterId;
            const res = await axios.post("/api/chapterTopic/updateTopic", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/topic?${createQueryString('courseName', courseName)}&${createQueryString('courseId', courseId)}&${createQueryString('chapterName', chapterName)}&${createQueryString('chapterId', chapterId)}`);
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getTopicId = async () => {
        try {
            const res = await axios.post("/api/chapterTopic/getTopicByTopicId", {
                id: id
            });
            if (res.data.status == 1) {
                reset(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getTopicId();
        }
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
                                            <h4 className="header-title">Update Topic</h4>
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

export default TopicEdit