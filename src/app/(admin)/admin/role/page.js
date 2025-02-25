"use client"

import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const page = () => {

    const [roleData, setRoleData] = useState();


    const getRolesData = async () => {
        try {
            const res = await axios.get(`/api/roles/getAllRoles`);
            console.log(res.data);
            if (res.data.status == 1) {
                setRoleData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRolesData();
    }, [])


    const handleDelete = async (id) => {

        const result = await Swal.fire({
            icon: "warning",
            width: "400px",
            title: "Are you sure?",
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Delete",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-outline-secondary",
            }
        })

        if (result.isConfirmed) {
            try {
                const res = await axios.post(`/api/roles/deleteRoles`, {
                    id: id
                })
                if (res.data.status == 1) {
                    toast.success(res.data.message);
                    getRolesData();
                }
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="d-flex justify-content-end">
                            <Link href="/admin/role/create" className="btn btn-primary mb-2 me-2">
                                <i className="bi bi-plus-lg"></i>Add Role</Link>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="row mb-2">
                                            <div className="col-xl-8">
                                                <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                                </form>
                                            </div>

                                        </div>


                                        <div className="table-responsive">

                                            <table id="myTable" className="text-fade table table-bordered display" >
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Sr. No.</th>
                                                        <th>Role Name</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        roleData?.map((ele, ind) =>
                                                            <tr key={ind}>
                                                                <td className="text-dark">{ind + 1}</td>
                                                                <td>{ele.roleName}</td>

                                                                <td className='d-flex align-items-center'>

                                                                    <Link href="#" className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(ele._id)}><i className="bi bi-trash"></i></Link>
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