import React from 'react'

const page = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <section className="content">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Input Types</h4>
                                <ul className="nav nav-tabs nav-bordered mb-3">
                                    <li className="nav-item">
                                        <a href="#input-types-preview" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                                            Preview
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            {/* <fieldset className="border rounded p-3 px-4 mb-4">
                                                <legend className="float-none w-auto px-3">
                                                </legend>
                                                Section */}
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Category</label>
                                                        <select className="form-select" id="example-select">
                                                            <option>Select Category</option>
                                                            <option>Select Category 1</option>
                                                            <option>Select Category 2</option>
                                                            <option>Select Category 3</option>
                                                            <option>Select Category 4</option>
                                                            <option>Select Category 5</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="simpleinput" className="form-label">Course Name</label>
                                                        <input type="text" id="simpleinput" className="form-control" placeholder='Enter course name' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Course Type</label>
                                                        <select className="form-select" id="example-select">
                                                            <option>Select course type</option>
                                                            <option>Online</option>
                                                            <option>Offline</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">

                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Combination</label>
                                                        <select className="form-select" id="example-select">
                                                            <option>Select combination</option>
                                                            <option>Pro</option>
                                                            <option>specailisation</option>
                                                            <option>Levels</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Course URL</label>
                                                        <input type="text" id="simpleinput" className="form-control" placeholder='Enter course video link' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Acutal Price</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='00' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-number" className="form-label">Discount(%)</label>
                                                        <input className="form-control" id="example-number" type="number" name="number" placeholder='00' />
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Price After Discount</label>
                                                        <input type="number" id="simpleinput" className="form-control" readOnly placeholder='00' />
                                                    </div>

                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Default file input</label>
                                                        <input type="file" id="example-fileinput" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </fieldset> */}
                                            <div className='row mt-5'>
                                                <div className='col-12 col-lg-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Modules</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the module' />
                                                    </div>
                                                </div>


                                                <div className='col-12 col-lg-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Chapters</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the chapter' />
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Micro Video</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the micro video' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Assesment</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the assesment' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Simulation</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the simulation' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Experiment</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the experiment' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Recording</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the recording' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Language</label>
                                                        <input type="number" id="example-palaceholder" className="form-control" placeholder='Enter the language' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-helping" className="form-label">Helping text</label>
                                                        <input type="text" id="example-helping" className="form-control" />
                                                        <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-textarea" className="form-label">Text area</label>
                                                        <textarea className="form-control" id="example-textarea" rows="5"></textarea>
                                                    </div>
                                                </div>
                                            </div>
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