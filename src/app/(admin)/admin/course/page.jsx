"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const page = () => {

    const [courseCategory, setCourseCategory] = useState();
    const [courseData, setCourseData] = useState();

    useEffect(() => {
        getCourseCategoryList();
        getCourseData();
    }, [])

    const getCourseCategoryList = async () => {
        try {
            const res = await axios.get(`/api/courseCategory/getAllActiveCourseCategory`);
            if (res.data.status === 1) {
                setCourseCategory(res.data.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCourseCategoryById = (id) => {
        const category = courseCategory?.find((ele) => ele._id == id);
        return category?.categoryName;
    }

    const getCourseData = async () => {
        try {
            const res = await axios.get(`/api/courses/getAllCourses`);
            if (res.data.status == 1) {
                setCourseData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (courseData) {
            new DataTable("#myTable");
        }
    }, [courseData]);


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
                const res = await axios.post(`/api/courses/deleteCourse`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getCourseData();
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
                const res = await axios.post(`/api/courses/changeStatus`, {
                    id: id,
                    status: status
                })

                console.log(res.data);
                if (res.data.status === 1) {
                    getCourseData();
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

                                                    <Link href="/admin/course/create" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Course</Link>
                                                    <Link href="#" className="btn btn-primary-light mb-2">Export</Link>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>
                                                        <th>Course Category</th>
                                                        <th>Course Name</th>
                                                        <th>Status</th>
                                                        <th style={{ width: "125px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        courseData?.map((ele, ind) =>
                                                            <tr key={ind}>
                                                                <td className="text-dark">{ind + 1}</td>
                                                                <td>{getCourseCategoryById(ele.courseCategory)}</td>
                                                                <td>{ele.courseName}</td>
                                                                <td>
                                                                    {
                                                                        ele.status == 1 ?
                                                                            <p className="mb-0"><span className="badge badge-success-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Active</span></p>
                                                                            :
                                                                            <p className="mb-0"><span className="badge badge-danger-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Inctive</span></p>
                                                                    }

                                                                </td>
                                                                <td>
                                                                    <Link href={{
                                                                        pathname: "/admin/course/edit",
                                                                        query: { id: ele._id }
                                                                    }} className="btn btn-primary btn-sm "><i className="bi bi-pencil"></i></Link>
                                                                    <Link href="#" className="btn btn-danger btn-sm  ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>
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

export default page