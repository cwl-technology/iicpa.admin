"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";



const TeamEdit = () => {
    // Image 
    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const [image, setImage] = useState();
    const [currrentImage, setCurrentImage] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");


    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("designation", data.designation);
            formdata.append("image", image);
            formdata.append("linkedInLink", data.linkedInLink);
            formdata.append("faceBookLink", data.faceBookLink);
            formdata.append("instagramLink", data.instagramLink);
            formdata.append("id", id);

            const res = await axios.post("/api/team/updateTeamMember", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/team");
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }

    const getTeamData = async () => {
        try {
            const res = await axios.post("/api/team/getTeamMemberById", { id: id });
            if (res.data.status == 1) {
                reset(res.data.data)
                setCurrentImage(res.data.data.image)
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getTeamData();
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
                                            <h4 className="header-title">Update Team Member</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/team" className="btn btn-primary mb-2 me-2"> View Team</Link>
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

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">LinkedIn Profile Link</label>
                                                        <input
                                                            {...register("linkedInLink")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the LinkedIn profile link' />
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Facebook Profile Link</label>
                                                        <input
                                                            {...register("faceBookLink")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the Facebook profile link' />
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Instagram Profile Link</label>
                                                        <input
                                                            {...register("instagramLink")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the Instagram profile link' />
                                                    </div>

                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className={`form-control ${errors.image ? "border-danger" : ""}`}
                                                            {...register("image")}
                                                            accept="image/*"
                                                            onChange={(e) => setImage(e.target.files[0])}
                                                        />
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        image ? <img src={URL.createObjectURL(image)} alt="error" width={"100px"} />: <img src={`/uploads/${currrentImage}`} alt="error" width={"100px"} />
                                                    }
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

export default TeamEdit