"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { PermissionContext } from '@/_context/PermissionContext';

const page = () => {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/courseCategory/createCourseCategory", data);
            console.log(res.data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/course-category");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }


    //Permission Logic
    const menuId = "67a1c491baf5937f5c93a982"
    const { permission } = useContext(PermissionContext);
    const getPermissionsBymenuId = (serviceNumber) => {
        const permissions = permission?.find((ele) => ele.menuId == menuId)
        return permissions?.[serviceNumber] || null;
    }

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
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
                                            <h4 className="header-title">Create Course Category</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/course-category" className="btn btn-primary mb-2 me-2"> View Courses Category</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Category Name</label>
                                                        <input
                                                            {...register("categoryName",
                                                                { required: { value: true, message: "Course category name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.categoryName ? "border-danger" : ""}`}
                                                            placeholder='Enter category name' />
                                                        {
                                                            errors.categoryName && <span className="help-block text-danger"><small>{errors.categoryName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Category Slug</label>
                                                        <input
                                                            {...register("categorySlug",
                                                                { required: { value: true, message: "Course category slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.categorySlug ? "border-danger" : ""}`}
                                                            placeholder='Enter course category slug' />
                                                        {
                                                            errors.categorySlug && <span className="help-block text-danger"><small>{errors.categorySlug.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs nav-bordered mb-3 mt-3">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">SEO Section</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Title</label>
                                                        <input
                                                            {...register("title")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter title' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Keywords</label>
                                                        <textarea className="form-control"
                                                            {...register("keywords")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Description</label>

                                                        <textarea className="form-control"
                                                            {...register("metaDescription")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <button className='mt-4 btn btn-primary' onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                    {
                                        isSubmitting ? <ButtonLoader /> : "Create"
                                    }
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