"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import DateFormatter from '@/_helper/frontend/DateFormatter'

const page = () => {
    const session = useSession();
    const id = session?.data?.user?.id
    const [ticketData, setTicketData] = useState();

    const getTicketData = async () => {
        try {
            const res = await axios.post("/api/ticket/getRaisedTicketByUserId", {
                userId: id
            })
            if (res.data.status == 1) {
                setTicketData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getTicketData();
        }
    }, [id])


    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-white-light">
                            <div className="card-header">
                                <h4 className="card-title">Raised Ticket</h4>
                                <Link href='/lab/support/create'>
                                    <button className="btn center-btn-thm thm-user-btn" id="btn-new-event">
                                        Raise New Ticket
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col" >Title</th>
                                                        <th scope="col" >Issue Type</th>
                                                        <th scope="col" >Date</th>
                                                        <th scope="col" className="text-center">Admin Reply</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        ticketData?.map((ele, ind) =>
                                                            <tr key={ind}>
                                                                <th scope="row">{ind + 1}.</th>
                                                                <td className="text-fade">{ele.title}</td>
                                                                <td className="text-fade">

                                                                    <span className={`badge ${ele.issueType == "General Issue" ? "badge-primary" : ele.issueType == "Content Issue" ? "badge-warning" : "badge-danger"}`}>{ele.issueType}</span>
                                                                </td>
                                                                <td className="text-fade ">
                                                                    {
                                                                        ele.createdAt &&
                                                                        <DateFormatter date={ele.createdAt.split("T")[0]} />
                                                                    }
                                                                </td>
                                                                <td className="text-center">
                                                                    <Link href={{
                                                                        pathname: "/lab/support/reply",
                                                                        query: { id: ele._id }
                                                                    }} className='badge badge-success'>
                                                                        View
                                                                    </Link>
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