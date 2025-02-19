"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const SubTopicCreate = () => {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const topicId = searchParams.get("topicId");

    const [image, setImage] = useState();

    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );

    const [subTopicDescription, setSubTopicDescription] = useState();

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("courseId",courseId);
            formdata.append("chapterId",chapterId);
            formdata.append("topicId",topicId);
            formdata.append("subTopicName",data.subTopicName);
            formdata.append("subTopicSlug",data.subTopicSlug);
            formdata.append("subTopicImage",data.subTopicImage[0]);
            formdata.append("subTopicVideo",data.subTopicVideo[0]);
            formdata.append("subTopicDescription",subTopicDescription);

            const res = await axios.post("/api/chapterSubTopic/createSubTopic", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/sub-topic?${searchParams.toString()}`);
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
                                            <h4 className="header-title">Create Sub Topic</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Topic Name</label>
                                                        <input
                                                            {...register("subTopicName",
                                                                { required: { value: true, message: "Sub topic name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.subTopicName ? "border-danger" : ""}`}
                                                            placeholder='Enter sub topic name' />
                                                        {
                                                            errors.subTopicName && <span className="help-block text-danger"><small>{errors.subTopicName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Topic Slug</label>
                                                        <input
                                                            {...register("subTopicSlug",
                                                                { required: { value: true, message: "Sub topic slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.subTopicSlug ? "border-danger" : ""}`}
                                                            placeholder='Enter sub topic slug' />
                                                        {
                                                            errors.subTopicSlug && <span className="help-block text-danger"><small>{errors.subTopicSlug.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("subTopicImage")}
                                                            accept="image/*"
                                                            onChange={(e) => setImage(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        image &&
                                                        <img src={URL.createObjectURL(image)} alt="error" width={"100px"} />
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Video</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("subTopicVideo")}
                                                            accept="video/*"

                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-md-12 my-2'>
                                                    <label className='mb-2'>
                                                        Content
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={subTopicDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setSubTopicDescription(newContent)}
                                                    />
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

export default SubTopicCreate