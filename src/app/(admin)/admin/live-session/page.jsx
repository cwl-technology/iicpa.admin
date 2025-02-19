"use client"


import { useEffect, useState } from 'react';
import Link from 'next/link';
import DateFormatter from '@/_helper/frontend/DateFormatter';
import TimeFormatter from '@/_helper/frontend/TimeFormatter';
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";

const page = () => {

    const [liveSessionData, setLiveSessionData] = useState();
    const [courseData, setCourseData] = useState();

    useEffect(() => {
        getLiveSessionData();
        getCourseData();
    }, [])


    const getLiveSessionData = async () => {
        try {
            const res = await axios.get(`/api/livesessions/getAllLiveSessions`);
            console.log(res.data);
            if (res.data.status == 1) {
                setLiveSessionData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseData = async () => {
        try {
            const res = await axios.get("/api/courses/getAllActiveCourses");
            if (res.data.status == 1) {
                setCourseData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseNameById = (id) => {
        const course = courseData?.find((ele, ind) => ele._id == id);
        return course?.courseName || "Unknown";
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
                const res = await axios.post(`/api/livesessions/deleteLiveSession`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getLiveSessionData();
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
                const res = await axios.post(`/api/livesessions/changeStatus`, {
                    id: id,
                    status: status
                })

                if (res.data.status === 1) {
                    getLiveSessionData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

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

                                                    <Link href="/admin/live-session/create" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Live Session</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row g-4 px-3'>
                                            {
                                                liveSessionData?.map((ele, ind) => {
                                                    if (ind % 3 == 0) {
                                                        return (
                                                            <div className='col-4' key={ind}>
                                                                <div className='p-4 left-border left-border-1'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div>
                                                                            <h6 className='my-0 dashboad-bold-font'>{getCourseNameById(ele.courseId)}</h6>
                                                                            <span className='text-muted d-block mb-2'><DateFormatter date={ele.date} /> </span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-1 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-1 dashboad-bold-font d-inline'><TimeFormatter time={ele.startTime} /> - <TimeFormatter time={ele.endTime} /></p>
                                                                    <div className='my-4'>
                                                                        <div className=''>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                            </a>
                                                                            <Link href={{
                                                                                pathname: "/admin/live-session/edit",
                                                                                query: {
                                                                                    id: ele._id
                                                                                }
                                                                            }} className='btn btn-sm border jobs-grid-icons-2 mx-1'>
                                                                                <i className="bi bi-pencil"></i>
                                                                            </Link>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleDelete(ele._id)}>
                                                                                <i className="bi bi-trash"></i>
                                                                            </a>
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
                                                                            <h6 className='my-0 dashboad-bold-font'>{getCourseNameById(ele.courseId)}</h6>
                                                                            <span className='text-muted d-block mb-2'><DateFormatter date={ele.date} /></span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-2 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-2 dashboad-bold-font d-inline'><TimeFormatter time={ele.startTime} /> - <TimeFormatter time={ele.endTime} /></p>
                                                                    <div className='my-4'>
                                                                    <div className=''>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                            </a>
                                                                            <Link href={{
                                                                                pathname: "/admin/live-session/edit",
                                                                                query: {
                                                                                    id: ele._id
                                                                                }
                                                                            }} className='btn btn-sm border jobs-grid-icons-2 mx-1'>
                                                                                <i className="bi bi-pencil"></i>
                                                                            </Link>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleDelete(ele._id)}>
                                                                                <i className="bi bi-trash"></i>
                                                                            </a>
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
                                                                            <h6 className='my-0 dashboad-bold-font'>{getCourseNameById(ele.courseId)}</h6>
                                                                            <span className='text-muted d-block mb-2'><DateFormatter date={ele.date} /></span>
                                                                        </div>
                                                                        <div className=''>
                                                                            <a href={ele.jobLink} target="_blank" className='btn btn-sm dashboad-badge-3 jobs-grid-icons'>
                                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <p className='dashboad-badge-3 dashboad-bold-font d-inline'><TimeFormatter time={ele.startTime} /> - <TimeFormatter time={ele.endTime} /></p>
                                                                    <div className='my-4'>
                                                                    <div className=''>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleChangeStatus(ele._id, ele.status)}>
                                                                                {ele.status == 1 ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}

                                                                            </a>
                                                                            <Link href={{
                                                                                pathname: "/admin/live-session/edit",
                                                                                query: {
                                                                                    id: ele._id
                                                                                }
                                                                            }} className='btn btn-sm border jobs-grid-icons-2 mx-1'>
                                                                                <i className="bi bi-pencil"></i>
                                                                            </Link>
                                                                            <a href="#" className='btn btn-sm border jobs-grid-icons-2 mx-1' onClick={() => handleDelete(ele._id)}>
                                                                                <i className="bi bi-trash"></i>
                                                                            </a>
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