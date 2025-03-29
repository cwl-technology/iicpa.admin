"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from 'next/navigation';
import usePermission from '@/_helper/frontend/Permission';

const SubTopic = () => {

    const [subTopicData, setSubTopicData] = useState();
    const searchParams = useSearchParams();
    const router = useRouter();
    const courseName = searchParams.get("courseName");
    const chapterName = searchParams.get("chapterName");
    const topicName = searchParams.get("topicName");
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const topicId = searchParams.get("topicId");


    //Custom Pagination 
    const [pagiStartInd, setPagiStartInd] = useState(0);
    const [pagiEndInd, setPagiEndInd] = useState(9);
    const [currentPageNum, setCurrentPageNum] = useState(1)
    const [totalPageNum, setTotalPageNum] = useState()

    const handlePaginationNext = (e) => {
        e.preventDefault();
        if (pagiEndInd < subTopicData?.length - 1) {
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
        if (subTopicData) {
            new DataTable("#myTable", {
                paging: false
            });
        }
    }, [subTopicData]);


    //Permission Logic
    const menuId = "67a1c4aabaf5937f5c93a983"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])



    const getSubTopicData = async () => {
        try {
            const res = await axios.post(`/api/chapterSubTopic/getAllSubTopic`, {
                courseId: courseId,
                chapterId: chapterId,
                topicId: topicId
            });
            if (res.data.status == 1) {
                setSubTopicData(res.data.data);
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
                const res = await axios.post(`/api/chapterSubTopic/deleteSubTopic`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getSubTopicData();
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
                const res = await axios.post(`/api/chapterSubTopic/changeStatus`, {
                    id: id,
                    status: status
                })

                if (res.data.status === 1) {
                    getSubTopicData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }



    useEffect(() => {
        if (subTopicData) {
            let total = subTopicData?.length;
            let count =  Math.ceil(total / 10);
            setTotalPageNum(count)
        }
    }, [subTopicData])

    useEffect(() => {
        getSubTopicData();
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
                                                <div className="add-order text-xl-end mt-xl-0 mt-2">

                                                    <Link href={{
                                                        pathname: "/admin/sub-topic/create",
                                                        query: {
                                                            courseName: courseName,
                                                            courseId: courseId,
                                                            chapterName: chapterName,
                                                            chapterId: chapterId,
                                                            topicName: topicName,
                                                            topicId: topicId,
                                                        }
                                                    }} className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Sub Topic</Link>
                                                    <Link href={{
                                                        pathname: "/admin/topic",
                                                        query: {
                                                            courseName: courseName,
                                                            courseId: courseId,
                                                            chapterName: chapterName,
                                                            chapterId: chapterId,
                                                        }
                                                    }}

                                                        className="btn btn-primary-light mb-2">View Topic</Link>

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
                                                        <th>Topic Name</th>
                                                        <th>Sub Topic Name</th>
                                                        <th>Status</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        subTopicData?.map((ele, ind) => {
                                                            if (ind >= pagiStartInd && ind <= pagiEndInd)
                                                                return (
                                                                    <tr key={ind}>
                                                                        <td className="text-dark">{ind + 1}</td>
                                                                        <td>{courseName}</td>
                                                                        <td>{chapterName}</td>
                                                                        <td>{topicName}</td>
                                                                        <td>{ele.subTopicName}</td>

                                                                        <td>
                                                                            {
                                                                                ele.status == 1 ?
                                                                                    <p className="mb-0"><span className="badge badge-success-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Active</span></p>
                                                                                    :
                                                                                    <p className="mb-0"><span className="badge badge-danger-light" style={{ cursor: "pointer" }} onClick={() => handleChangeStatus(ele._id, ele.status)}> Inctive</span></p>
                                                                            }
                                                                        </td>
                                                                        <td >
                                                                            <div className='d-flex align-items-center'>
                                                                                <Link href={{
                                                                                    pathname: "/admin/quiz",
                                                                                    query: {
                                                                                        courseName: courseName,
                                                                                        courseId: courseId,
                                                                                        chapterName: chapterName,
                                                                                        chapterId: chapterId,
                                                                                        topicName: topicName,
                                                                                        topicId: topicId,
                                                                                        subTopicName: ele.topicName,
                                                                                        subTopicId: ele._id,
                                                                                    }
                                                                                }} className="btn btn-primary btn-sm ms-2">Quiz</Link>
                                                                                <Link
                                                                                    href={{
                                                                                        pathname: "/admin/sub-topic/edit",
                                                                                        query: {
                                                                                            id: ele._id,
                                                                                            courseName: courseName,
                                                                                            courseId: courseId,
                                                                                            chapterName: chapterName,
                                                                                            chapterId: chapterId,
                                                                                            topicName: topicName,
                                                                                            topicId: topicId,
                                                                                        }
                                                                                    }}
                                                                                    // onClick={(e) => handleTestId(e, ele._id, ind)}
                                                                                    className="btn btn-primary btn-sm ms-2"><i className="bi bi-pencil"></i></Link>
                                                                                <Link href="#" className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            {subTopicData?.length > 10 &&
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

export default SubTopic