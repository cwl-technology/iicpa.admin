"use client"

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const View = () => {
    const [ticketData, setTicketData] = useState();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    console.log(id);
    const getTicketData = async () => {
        try {
            const res = await axios.post("/api/ticket/getRaisedTicketById", { id: id });
            console.log(res.data);
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
                                        <div>
                                            <h2 className=''>{ticketData?.title}</h2>
                                            <img src={`/uploads/${ticketData?.image}`} alt="" width={"70%"}  className=' py-3'/>
                                            <div className='mt-2' dangerouslySetInnerHTML={{ __html: ticketData?.description || "" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default View