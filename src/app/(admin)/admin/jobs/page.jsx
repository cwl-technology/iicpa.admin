"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import Link from 'next/link';
import DateFormatter from '@/_helper/frontend/DateFormatter';
import TimeFormatter from '@/_helper/frontend/TimeFormatter';


const page = () => {


    // useEffect(() => {
    //     {
    //         new DataTable("#myTable");
    //     }
    // });
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

                                                    <Link href="#" className="btn btn-primary mb-2 me-2"><i className="bi bi-plus-lg"></i> Add Jobs</Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="dashboad-main-card"> */}
                                            {/* <h6 className='m-4 pt-4 dashboad-bold-font'></h6> */}
                                            <div className='row g-4 px-3'>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-1'>
                                                        <h6 className='my-0 dashboad-bold-font'>Web Designer</h6>
                                                        <span className='text-muted d-block mb-2'>New York,USA</span>
                                                        <p className='dashboad-badge-1 dashboad-bold-font d-inline'>$70,000-$80,000</p>
                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>12</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>June 08, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-2'>
                                                        <h6 className='my-0 dashboad-bold-font'>MERN Developer</h6>
                                                        <span className='text-muted d-block mb-2'>Pune,India</span>
                                                        <p className='dashboad-badge-2 dashboad-bold-font d-inline'>$40,000-$80,000</p>

                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>14</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>May 01, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-3'>
                                                        <h6 className='my-0 dashboad-bold-font'>Digital Marketing</h6>
                                                        <span className='text-muted d-block mb-2'>New York,USA</span>
                                                        <p className='dashboad-badge-3 dashboad-bold-font d-inline mb-3'>$44,000-$70,000</p>

                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>15</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>September 16, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-1'>
                                                        <h6 className='my-0 dashboad-bold-font'>Web Designer</h6>
                                                        <span className='text-muted d-block mb-2'>New York,USA</span>
                                                        <p className='dashboad-badge-1 dashboad-bold-font d-inline'>$70,000-$80,000</p>
                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>12</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>June 08, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-2'>
                                                        <h6 className='my-0 dashboad-bold-font'>MERN Developer</h6>
                                                        <span className='text-muted d-block mb-2'>Pune,India</span>
                                                        <p className='dashboad-badge-2 dashboad-bold-font d-inline'>$40,000-$80,000</p>

                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>14</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>May 01, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='p-4 left-border left-border-3'>
                                                        <h6 className='my-0 dashboad-bold-font'>Digital Marketing</h6>
                                                        <span className='text-muted d-block mb-2'>New York,USA</span>
                                                        <p className='dashboad-badge-3 dashboad-bold-font d-inline mb-3'>$44,000-$70,000</p>

                                                        <div className='my-4'>
                                                            <div className='d-flex align-items-end'>
                                                                <h3 className='my-0'>15</h3>
                                                                <span className='text-muted'>openings</span>
                                                            </div>
                                                            <span className='text-muted'>September 16, 2021</span>
                                                        </div>
                                                    </div>
                                                </div>
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