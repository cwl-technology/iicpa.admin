"use client"


import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { PermissionContext } from '@/_context/PermissionContext';
// import { useState } from "react";


const Sidebar = () => {
    const pathname = usePathname()
    const session = useSession();
    const roleId = session?.data?.user?.roleId;

    const { permission, setPermission } = useContext(PermissionContext);

    const getPermissionByRole = async () => {
        try {
            const res = await axios.post("/api/roles/getPermissionByRoleId", {
                roleId: roleId,
            });
            if (res.data.status == 1) {
                setPermission(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    console.log(permission);
    const getPermissionsBymenuId = (menuId) => {
        const permissions = permission?.find((ele) => ele.menuId == menuId)
        return permissions?.service_2 || null;
    }

    useEffect(() => {
        if (roleId) {
            getPermissionByRole();
        }
    }, [roleId])


    return (

        <>
            <aside className="main-sidebar">
                {/* <!-- sidebar--> */}
                <section className="sidebar position-relative">
                    <div className="multinav">
                        <div className="multinav-scroll" style={{ height: "97%" }}>
                            {/* <!-- sidebar menu--> */}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li >
                                    <Link href="/admin" className={pathname === '/admin' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home "><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span>Dashboard</span></Link>
                                </li>

                                {
                                    getPermissionsBymenuId("67a1c491baf5937f5c93a982") &&
                                    <li>
                                        <Link href="/admin/course-category" className={pathname === '/admin/course-category' || pathname === '/admin/course-category/create' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Course Cateogry</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67a1c4aabaf5937f5c93a983") &&
                                    <li>
                                        <Link href="/admin/course" className={['/admin/course', '/admin/course/create', "/admin/course/edit", "/admin/chapter", "/admin/chapter/create", "/admin/chapter/edit", "/admin/topic", "/admin/topic/create", "/admin/topic/edit", "/admin/sub-topic", "/admin/sub-topic/create", "/admin/sub-topic/edit", "/admin/quiz", "/admin/quiz/edit", "/admin/quiz/create"].includes(pathname) ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Course</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67b6f77c60e29568dd1f72a9") &&
                                    <li>
                                        <Link href="/admin/live-session" className={pathname === '/admin/live-session' || pathname === '/admin/live-session/create' || pathname === '/admin/live-session/edit' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Live session</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67b6f80560e29568dd1f730c") &&
                                    <li>
                                        <Link href="/admin/jobs" className={pathname === '/admin/jobs' || pathname === '/admin/jobs/create' || pathname === '/admin/jobs/edit' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Jobs</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67a1c491baf5937f5c93a982") &&
                                    <li>
                                        <Link href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Partners</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67a1c491baf5937f5c93a982") &&
                                    <li>
                                        <Link href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Users</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67a1c491baf5937f5c93a982") &&
                                    <li>
                                        <Link href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Blogs</span></Link>
                                    </li>
                                }

                                {
                                    getPermissionsBymenuId("67b6f84060e29568dd1f7311") &&
                                    <li>
                                        <Link href="/admin/role" className={pathname === '/admin/role' || pathname === '/admin/role/create' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Manage Roles</span></Link>
                                    </li>
                                }
                                <li>
                                    <Link href="/admin/staff" className={pathname === '/admin/staff' || pathname === '/admin/staff/create' || pathname === '/admin/staff/edit' ? 'sidebar-active' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span>Staff Management</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </>
    )
}

export default Sidebar