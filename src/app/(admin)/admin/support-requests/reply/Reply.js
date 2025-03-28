"use client"

import React, { useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import dynamic from "next/dynamic";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { useRouter, useSearchParams } from 'next/navigation';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const Reply = () => {
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [issueType, setIssueType] = useState("General Issue");
    const router = useRouter();


    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }))

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("ticketId", id)
            formdata.append("title", data.title)
            formdata.append("image", data.image[0])
            formdata.append("description", description)

            const res = await axios.post("/api/ticket/postReply", formdata);
            console.log(res.data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/support-requests")
            } else {
                toast.error(res.data.error);
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
                                <h4 className="header-title">Provide Support</h4>
                                <hr />
                                <div className="tab-content mt-5">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>

                                            <div className="row">

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Issue Title</label>
                                                        <input type="text" className={`form-control ${errors.title ? "border-danger" : ""}`} {...register("title", {
                                                            required: {
                                                                value: true,
                                                                message: "Title is required!"
                                                            }
                                                        })} placeholder="Enter the title" />
                                                        {
                                                            errors.title && <span className="help-block text-danger"><small>{errors.title.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className={`form-control ${errors.image ? "border-danger" : ""}`}
                                                            {...register("image", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Image is required!"
                                                                }
                                                            })}
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
                                                        image && <img src={URL.createObjectURL(image)} alt="error" width={"100px"} />
                                                    }
                                                </div>

                                                <div className='col-md-12 mt-3'>
                                                    <label className='mb-1'>
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


                                                <Link href='#' className='mt-4'>
                                                    <button className="btn btn-primary mt-5 " id="btn-new-event" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                                        {isSubmitting ? <ButtonLoader /> : "Add Reply"}
                                                    </button>
                                                </Link>


                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Reply