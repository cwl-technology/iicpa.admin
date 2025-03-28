"use client"

import React, { useRef, useMemo, useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import dynamic from "next/dynamic";
import ButtonLoader from '@/_component/global/ButtonLoader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

const page = () => {
    const router = useRouter();
    const session = useSession();
    const id = session?.data?.user?.id;
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const [eventDescription, setEventDesc] = useState();
    const [broadCastType, setBroadCastType] = useState("private")
    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );

    const onSubmit = async (data) => {
        try {
            data.broadCastType = broadCastType;
            data.eventDescription = eventDescription;
            data.userId = id;
            const res = await axios.post("/api/calendar/createEvent", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/center/calendar");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Add Event</h4>
                                <hr />
                                <div className="tab-content mt-5">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Event Title</label>
                                                        <input type="text" className={`form-control ${errors.eventTitle ? "border-danger" : ""}`} placeholder='Enter title name' {...register("eventTitle", {
                                                            required: {
                                                                value: true,
                                                                message: "Event title is required!"
                                                            }
                                                        })} />
                                                        {
                                                            errors.eventTitle && <span className="help-block text-danger"><small>{errors.eventTitle.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Event Link</label>
                                                        <input type="text" className={`form-control ${errors.eventLink ? "border-danger" : ""}`} placeholder='Enter link' {...register("eventLink", {
                                                            required: {
                                                                value: true,
                                                                message: "Event link is required!"
                                                            }
                                                        })} />
                                                        {
                                                            errors.eventLink && <span className="help-block text-danger"><small>{errors.eventLink.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-4'>
                                                        <label htmlFor="simleinput" className='form-lable'>Start Date</label>
                                                        <input type="date" className={`form-control ${errors.startDate ? "border-danger" : ""}`} {...register("startDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Event start date is required!"
                                                            }
                                                        })} />
                                                        {
                                                            errors.startDate && <span className="help-block text-danger"><small>{errors.startDate.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-4'>
                                                        <label htmlFor="simleinput" className='form-lable'>End Date</label>
                                                        <input type="date" className={`form-control ${errors.endDate ? "border-danger" : ""}`} {...register("endDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Event end Date is required!"
                                                            }
                                                        })} />
                                                        {
                                                            errors.endDate && <span className="help-block text-danger"><small>{errors.endDate.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-time" className="form-label">Start Time</label>
                                                        <input className="form-control" type="time" name="time" {...register("startTime")} />
                                                        
                                                    </div>
                                                </div>

                                                <div className='col-12 mb-4'>
                                                    <label htmlFor="example-time" className="form-label">Event Description</label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={eventDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setEventDesc(newContent)}
                                                    />
                                                </div>

                                                <div className="checked-box1 mb-2">
                                                    <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked="" onClick={() => {
                                                        broadCastType == "public" ? setBroadCastType("private") : setBroadCastType("public")
                                                    }} className='show-password-checkbox' />
                                                    <label htmlFor="saveinfo" className='radio-broadcast'>
                                                        <span></span>
                                                        Check to broadcast to everyone
                                                    </label>
                                                </div>

                                            </div>
                                            <Link href='#'>
                                                <button className="btn btn-primary mt-5 " id="btn-new-event" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                                    {isSubmitting ? <ButtonLoader /> : "Add Event"}
                                                </button>
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
}

export default page