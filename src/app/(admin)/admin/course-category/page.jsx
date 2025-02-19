"use client"


import React, { useState } from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


const page = () => {

    const [courseCategoryData, setCourseCategoryData] = useState();

    const getCorseCategoryData = async () => {
        try {
            const res = await axios.get(`/api/courseCategory/getAllCourseCategory`);
            if (res.data.status == 1) {
                setCourseCategoryData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
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
                const res = await axios.post(`/api/courseCategory/deleteCourseCategory`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getCorseCategoryData();
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
                const res = await axios.post(`/api/courseCategory/changeStatus`, {
                    id: id,
                    status: status
                })
                if (res.data.status === 1) {
                    getCorseCategoryData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }


    useEffect(() => {
        getCorseCategoryData();
    }, [])
    useEffect(() => {
        if (courseCategoryData) {
            new DataTable("#myTable");
        }
    }, [courseCategoryData]);



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

                                                    <Link href="/admin/course-category/create" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Course Category</Link>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>
                                                        <th>Category Name</th>
                                                        <th>Status</th>
                                                        <th style={{ width: "125px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        courseCategoryData?.map((ele, ind) => (
                                                            <tr key={ind}>
                                                                <td>{ind + 1}</td>
                                                                <td>{ele.categoryName}</td>
                                                                <td >
                                                                    {
                                                                        ele.status == 1 ? <div className="badge badge-success-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}>Active</div> : <div className="badge badge-danger-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}>Inactive</div>
                                                                    }

                                                                </td>
                                                                <td className="text-center">
                                                                    
                                                                    <Link href={{
                                                                        pathname: "/admin/course-category/edit",
                                                                        query: { id: ele._id }
                                                                    }} className="btn btn-primary btn-sm  "><i className="bi bi-pencil"></i></Link>
                                                                    <Link href="#" className="btn btn-danger btn-sm  ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>

                                                                </td>
                                                            </tr>
                                                        ))
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