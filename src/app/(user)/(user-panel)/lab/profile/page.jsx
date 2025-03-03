
"use client"
import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

const page = () => {

    const [activeTab, setActiveTab] = useState(1);
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

    return (
        <>
            <div className="content-wrapper">
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
                                            <h3 className='user-name text-center'>Aditya Thakur</h3>
                                            <h5 className='user-email text-center'>rb41786898@gmail.com</h5>
                                            <h5 className='user-number text-center'>+91 6398798204</h5>
                                        </div>
                                        <div className='user-btn text-center'>
                                            <a href="#">
                                                <button className='user-logout'>Log Out</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="box user-box">

                                    <div className='box-profile'>
                                        <ul className='profile-list'>
                                            <a href='#'>
                                                <li onClick={() => handleTabClick(1)}>Basic Profile</li>
                                            </a>

                                            <a href='#'>
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
                                                            <label className="form-label">Date of Birth:</label>
                                                            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
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
                                                    <div className='col-lg-6 col-12'>
                                                        <div className="form-group">
                                                            <label className="form-label">Area/locality:</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-12'></div>

                                                    <div className='col-lg-7 col-12'>
                                                        <label className="form-label">Communications :</label>
                                                        <div className="c-inputs-stacked">
                                                            <input type="checkbox" id="checkbox_123" />
                                                            <label htmlFor="checkbox_123" className="me-30">Male</label>
                                                            <input type="checkbox" id="checkbox_234" />
                                                            <label htmlFor="checkbox_234" className="me-30">Female</label>
                                                            <input type="checkbox" id="checkbox_345" />
                                                            <label htmlFor="checkbox_345" className="me-30">Other</label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="box-footer">
                                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                                    <button type="submit" className="btn btn-success pull-right">Save</button>
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

                                                <div className="box-footer">
                                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                                    <button type="submit" className="btn btn-success pull-right">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

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