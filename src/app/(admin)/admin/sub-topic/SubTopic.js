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

const SubTopic = () => {

    const [subTopicData, setSubTopicData] = useState();
    const searchParams = useSearchParams();
    const courseName = searchParams.get("courseName");
    const chapterName = searchParams.get("chapterName");
    const topicName = searchParams.get("topicName");
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const topicId = searchParams.get("topicId");

    useEffect(() => {
        getSubTopicData();
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

    useEffect(() => {
        if (subTopicData) {
            new DataTable("#myTable");
        }
    }, [subTopicData]);


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

                                            <table id="myTable" className="text-fade table table-bordered display" >
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
                                                        subTopicData?.map((ele, ind) =>
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
                                                                <td className='d-flex align-items-center'>
                                                                    {/* <Link href={{
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
                                                                    }} className="btn btn-primary btn-sm ms-2">Quiz</Link> */}
                                                                    <Link href={{
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

export default SubTopic