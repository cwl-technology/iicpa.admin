"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {

    const [ticketData, setTicketData] = useState();

    const getTicketData = async (req, res) => {
        try {
            const res = await axios.get("/api/ticket/getAllRaisedTicked");
            if (res.data.status == 1) {
                setTicketData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getTicketData();
    }, [])



    //Custom Pagination 
    const [pagiStartInd, setPagiStartInd] = useState(0);
    const [pagiEndInd, setPagiEndInd] = useState(9);
    const [currentPageNum, setCurrentPageNum] = useState(1)
    const [totalPageNum, setTotalPageNum] = useState()

    const handlePaginationNext = (e) => {
        e.preventDefault();
        if (pagiEndInd < ticketData?.length - 1) {
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
        if (ticketData) {
            let total = ticketData?.length;
            let count = Math.ceil(total / 10);
            setTotalPageNum(count)
        }
    }, [ticketData])

    useEffect(() => {
        if (ticketData) {
            new DataTable("#myTable", {
                paging: false
            });
        }
    }, [ticketData]);



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

                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>
                                                        <th>Title</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        ticketData?.map((ele, ind) => {
                                                            if (ind >= pagiStartInd && ind <= pagiEndInd)
                                                                return (
                                                                    <tr key={ind}>
                                                                        <td className="text-dark">{ind + 1}</td>
                                                                        <td className="text-dark">{ele.title}</td>
                                                                        <td className="text-dark">
                                                                            <div>
                                                                                <Link href={{
                                                                                    pathname: "/admin/support-requests/view",
                                                                                    query: { id: ele._id }
                                                                                }} className="btn btn-outline btn-warning btn-sm ms-2" >View</Link>
                                                                                <Link href={{
                                                                                    pathname: "/admin/support-requests/reply",
                                                                                    query: { id: ele._id }
                                                                                }} className="btn btn-primary btn-sm ms-2">Reply</Link>



                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            {ticketData?.length > 10 &&
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