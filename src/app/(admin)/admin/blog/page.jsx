"use client"


import React, { useContext } from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { PermissionContext } from '@/_context/PermissionContext';
import { useRouter } from 'next/navigation';

const page = () => {
    const [blogData, setBlogData] = useState();
    const router = useRouter();


    //Permission Logic
    const menuId = "67a1c4aabaf5937f5c93a983"
    const { permission } = useContext(PermissionContext);
    const getPermissionsBymenuId = (serviceNumber) => {
        const permissions = permission?.find((ele) => ele.menuId == menuId)
        return permissions?.[serviceNumber] || null;
    }

    // useEffect(() => {
    //     if (!getPermissionsBymenuId("service_2")) {
    //         router.push("/admin")
    //     }
    // }, [])


    const getBlogData = async () => {
        try {
            const res = await axios.get(`/api/blog/getAllBlogs`);
            if (res.data.status == 1) {
                setBlogData(res.data.data);
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
                const res = await axios.post(`/api/blog/deleteBlog`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getBlogData();
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
                const res = await axios.post(`/api/blog/changeStatus`, {
                    id: id,
                    status: status
                })

                if (res.data.status === 1) {
                    getBlogData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        if (blogData) {
            new DataTable("#myTable", {
                paging: false
            });
        }
    }, [blogData]);


    useEffect(() => {
        getBlogData();
    }, [])


    //Custom Pagination 
    const [pagiStartInd, setPagiStartInd] = useState(0);
    const [pagiEndInd, setPagiEndInd] = useState(9);
    const [currentPageNum, setCurrentPageNum] = useState(1)
    const [totalPageNum, setTotalPageNum] = useState()

    const handlePaginationNext = (e) => {
        e.preventDefault();
        if (pagiEndInd < blogData?.length - 1) {
            setPagiStartInd((prev) => prev + 10);
            setPagiEndInd((prev) => prev + 10);
            setCurrentPageNum(currentPageNum + 1)
        }
    }

    const handlePaginationPrev = (e) => {
        e.preventDefault();
        if (pagiStartInd > 0) {
            setPagiStartInd((prev) => prev - 10);
            setPagiEndInd((prev) => prev - 10);
            setCurrentPageNum(currentPageNum - 1)
        }
    }

    useEffect(() => {
        if (blogData) {
            let total = blogData?.length;
            let count = Math.ceil(total / 10);
            setTotalPageNum(count)
        }
    }, [blogData])




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
                                                    {
                                                        getPermissionsBymenuId("service_1") &&
                                                        <Link href="/admin/blog/create" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Blog</Link>
                                                    }
                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>

                                                        <th>Blog Name</th>
                                                        {
                                                            getPermissionsBymenuId("service_5") &&
                                                            <th>Status</th>
                                                        }
                                                        <th style={{ width: "125px" }}>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        blogData?.map((ele, ind) => {
                                                            if (ind >= pagiStartInd && ind <= pagiEndInd)
                                                                return (
                                                                    <tr key={ind}>
                                                                        <td className="text-dark">{ind + 1}</td>

                                                                        <td>{ele.blogName}</td>
                                                                        {
                                                                            getPermissionsBymenuId("service_5") &&
                                                                            <td>
                                                                                {
                                                                                    ele.status == 1 ?
                                                                                        <p className="mb-0"><span className="badge badge-success-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Active</span></p>
                                                                                        :
                                                                                        <p className="mb-0"><span className="badge badge-danger-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Inctive</span></p>
                                                                                }

                                                                            </td>
                                                                        }

                                                                        <td >
                                                                            <div className='d-flex align-items-center'>
                                                                                {
                                                                                    getPermissionsBymenuId("service_3") &&
                                                                                    <Link href={{
                                                                                        pathname: "/admin/blog/edit",
                                                                                        query: { id: ele._id }
                                                                                    }} className="btn btn-primary btn-sm ms-2"><i className="bi bi-pencil"></i></Link>
                                                                                }
                                                                                {
                                                                                    getPermissionsBymenuId("service_4") &&
                                                                                    <Link href="#" className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>
                                                                                }
                                                                            </div>
                                                                        </td>
                                                                    </tr>)
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            {blogData?.length > 10 &&
                                                <div className='d-flex gap-2 justify-content-between'>
                                                    <div>
                                                        <p>Showing {currentPageNum} to {parseInt(totalPageNum, 10)} of {parseInt(totalPageNum, 10)} entries
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <a href='#' className='btn btn-primary btn-outline px-4 btn-sm' onClick={(e) => handlePaginationPrev(e)}>Prev</a>
                                                        <a href='#' className='btn btn-primary  px-4 btn-sm ms-2' onClick={(e) => handlePaginationNext(e)}>Next</a>
                                                    </div>
                                                </div>
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