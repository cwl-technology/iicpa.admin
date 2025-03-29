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
import usePermission from '@/_helper/frontend/Permission';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const page = () => {
    // Description 
    const [blogDesc, setBlogDesc] = useState('');
    
    // Image 
    const [blogImage, setBlogImage] = useState();
    

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );

    const onSubmit = async (data) => {
        try {

            const formdata = new FormData();
            formdata.append("blogName", data.blogName);
            formdata.append("blogSlug", data.blogSlug);
            formdata.append("blogContent", data.blogContent);
            formdata.append("blogDate", data.blogDate);
            formdata.append("publisherName", data.publisherName);
            formdata.append("blogDescription", blogDesc);
            formdata.append("blogImage", data.blogImage[0]);
          
            formdata.append("title", data.title);
            formdata.append("keywords", data.keywords);
            formdata.append("metaDescription", data.metaDescription);

            const res = await axios.post("/api/blog/createBlog", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/blog");
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }

    //Permission Logic
    const menuId = "67e6384ea8f1f1d5d225049d"
    const getPermissionsBymenuId = usePermission(menuId);

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
                                            <h4 className="header-title">Create Blog</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/blog" className="btn btn-primary mb-2 me-2"> View Blog</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Blog Name</label>
                                                        <input
                                                            {...register("blogName",
                                                                { required: { value: true, message: "Blog name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.blogName ? "border-danger" : ""}`}
                                                            placeholder='Enter blog name' />
                                                        {
                                                            errors.blogName && <span className="help-block text-danger"><small>{errors.blogName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Blog Slug</label>
                                                        <input
                                                            {...register("blogSlug",
                                                                { required: { value: true, message: "Blog slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.blogSlug ? "border-danger" : ""}`}
                                                            placeholder='Enter blog slug' />
                                                        {
                                                            errors.blogSlug && <span className="help-block text-danger"><small>{errors.blogSlug.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Blog Date</label>
                                                        <input
                                                            {...register("blogDate",
                                                                { required: { value: true, message: "Blog date is required!" } }
                                                            )}
                                                            type="date" id="simpleinput" className={`form-control ${errors.blogDate ? "border-danger" : ""}`}
                                                        />
                                                        {
                                                            errors.blogDate && <span className="help-block text-danger"><small>{errors.blogDate.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Publisher Name</label>
                                                        <input
                                                            {...register("publisherName")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter publisher name' />

                                                    </div>

                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Blog Content</label>

                                                        <textarea className="form-control"
                                                            {...register("blogContent", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Blog content is required"
                                                                }
                                                            })} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Blog Image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("blogImage")}
                                                            accept="image/*"
                                                            onChange={(e) => setBlogImage(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        blogImage && <img src={URL.createObjectURL(blogImage)} alt="error" width={"100px"} />
                                                    }
                                                </div>
                                                <div className='col-md-12'>
                                                    <label>
                                                        Blog Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={blogDesc}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setBlogDesc(newContent)}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <ul className="nav nav-tabs nav-bordered mb-3 mt-4">
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