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
                                <h4 className="header-title">Add a new Calendar Event</h4>
                                <hr />
                                <div className="tab-content mt-5">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>

                                            <div className="row">

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Enter Event Text</label>
                                                        <input type="text" className="form-control" placeholder='Enter title name' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Enter Event Description</label>
                                                        <input type="text" className="form-control" placeholder='Enter description' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Enter Event Link</label>
                                                        <input type="text" className="form-control" placeholder='Enter link' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Color For The Event</label>
                                                        <select className="form-select">
                                                            <option>select option</option>
                                                            <option>Red</option>
                                                            <option>Blue</option>
                                                            <option>Green</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-4'>
                                                        <label htmlFor="simleinput" className='form-lable'>Choose Start Date</label>
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-4'>
                                                        <label htmlFor="simleinput" className='form-lable'>Choose End Date</label>
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-time" className="form-label">Choose Time</label>
                                                        <input className="form-control" type="time" name="time" />
                                                        Ignore time for a full-day event
                                                    </div>
                                                </div>
                                                <input name="group1" type="radio" className="with-gap" id="radio_3" />
                                                <label htmlFor="radio_3">Check to Broadcast to Everyone</label>

                                            </div>
                                            <Link href='#'>
                                                <button className="btn btn-primary mt-5 " id="btn-new-event">
                                                    Add Event
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