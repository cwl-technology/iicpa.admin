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
import usePermission from '@/_helper/frontend/Permission';


const ChapterCreate = () => {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();
    const courseId = searchParams.get("courseId");

    //Permission Logic
    const menuId = "67a1c4aabaf5937f5c93a983"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])

    const onSubmit = async (data) => {
        try {
            data.courseId = courseId;
            const res = await axios.post("/api/chapter/createChapter", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/chapter?${searchParams.toString()}`);
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
                                            <h4 className="header-title">Create Chapter</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Chapter Name</label>
                                                        <input
                                                            {...register("chapterName",
                                                                { required: { value: true, message: "Chapter name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.chapterName ? "border-danger" : ""}`}
                                                            placeholder='Enter chapter name' />
                                                        {
                                                            errors.chapterName && <span className="help-block text-danger"><small>{errors.chapterName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Chapter Slug</label>
                                                        <input
                                                            {...register("chapterSlug",
                                                                { required: { value: true, message: "Chapter slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.chapterSlug ? "border-danger" : ""}`}
                                                            placeholder='Enter chapter slug' />
                                                        {
                                                            errors.chapterSlug && <span className="help-block text-danger"><small>{errors.chapterSlug.message}</small></span>
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

export default ChapterCreate