import React from 'react'

const page = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-primary-light">
                            <div className="card-header">
                                <h4 className="card-title">Calender</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-12">
                                <div className="box">
                                    <div className="box-body">

                                        <div className="custom-dropdown-container">
                                            <small className="custom-label">Select Course:</small>
                                            <br />
                                            <select className="custom-select-dropdown" name="Designation" id="select_course">
                                                <option value="Select">All</option>
                                                <option value="Financial Statements & MIS">Financial Statements & MIS</option>
                                                <option value="Income Tax Computation">Income Tax Computation</option>
                                                <option value="GST Return Filing">GST Return Filing</option>
                                                <option value="Stock Market">Stock Market</option>
                                                <option value="Chapter 10: GST Return Filing using offline or online utilities">Chapter 10: GST Return Filing using offline or online utilities</option>
                                                <option value="TDS Computation">TDS Computation</option>
                                                <option value="Tally Foundation">Basic Accounting & Tally Foundation</option>
                                                <option value="select">Payroll or Salary Statement</option>
                                                <option value="Tally Specialisation">Tally Advanced</option>
                                                <option value="GST Computation">GST Computation</option>
                                                <option value="Chapter 5: E-Way Bill">Chapter 5: E-Way Bill</option>
                                            </select>
                                        </div>
                                        <form>
                                            <div className="form-group mb-30">
                                                <h3 className="fw-500 fs-15 mt-0 mb-20">Language</h3>
                                                <div className="checkbox-list">
                                                    <div className="mb-2">
                                                        <input type="checkbox" id="md_checkbox_1" className="chk-col-primary" />
                                                        <label htmlFor="md_checkbox_1" className="fs-13 fw-400 d-flex justify-content-between text-fade"> Hindi
                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input type="checkbox" id="md_checkbox_2" className="chk-col-primary" />
                                                        <label htmlFor="md_checkbox_2" className="fs-13 fw-400 d-flex justify-content-between text-fade"> English
                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input type="checkbox" id="md_checkbox_3" className="chk-col-primary" />
                                                        <label htmlFor="md_checkbox_3" className="fs-13 fw-400 d-flex justify-content-between text-fade"> English,Hindi

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mb-30">
                                                <h3 className="fw-500 fs-15 mt-0 mb-20">Timing</h3>
                                                <div className="checkbox-list">
                                                    <div className="mb-2">
                                                        <input name="group1" type="radio" id="radio_1" />
                                                        <label htmlFor="radio_1" className="fs-13 fw-400 d-flex justify-content-between text-fade">7:00 PM - 9:00 PM

                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input name="group1" type="radio" id="radio_2" />
                                                        <label htmlFor="radio_2" className="fs-13 fw-400 d-flex justify-content-between text-fade">7:00 AM - 9:00 AM

                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input name="group1" type="radio" id="radio_3" />
                                                        <label htmlFor="radio_3" className="fs-13 fw-400 d-flex justify-content-between text-fade">10:00 AM - 2:00 PM

                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input name="group1" type="radio" id="radio_4" />
                                                        <label htmlFor="radio_4" className="fs-13 fw-400 d-flex justify-content-between text-fade">8:00 PM - 10:00 PM

                                                        </label>
                                                    </div>
                                                    <div className="mb-2">
                                                        <input name="group1" type="radio" id="radio_5" />
                                                        <label htmlFor="radio_5" className="fs-13 fw-400 d-flex justify-content-between text-fade">10:00 AM - 12:00 PM

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary mr-2">Reset</button>
                                            <button type="reset" className="btn btn-primary-light ">Setup</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-12">
                                <div className="row">

                                    <div className="col-lg-12 col-md-6">
                                        <div className="custom-box">
                                            <h4 className="custom-heading">Upcoming Sessions</h4>
                                            <div className="custom-checkbox-container">
                                                <input name="week" value="weekday" type="checkbox"
                                                    className="custom-checkbox" />
                                                <label htmlFor="show_batch_only" className="custom-label new-batches">New Batches |</label>
                                            </div>



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