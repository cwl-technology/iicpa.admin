import React from 'react'
import Link from 'next/link'
const page = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Add new Batch</h4>
                                <hr />
                                <div className="tab-content mt-5">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>

                                            <div className="row">

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Enter Name of Batch</label>
                                                        <input type="text" className="form-control" placeholder='Enter batch name' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select type of batch</label>
                                                        <select className="form-select">
                                                            <option>Select</option>
                                                            <option>Online</option>
                                                            <option>Classroom</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className='col-12 col-lg-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-time" className="form-label">Choose Time</label>
                                                        <input className="form-control" type="time" name="time" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Duration of this Time Slot</label>
                                                        <select className="form-select">
                                                            <option>select</option>
                                                            <option>1 Hour</option>
                                                            <option>2 Hour</option>
                                                            <option>4 Hour</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Start day of the Week</label>
                                                        <select className="form-select">
                                                            <option>select</option>
                                                            <option>Monday</option>
                                                            <option>Tuesday</option>
                                                            <option>Wednesday</option>
                                                            <option>Thursday</option>
                                                            <option>Friday</option>
                                                            <option>Saturday</option>
                                                            <option>Sunday</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select End day of the Week</label>
                                                        <select className="form-select">
                                                            <option>select</option>
                                                            <option>Monday</option>
                                                            <option>Tuesday</option>
                                                            <option>Wednesday</option>
                                                            <option>Thursday</option>
                                                            <option>Friday</option>
                                                            <option>Saturday</option>
                                                            <option>Sunday</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Course:</label>
                                                        <select className="form-select">
                                                            <option>select</option>
                                                            <option>Tally Foundation</option>
                                                            <option>Basic and Advanced Excel</option>
                                                            <option>Payroll or Salary Statement</option>
                                                            <option>Income Tax Computation</option>
                                                            <option>TDS Computation</option>
                                                            <option>GST Computation</option>
                                                            <option>Tally Specialisation</option>
                                                            <option>Income Tax Return Filing</option>
                                                            <option>TDS Return Filing</option>
                                                            <option>PF, ESI, PT Return Filing</option>
                                                            <option>Business Taxation</option>
                                                            <option>Financial Statements & MIS</option>
                                                            <option>Financial Literacy</option>
                                                            <option>Stock Market</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href='#'>
                                                <button className="btn btn-primary mt-5 " id="btn-new-event">
                                                    Add Batche
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