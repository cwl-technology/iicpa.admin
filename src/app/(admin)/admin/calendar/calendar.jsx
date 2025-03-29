"use client"


import React, { useState } from 'react'
import { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from 'next/link';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import DateFormatter from '@/_helper/frontend/DateFormatter';
import TimeFormatter from '@/_helper/frontend/TimeFormatter';
import usePermission from '@/_helper/frontend/Permission';
import { useRouter } from 'next/navigation';

const Calender = () => {
    const [show, setShow] = useState(false);
    const [eventData, setEventData] = useState();
    const session = useSession();
    const userId = session?.data?.user?.id;
    const [events, setEvents] = useState();
    const [oneEventData, setOneEventData] = useState();
    const [liveSessionData, setLiveSessionData] = useState();
    const router = useRouter();


    //Permission Logic
    const menuId = "67e63835a8f1f1d5d2250499"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])

    const getEventData = async () => {
        try {
            setEvents([]);
            const res = await axios.post("/api/calendar/getAllEventsbyUserId", { userId: userId });
            if (res.data.status == 1) {
                setEventData(res.data.data.events);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getLiveSessionData = async () => {
        try {
            const res = await axios.get(`/api/livesessions/getAllActiveLiveSessions`);
            if (res.data.status == 1) {
                setLiveSessionData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (userId) {
            getEventData();
        }
    }, [userId])


    useEffect(() => {
        if (eventData) {
            const newevents = eventData?.map((ele) => {
                return {
                    id: ele._id,
                    title: ele.eventTitle,
                    start: `${ele.startDate}`,
                    backgroundColor: "#007bff",
                    // end: ele.endDate ? `${ele.endDate}` : null,
                    extendedProps: {  // Store additional properties here
                        link: ele.eventLink,
                        type: ele.broadCastType,
                        description: ele.eventDescription,
                        startDate: ele.startDate,
                        endDate: ele.endDate,
                        startTime: ele.startTime
                    }
                }
            })
            if (liveSessionData) {
                const liveSession = liveSessionData?.map((ele) => {
                    return {
                        id: ele._id,
                        title: ele.courseName,
                        start: `${ele.date}`,
                        backgroundColor:"#28a745",
                        extendedProps: {  // Store additional properties here
                            link: ele.eventLink,
                            type: ele.broadCastType,
                            description: ele.description,
                            startDate: ele.startDate,
                            endDate: ele.endDate,
                            startTime: ele.startTime
                        }
                    }
                })
                const combineBothArray = liveSession.concat(newevents)
                setEvents(combineBothArray)
            }
        }
    }, [eventData, liveSessionData])

    
    const handleEventClick = (info) => {
        setShow(true);
        setOneEventData(info.event)
    }

    useEffect(() => {
        getLiveSessionData();
    }, []);



    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-white-light">
                            <div className="card-header">
                                <h4 className="card-title">Calendar</h4>
                                {
                                    getPermissionsBymenuId("service_1") && 
                                    <Link href='/admin/calendar/create-event'>
                                    <button className="btn btn-primary" id="btn-new-event">
                                        Create New Event
                                    </button>
                                </Link>
                                }
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <FullCalendar
                                            plugins={[dayGridPlugin, interactionPlugin]}
                                            initialView="dayGridMonth"
                                            editable={true}
                                            selectable={true}
                                            events={events}
                                            eventClick={handleEventClick}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>

            <div className={`modal fade ${show ? "show" : "hide"}`} id="event-modal" tabIndex="-1" style={show ? { display: "block" } : { display: "none" }} aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="needs-validation" name="event-form" id="form-event" noValidate="">
                            <div className="modal-header py-3 px-4 border-bottom-0 ">
                                <div>
                                    <h3 className="modal-title mb-0" id="modal-title">{oneEventData?.title.toUpperCase()}</h3>
                                    <p className='text-primary'>Private |&nbsp;
                                        {
                                            oneEventData?.extendedProps?.startTime &&
                                            <TimeFormatter time={oneEventData?.extendedProps?.startTime} />
                                        }
                                        &nbsp;| <a href={oneEventData?.extendedProps?.link} target='_blank'>Event Link</a></p>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(!show)}></button>
                            </div>

                            <div className="modal-body px-4 pb-4 pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className='d-flex justify-content-between'>
                                            {
                                                oneEventData?.extendedProps.endDate &&
                                                <h6>Start Date - <DateFormatter date={oneEventData?.extendedProps?.startDate} /></h6>
                                            }
                                            {
                                                oneEventData?.extendedProps.endDate &&
                                                <h6>End Date - <DateFormatter date={oneEventData?.extendedProps.endDate} /></h6>
                                            }

                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div dangerouslySetInnerHTML={{ __html: oneEventData?.extendedProps.description || "" }}></div>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calender