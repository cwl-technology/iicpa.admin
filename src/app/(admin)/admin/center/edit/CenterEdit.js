"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import usePermission from '@/_helper/frontend/Permission';


const CenterEdit = () => {

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [AuthLetter, setAuthLetter] = useState();

    const onSubmit = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("email", data.email)
            formdata.append("phone", data.phone)
            formdata.append("password", data.password)
            formdata.append("authorizationLetter", AuthLetter)
            formdata.append("id", id)
            const res = await axios.post("/api/center/updateCenter", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/center");
            } else {
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCenterData = async () => {
        try {
            const res = await axios.post("/api/center/getCenterDataById", { id: id });
            if (res.data.status == 1) {
                reset(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getCenterData();
        }
    }, [id])

    
    //Permission Logic
    const menuId = "67e63771a8f1f1d5d225046f"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])


    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-bordered mb-3 d-flex justify-content-between">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Update Center</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/staff" className="btn btn-primary mb-2 me-2"> View Center</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">


                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Name</label>
                                                        <input
                                                            {...register("name",
                                                                { required: { value: true, message: "Name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.name ? "border-danger" : ""}`}
                                                            placeholder='Enter staff name' />
                                                        {
                                                            errors.name && <span className="help-block text-danger"><small>{errors.name.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Email</label>
                                                        <input
                                                            {...register("email",
                                                                {
                                                                    required: { value: true, message: "Email is required!" }, pattern: {
                                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                        message: "Invalid email!"
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.email ? "border-danger" : ""}`}
                                                            placeholder='Enter the email' />
                                                        {
                                                            errors.email && <span className="help-block text-danger"><small>{errors.email.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Phone</label>
                                                        <input
                                                            {...register("phone",
                                                                {
                                                                    required: { value: true, message: "Phone number is required!" }, pattern: {
                                                                        value: /^\d{10}$/,
                                                                        message: "Invalid phone number!"
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.phone ? "border-danger" : ""}`}
                                                            placeholder='Enter the phone number' />
                                                        {
                                                            errors.phone && <span className="help-block text-danger"><small>{errors.phone.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Password</label>
                                                        <input
                                                            {...register("password")}
                                                            type="text" id="simpleinput" className={`form-control ${errors.password ? "border-danger" : ""}`}
                                                            placeholder='Enter the password' />

                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Authorization Letter</label>
                                                        <input
                                                            {...register("authorizationLetter")}
                                                            type="file" id="simpleinput" accept='.pdf' className={`form-control`}
                                                            onChange={(e)=>setAuthLetter(e.target.files[0])} />

                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <button className='mt-4 btn btn-primary' onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                    {isSubmitting ? <ButtonLoader /> : "Update"}
                                </button>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
}

export default CenterEdit