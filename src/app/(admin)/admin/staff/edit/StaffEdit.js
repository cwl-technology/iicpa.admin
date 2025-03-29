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


const StaffEdit = () => {
    const [roles, setRoles] = useState();
    const [staffData, setStaffData] = useState();
    const { register, handleSubmit, reset, watch, formState: { isSubmitting, errors } } = useForm({
        defaultValues: {
            roleId: ""
        }
    })
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");


    //Permission Logic
    const menuId = "67e637d6a8f1f1d5d225048d"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])




    const getRolesData = async (req, res) => {
        try {
            const res = await axios.get("/api/roles/getAllRoles");
            if (res.data.status == 1) {
                setRoles(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    const onSubmit = async (data) => {
        try {
            data.id = id;
            const res = await axios.post("/api/admin/updateStaff", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/staff");
            } else {
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getStaffById = async () => {
        try {
            const res = await axios.post("/api/admin/getStaffById", { id: id });
            if (res.data.status == 1) {
                setStaffData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRolesData();
    }, []);

    useEffect(() => {
        if (staffData) {
            reset(staffData)
        }
    }, [staffData])

    useEffect(() => {
        if (id) {
            getStaffById();
        }
    }, [id]);


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
                                            <h4 className="header-title">Update Staff</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/staff" className="btn btn-primary mb-2 me-2"> View Staff</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Role</label>
                                                        <select
                                                            {...register("roleId", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Role is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.roleId ? "border-danger" : ""}`}
                                                            defaultValue={watch("roleId")}>
                                                            <option hidden defaultChecked value={""}>Select Role</option>
                                                            {
                                                                roles?.map((ele, ind) =>
                                                                    <option value={ele._id} key={ind}>{ele.roleName}</option>)
                                                            }
                                                        </select>
                                                        {
                                                            errors.roleId && <span className="help-block text-danger"><small>{errors.roleId.message}</small></span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput1" className="form-label">Name</label>
                                                        <input
                                                            {...register("name",
                                                                { required: { value: true, message: "Name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput1" className={`form-control ${errors.name ? "border-danger" : ""}`}
                                                            placeholder='Enter staff name' />
                                                        {
                                                            errors.name && <span className="help-block text-danger"><small>{errors.name.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput2" className="form-label">Email</label>
                                                        <input
                                                            {...register("email",
                                                                {
                                                                    required: { value: true, message: "Email is required!" }, pattern: {
                                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                        message: "Invalid email!"
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput2" className={`form-control ${errors.email ? "border-danger" : ""}`}
                                                            placeholder='Enter the email' />
                                                        {
                                                            errors.email && <span className="help-block text-danger"><small>{errors.email.message}</small></span>
                                                        }
                                                    </div>

                                                </div>

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput3" className="form-label">Password</label>
                                                        <input
                                                            {...register("password",
                                                                {
                                                                    pattern: {
                                                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                                        message:
                                                                            "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character!",
                                                                    }
                                                                }
                                                            )}
                                                            type="text" id="simpleinput3" className={`form-control ${errors.password ? "border-danger" : ""}`}
                                                            placeholder='Enter the password' />
                                                        {
                                                            errors.password && <span className="help-block text-danger"><small>{errors.password.message}</small></span>
                                                        }
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

export default StaffEdit