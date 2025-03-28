"use client"


import React from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import Link from 'next/link';

const payment = () => {


    useEffect(() => {
        {
            new DataTable("#myTable");
        }
    });
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <div className="row g-4 px-4 mb-5 ">
                        <div className="col-4">
                            <div className="p-4 left-border left-border-1">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="dashboad-badge-1 dashboad-bold-font d-inline">Offline (This Month)</h6>
                                        <div className='current-panding mt-3 mb-3'>
                                            <h6>0</h6>
                                            <h7>Panding: <span>0</span></h7>
                                        </div>
                                        <div className='month-panding mt-5'>
                                            <h6>Last Month: <span>0</span></h6>
                                            <h7> Last Month panding: <span>0</span></h7>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="p-4 left-border left-border-2">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="dashboad-badge-2 dashboad-bold-font d-inline">Offline (This Month)</h6>
                                        <div className='current-panding mt-3 mb-3'>
                                            <h6>0</h6>
                                            <h7>Panding: <span>0</span></h7>
                                        </div>
                                        <div className='month-panding mt-5'>
                                            <h6>Last Month: <span>0</span></h6>
                                            <h7> Last Month panding: <span>0</span></h7>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="p-4 left-border left-border-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6 className="dashboad-badge-3 dashboad-bold-font d-inline">Offline (This Month)</h6>
                                        <div className='current-panding mt-3 mb-3'>
                                            <h6>0</h6>
                                            <h7>Panding: <span>0</span></h7>
                                        </div>
                                        <div className='month-panding mt-5'>
                                            <h6>Last Month: <span>0</span></h6>
                                            <h7> Last Month panding: <span>0</span></h7>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
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

                                                    <Link href="#" className="btn btn-primary mb-2 me-2">Pending</Link>
                                                    <Link href="#" className="btn btn-primary-light mb-2">Paid</Link>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Date</th>
                                                        <th>Name</th>
                                                        <th>Phone</th>
                                                        <th>Type</th>
                                                        <th>Reason</th>
                                                        <th>Sales</th>
                                                        <th>Amount</th>
                                                        <th style={{ width: "125px" }}>Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-success-light">Confirm</span></p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-danger-light">Not Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-success-light">Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-success-light">Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-success-light">Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-danger-light">Not Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-success-light">Confirm</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19/02/2025</td>
                                                        <td className="text-dark">Tiger Nixon</td>
                                                        <td>+91 1234567890</td>
                                                        <td>online</td>
                                                        <td>not</td>
                                                        <td>demo</td>
                                                        <td>4000</td>
                                                        <td>
                                                            <p className="mb-0"><span className="badge badge-danger-light">Not Confirm</span></p>
                                                        </td>
                                                    </tr>
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

export default payment