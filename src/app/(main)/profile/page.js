
"use client"
import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const page = () => {

    const [activeTab, setActiveTab] = useState(1);
    const session = useSession();
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleLogout = async () => {
        await signOut()
      }

    return (
        <>
            <div className="content-wrapper p-5">
                <div className="container-full">
                    <section className="content">
                        <div className="row">
                            <div className='col-lg-4 col-12'>
                                <div className='user-card'>
                                    <div className='user-card-body'>
                                        <div className='user-profile'>
                                            <label htmlFor='profile_picture' className='uplode-picture'>
                                                {imagePreview ? (
                                                    <img src={imagePreview} alt="Profile Preview" className="preview-image" />
                                                ) : (
                                                    <i className="bi bi-camera"></i>
                                                )}
                                            </label>
                                            <input accept="image/*" type="file" id='profile_picture' name='userprofile' onChange={handleImageChange}
                                                style={{ display: 'none' }} />
                                        </div>
                                        <div className='user-information'>
                                            <h3 className='user-name text-center'>{session?.data?.user?.name}</h3>
                                            <p className='user-email text-center'>rb41786898@gmail.com</p>
                                            
                                        </div>
                                        <div className='user-btn text-center'>
                                            <div className="about-two__btn-box mt-3">
                                                <a href="#" className="thm-btn-two" onClick={handleLogout}>
                                                    <span className="px-4 py-2">Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="box">

                                    <div className='box-profile'>
                                        <ul className='profile-list' type="none">
                                            <a href='#' className={`${activeTab == 1 ?"active":""}`}>
                                                <li onClick={() => handleTabClick(1)}>Basic Profile</li>
                                            </a>

                                            <a href='#' className={`${activeTab == 2 ?"active":""}`}>
                                                <li onClick={() => handleTabClick(2)}>Billing Information</li>
                                            </a>

                                        </ul>
                                    </div>



                                    <hr />

                                    <form>
                                        <div className={`box-body-1 ${activeTab === 1 ? "active-tab" : ""}`}>
                                            <div className="container">
                                                <div className='row'>
                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Full Name:</label>
                                                            <input type="text" className="form-control" placeholder="Enter full name" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Email address:</label>
                                                            <input type="email" className="form-control" placeholder="Enter email" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Contact:</label>
                                                            <input type="tel" className="form-control" placeholder="Phone number" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Center:</label>
                                                            <input type="tel" className="form-control" placeholder="Phone number" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Date of Birth:</label>
                                                            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Area/locality:</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="custom-dropdown-container">
                                                            <label className="form-label">Select State:</label>

                                                            <select className="custom-select-dropdown">

                                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                                <option value="Maharashtra">Maharashtra</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="Hariyana">Hariyana</option>
                                                                <option value="Rajishthan">Rajishthan</option>
                                                                <option value="Uttrakhand">Uttrakhand</option>
                                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'>
                                                        <div className="custom-dropdown-container">
                                                            <label className="form-label">Select district:</label>
                                                            <select className="custom-select-dropdown">

                                                                <option defaultValue="Badaun">Badaun</option>

                                                            </select>
                                                        </div>
                                                    </div>

                                                </div >
                                                <div className="courses-three__btn-box mt-3">
                                                    <a href="#" className="thm-btn-two ">
                                                        <span className="px-4">Update</span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </form>

                                    <form>
                                        <div className={`box-body-1 ${activeTab === 2 ? "active-tab" : ""}`}>
                                            <div className='container'>

                                                <div className="card-header">
                                                    <h5 className="card-title">Your Transactions:</h5>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: "40%" }}>Date</th>
                                                                <th className="d-none d-md-table-cell" style={{ width: "25%" }}>Amount</th>
                                                                <th style={{ width: "15%" }}>Invoice</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>29/03/2025</td>
                                                                <td className="d-none d-md-table-cell">4000</td>
                                                                <td className="table-action min-w-100">
                                                                    <a href="#" className="hover-primary"><i className="bi bi-cloud-download"></i></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <h4 className='mb-4'>Update Billing Information (B2B) </h4>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Company Name:</label>
                                                            <input type="text" className="form-control" placeholder="company name" />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Company GST (optional):</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Company Address:</label>
                                                            <input type="text" className="form-control" placeholder="Enter full name" />
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-6 col-12'></div>
                                                </div>

                                                <div className="courses-three__btn-box mt-3">
                                                    <a href="#" className="thm-btn-two ">
                                                        <span className="px-4">Update</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

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