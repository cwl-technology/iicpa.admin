import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from 'next/link';

export const metadata = {
    title: 'Admin | IICPA',
    description: '...',
  }

const page = () => {


    
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card bg-white-900 ">
                            <div className="card-header">
                                <h4 className="card-title">Faculty Training</h4>
                            </div>
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
                                            {/* <div className="col-xl-4">
                                                <div className="add-order text-xl-end mt-xl-0 mt-2">
                                                    <Link href="/student/create" className="btn btn-primary mb-2 me-2"> Order New</Link>
                                                    <Link href="#" className="btn btn-primary-light mb-2">Order History</Link>
                                                </div>
                                            </div> */}
                                        </div>



                                        <div className="table-responsive">

                                            <table className="text-fade table table-bordered display" style={{ width: "100%" }}>
                                                <thead>

                                                    <tr className="text-dark">
                                                        <th>Module</th>
                                                        <th>Horse</th>
                                                        <th>Video</th>
                                                        <th>Answer</th>
                                                        <th>Task Test</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>

                                                    </tr>


                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>


                                                    </tr>

                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>

                                                    </tr>

                                                    <tr>
                                                        <td>Basic Accounting & Tally Foundation</td>
                                                        <td>23</td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-danger-light">Video</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-success-light">Answer</Link></p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0"><Link href='#' className="badge badge-primary-light">Task Test</Link></p>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}

export default page