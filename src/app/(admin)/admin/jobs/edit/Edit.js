"use client"

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import usePermission from '@/_helper/frontend/Permission';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const Edit = () => {

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm({defaultValues:{
        jobExperience:""
    }})
    const router = useRouter();
    const [experienceData, setExperienceData] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );

    const [jobDescription, setJobDescription] = useState();

    const onSubmit = async (data) => {
        try {
            data.jobDescription = jobDescription;
            data.id = id;
            const res = await axios.post("/api/jobs/updateJobs", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/jobs`);
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getExperienceData = async () => {
        try {
            const res = await axios.get("/api/experience/getExperienceData");
            if (res.data.status == 1) {
                setExperienceData(res.data.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getJobData = async () => {
        try {
            const res = await axios.post("/api/jobs/getJobDataById", {
                id: id
            });
            if (res.data.status == 1) {
                reset(res.data.data);
                setJobDescription(res.data.data.jobDescription);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getJobData()
        }
    }, [id])
    useEffect(() => {
        getExperienceData();
    }, [])

    //Permission Logic
    const menuId = "67b6f80560e29568dd1f730c"
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
                                            <h4 className="header-title">Update Jobs</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Job Title</label>
                                                        <input
                                                            {...register("jobTitle",
                                                                { required: { value: true, message: "Job title is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.jobTitle ? "border-danger" : ""}`}
                                                            placeholder='Enter job title' />
                                                        {
                                                            errors.jobTitle && <span className="help-block text-danger"><small>{errors.jobTitle.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Job Location</label>
                                                        <input
                                                            {...register("jobLocation",
                                                                { required: { value: true, message: "Job location is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.jobLocation ? "border-danger" : ""}`}
                                                            placeholder='Enter the location' />
                                                        {
                                                            errors.jobLocation && <span className="help-block text-danger"><small>{errors.jobLocation.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Job Experience (In years)</label>
                                                        <select id="example-select"
                                                            {...register("jobExperience", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Job experience is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.jobExperience ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked value={""}>Select Experience</option>
                                                            {experienceData?.map((ele, ind) =>
                                                                <option value={ele._id} key={ind}>{ele.duration}</option>
                                                            )}
                                                        </select>
                                                        {
                                                            errors.jobExperience && <span className="help-block text-danger"><small>{errors.jobExperience.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Job Link</label>
                                                        <input
                                                            {...register("jobLink",
                                                                { required: { value: true, message: "Job link is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.jobLink ? "border-danger" : ""}`}
                                                            placeholder='Enter job link ' />
                                                        {
                                                            errors.jobLink && <span className="help-block text-danger"><small>{errors.jobLink.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Job Package</label>
                                                        <input
                                                            {...register("jobPackage")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter job package ' />

                                                    </div>

                                                </div>



                                                <div className='col-md-12 my-2'>
                                                    <label className='mb-2'>
                                                        Job Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={jobDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setJobDescription(newContent)}
                                                    />
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

export default Edit