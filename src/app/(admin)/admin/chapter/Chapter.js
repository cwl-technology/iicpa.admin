"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useSearchParams } from 'next/navigation';

const Chapter = () => {

    const [chapterData, setChapterData] = useState();
    const searchParams = useSearchParams();
    const courseName = searchParams.get("courseName");
    const courseId = searchParams.get("courseId");

    useEffect(() => {
        getChapterData();
    }, [])


    const getChapterData = async () => {
        try {
            const res = await axios.post(`/api/chapter/getAllChaptersByCourseId`, {
                courseId: courseId
            });
            if (res.data.status == 1) {
                setChapterData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (chapterData) {
            new DataTable("#myTable");
        }
    }, [chapterData]);


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
                const res = await axios.post(`/api/chapter/deleteChapter`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getChapterData();
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
                const res = await axios.post(`/api/chapter/changeStatus`, {
                    id: id,
                    status: status
                })

                if (res.data.status === 1) {
                    getChapterData();
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
                                                <div className="add-order text-xl-end mt-xl-0 mt-2">

                                                    <Link href={{
                                                        pathname: "/admin/chapter/create",
                                                        query: {
                                                            courseName: courseName,
                                                            courseId: courseId
                                                        }
                                                    }} className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Chapter</Link>
                                                    <Link href="/admin/course" className="btn btn-primary-light mb-2">View Course</Link>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>
                                                        <th>Course Name</th>
                                                        <th>Chapter Name</th>
                                                        <th>Status</th>
                                                        <th style={{ width: "125px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        chapterData?.map((ele, ind) =>
                                                            <tr key={ind}>
                                                                <td className="text-dark">{ind + 1}</td>
                                                                <td>{courseName}</td>
                                                                <td>{ele.chapterName}</td>
                                                                <td>
                                                                    {
                                                                        ele.status == 1 ?
                                                                            <p className="mb-0"><span className="badge badge-success-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Active</span></p>
                                                                            :
                                                                            <p className="mb-0"><span className="badge badge-danger-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Inctive</span></p>
                                                                    }

                                                                </td>
                                                                <td className='d-flex align-items-center'>
                                                                    <Link href={{
                                                                        pathname: "/admin/topic",
                                                                        query: {
                                                                            courseName: courseName,
                                                                            courseId: courseId,
                                                                            chapterName: ele.chapterName,
                                                                            chapterId: ele._id,
                                                                        }
                                                                    }}
                                                                        className="btn btn-primary btn-sm">Topics</Link>
                                                                    <Link href={{
                                                                        pathname: "/admin/chapter/edit",
                                                                        query: {
                                                                            id: ele._id,
                                                                            courseName: courseName,
                                                                            courseId: courseId,
                                                                        }
                                                                    }} className="btn btn-primary btn-sm ms-2"><i className="bi bi-pencil"></i></Link>
                                                                    <Link href="#" className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>
                                                                </td>
                                                            </tr>)
                                                    }
                                                </tbody>
                                            </table>
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

export default Chapter