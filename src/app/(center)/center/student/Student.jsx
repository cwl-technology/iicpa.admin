"use client"


import React, { useState } from 'react'
import { DataTable } from 'simple-datatables'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Student = () => {
    const [studentData, setStudentData] = useState();
    const session = useSession();
    const id = session?.data?.user?.id


    const getStudentData = async () => {
        try {
            const res = await axios.post("/api/user/getStudentByCenterId", {
                centerId: id
            })
            if (res.data.status == 1) {
                setStudentData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getStudentData();
        }
    }, [id])

    useEffect(() => {
        if (studentData) {
            new DataTable("#myTable", {
                paging: false
            });
        }
    }, [studentData]);

    console.log(studentData);

    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-white-900 ">
                            <div className="card-header">
                                <h3 className="card-title">Students</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">

                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Name</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        studentData?.map((ele, ind) =>
                                                            <tr key={ind}>
                                                                <td className="text-dark">{ele.name}</td>
                                                                <td>{ele.phone}</td>
                                                                <td>{ele.email}</td>
                                                                <td>
                                                                    <a href="#" className="action-icon mx-2"> <i className="bi bi-pencil"></i></a>
                                                                    <a href="#" className="action-icon"><i className="bi bi-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                        )
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

export default Student