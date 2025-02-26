"use client"


import React, { useContext, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { PermissionContext } from '@/_context/PermissionContext';
import { useRouter } from 'next/navigation';

const page = () => {
    const [jobData, setJobData] = useState();
    const [experienceData, setExperienceData] = useState();
    const router = useRouter();

    const getJobData = async () => {
        try {
            const res = await axios.get("/api/jobs/getAllJobs");
            if (res.data.status == 1) {
                setJobData(res.data.data);
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

    const getExperienceById = (id) => {
        const experience = experienceData?.find((ele) => ele._id == id);
        return experience?.duration;
    }


    const handleDelete = async (id) => {

        const result = await Swal.fire({
            icon: "warning",
            width: "400px",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Delete",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })

        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/jobs/deleteJobs`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getJobData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    const handleChangeStatus = async (id, status) => {
        const result = await Swal.fire({
            icon: "warning",
            width: "400px",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `${status == 1 ? "Deactivate" : "Activate"}`,
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })
        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/jobs/changeStatus`, {
                    id: id,
                    status: status
                })

                if (res.data.status === 1) {
                    getJobData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }


    //Permission Logic
    const menuId = "67a1c4aabaf5937f5c93a983"
    const { permission } = useContext(PermissionContext);
    const getPermissionsBymenuId = (serviceNumber) => {
        const permissions = permission?.find((ele) => ele.menuId == menuId)
        return permissions?.[serviceNumber] || null;
    }

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.replace("/admin")
        }
    }, [])



    useEffect(() => {
        getExperienceData();
        getJobData();
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="row mb-2">
                                            <div className="col-xl-8">
                                                <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                                </form>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="add-live-sesssion text-xl-end mt-xl-0 mt-2">
                                                    {
                                                        getPermissionsBymenuId("67b6f80560e29568dd1f730c", "service_1") &&
                                                        <Link href="/admin/jobs/create" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Jobs</Link>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="dashboad-main-card"> */}
                                        {/* <h6 className='m-4 pt-4 dashboad-bold-font'></h6> */}
                                        <div className='row g-4 px-3'>
                                            {
                                                jobData?.map((ele, ind) => {
                                                    if (ind % 3 == 0) {
                                                        return (
                                                            <div className='col-4' key={ind}>
                                                                <div className='p-4 left-border left-border-1'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div>
                                                                            <h6 className='my-0 dashboad-bold-font'>{ele.jobTitle}</h6>
                                                                            <span className='text-muted d-block mb-2'>{ele.jobLocation}</span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-1 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-1 dashboad-bold-font d-inline'>{ele.jobPackage}</p>
                                                                    <div className='my-4'>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <div>
                                                                                <div className='d-flex align-items-end'>
                                                                                    <h3 className='my-0'>{getExperienceById(ele.jobExperience)}</h3>
                                                                                    <span className='text-muted'>Years,</span>
                                                                                </div>
                                                                                <span className='text-muted'>Experience</span>
                                                                            </div>
                                                                            <div className=''>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-1 jobs-grid-icons mx-2' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                    {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                                </a>
                                                                                <Link href={{
                                                                                    pathname: "/admin/jobs/edit",
                                                                                    query: {
                                                                                        id: ele._id
                                                                                    }
                                                                                }} className='btn btn-sm dashboad-badge-1 jobs-grid-icons mx-2'>
                                                                                    <i className="bi bi-pencil"></i>
                                                                                </Link>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-1 jobs-grid-icons ' onClick={() => handleDelete(ele._id)}>
                                                                                    <i className="bi bi-trash"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    } else if (ind % 3 == 1) {
                                                        return (
                                                            <div className='col-4' key={ind}>
                                                                <div className='p-4 left-border left-border-2'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div>
                                                                            <h6 className='my-0 dashboad-bold-font'>{ele.jobTitle}</h6>
                                                                            <span className='text-muted d-block mb-2'>{ele.jobLocation}</span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-2 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-2 dashboad-bold-font d-inline'>{ele.jobPackage}</p>
                                                                    <div className='my-4'>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <div>
                                                                                <div className='d-flex align-items-end'>
                                                                                    <h3 className='my-0'>{getExperienceById(ele.jobExperience)}</h3>
                                                                                    <span className='text-muted'>Years,</span>
                                                                                </div>
                                                                                <span className='text-muted'>Experience</span>
                                                                            </div>
                                                                            <div className=''>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-2 jobs-grid-icons mx-2' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                    {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                                </a>
                                                                                <Link href={{
                                                                                    pathname: "/admin/jobs/edit",
                                                                                    query: {
                                                                                        id: ele._id
                                                                                    }
                                                                                }} className='btn btn-sm dashboad-badge-2 jobs-grid-icons mx-2'>
                                                                                    <i className="bi bi-pencil"></i>
                                                                                </Link>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-2 jobs-grid-icons ' onClick={() => handleDelete(ele._id)}>
                                                                                    <i className="bi bi-trash"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className='col-4' key={ind}>
                                                                <div className='p-4 left-border left-border-3'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div>
                                                                            <h6 className='my-0 dashboad-bold-font'>{ele.jobTitle}</h6>
                                                                            <span className='text-muted d-block mb-2'>{ele.jobLocation}</span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-3 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-3 dashboad-bold-font d-inline'>{ele.jobPackage}</p>
                                                                    <div className='my-4'>
                                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                            <div>
                                                                                <div className='d-flex align-items-end'>
                                                                                    <h3 className='my-0'>{getExperienceById(ele.jobExperience)}</h3>
                                                                                    <span className='text-muted'>Years,</span>
                                                                                </div>
                                                                                <span className='text-muted'>Experience</span>
                                                                            </div>
                                                                            <div className=''>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-3 jobs-grid-icons mx-2' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                    {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                                </a>
                                                                                <Link href={{
                                                                                    pathname: "/admin/jobs/edit",
                                                                                    query: {
                                                                                        id: ele._id
                                                                                    }
                                                                                }} className='btn btn-sm dashboad-badge-3 jobs-grid-icons mx-2'>
                                                                                    <i className="bi bi-pencil"></i>
                                                                                </Link>
                                                                                <a href="#" className='btn btn-sm dashboad-badge-3 jobs-grid-icons ' onClick={() => handleDelete(ele._id)}>
                                                                                    <i className="bi bi-trash"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }

                                                )
                                            }
                                        </div>
                                        {/* </div> */}
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

export default page