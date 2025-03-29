"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import dynamic from "next/dynamic";
import usePermission from '@/_helper/frontend/Permission';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const page = () => {
    const [aboutData, setAboutData] = useState();
     


    // Description 
    const [aboutDescription, setAboutDescription] = useState('');
    const [missionDescription, setMissionDescription] = useState('');
    const [visionDescription, setVisionDescription] = useState('');
    const [whyChooseUsDescription, setWhyChooseUsDescription] = useState('');

    // Image 
    const [aboutImage1, setAboutImage1] = useState();
    const [aboutImage2, setAboutImage2] = useState();
    const [whyChooseUsIcon1, setWhyChooseUsIcon1] = useState();
    const [whyChooseUsIcon2, setWhyChooseUsIcon2] = useState();
    const [whyChooseUsIcon3, setWhyChooseUsIcon3] = useState();
    const [whyChooseUsIcon4, setWhyChooseUsIcon4] = useState();

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );


    //Permission Logic
    const menuId = "67e638bca8f1f1d5d22504ad"
    const getPermissionsBymenuId = usePermission(menuId);

    useEffect(() => {
        if (!getPermissionsBymenuId("service_2")) {
            router.push("/admin")
        }
    }, [])

    const onSubmit = async (data) => {
        try {

            console.log(data.whyChooseUsContent3);
            const formdata = new FormData();
            formdata.append("aboutHeading", data.aboutHeading);
            formdata.append("aboutDescription", aboutDescription);
            formdata.append("aboutImage1", aboutImage1);
            formdata.append("aboutImage2", aboutImage2);
            formdata.append("missionDescription", missionDescription);
            formdata.append("visionDescription", visionDescription);

            formdata.append("whyChooseUsHeading", data.whyChooseUsHeading);
            formdata.append("whyChooseUsDescription", whyChooseUsDescription);
            formdata.append("whyChooseUsSubHeading1", data.whyChooseUsSubHeading1);
            formdata.append("whyChooseUsContent1", data.whyChooseUsContent1);
            formdata.append("whyChooseUsIcon1", whyChooseUsIcon1);
            formdata.append("whyChooseUsSubHeading2", data.whyChooseUsSubHeading2);
            formdata.append("whyChooseUsContent2", data.whyChooseUsContent2);
            formdata.append("whyChooseUsIcon2", whyChooseUsIcon2);
            formdata.append("whyChooseUsSubHeading3", data.whyChooseUsSubHeading3);
            formdata.append("whyChooseUsContent3", data.whyChooseUsContent3);
            formdata.append("whyChooseUsIcon3", whyChooseUsIcon3);
            formdata.append("whyChooseUsSubHeading4", data.whyChooseUsSubHeading4);
            formdata.append("whyChooseUsContent4", data.whyChooseUsContent4);
            formdata.append("whyChooseUsIcon4", whyChooseUsIcon4);

            formdata.append("title", data.title);
            formdata.append("keywords", data.keywords);
            formdata.append("metaDescription", data.metaDescription);

            formdata.append("id", aboutData._id);

            const res = await axios.post("/api/about/updateAboutData", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }

    console.log(aboutImage1);


    const getAboutData = async () => {
        try {
            const res = await axios.get("/api/about/getAboutData");
            if (res.data.status == 1) {
                console.log(res.data);
                setAboutData(res.data.data);
                reset(res.data.data);

                setAboutDescription(res.data.data.aboutDescription)
                setMissionDescription(res.data.data.missionDescription)
                setVisionDescription(res.data.data.visionDescription)
                setWhyChooseUsDescription(res.data.data.whyChooseUsDescription)



            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAboutData();
    }, [])

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
                                            <h4 className="header-title">About us </h4>
                                        </a>
                                    </li>

                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">About Heading</label>
                                                        <input
                                                            {...register("aboutHeading")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Image 1</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("aboutImage1")}
                                                            accept="image/*"
                                                            onChange={(e) => setAboutImage1(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        aboutImage1 ? <img src={URL.createObjectURL(aboutImage1)} alt="error" width={"100px"} /> : (aboutData?.aboutImage1 && <img src={`/uploads/${aboutData?.aboutImage1}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Image 1</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("aboutImage2")}
                                                            accept="image/*"
                                                            onChange={(e) => setAboutImage2(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        aboutImage2 ? <img src={URL.createObjectURL(aboutImage2)} alt="error" width={"100px"} /> : (aboutData?.aboutImage2 && <img src={`/uploads/${aboutData?.aboutImage2}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>


                                                <div className='col-md-12'>
                                                    <label>
                                                        About Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={aboutDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setAboutDescription(newContent)}
                                                    />
                                                </div>

                                                <div className='col-md-12 mt-3'>
                                                    <label>
                                                        Mission Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={missionDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setMissionDescription(newContent)}
                                                    />
                                                </div>

                                                <div className='col-md-12 mt-3'>
                                                    <label>
                                                        Vision Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={visionDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setVisionDescription(newContent)}
                                                    />
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <ul className="nav nav-tabs nav-bordered mb-3 mt-4 d-flex justify-content-between">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Why Choose Us </h4>
                                        </a>
                                    </li>

                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Why Choose Us Heading</label>
                                                        <input
                                                            {...register("whyChooseUsHeading")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                                <div className='col-md-12 mb-3'>
                                                    <label>
                                                        Why Choose Us Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={whyChooseUsDescription}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setWhyChooseUsDescription(newContent)}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Heading 1</label>
                                                        <input
                                                            {...register("whyChooseUsSubHeading1")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the sub heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Icon 1</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("whyChooseUsIcon1")}
                                                            accept="image/*"
                                                            onChange={(e) => setWhyChooseUsIcon1(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        whyChooseUsIcon1 ? <img src={URL.createObjectURL(whyChooseUsIcon1)} alt="error" width={"100px"} />
                                                            : (aboutData?.whyChooseUsIcon1 && <img src={`/uploads/${aboutData?.whyChooseUsIcon1}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content 1</label>

                                                        <textarea className="form-control"
                                                            {...register("whyChooseUsContent1")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Heading 2</label>
                                                        <input
                                                            {...register("whyChooseUsSubHeading2")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the sub heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Icon 2</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("whyChooseUsIcon2")}
                                                            accept="image/*"
                                                            onChange={(e) => setWhyChooseUsIcon2(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        whyChooseUsIcon2 ? <img src={URL.createObjectURL(whyChooseUsIcon2)} alt="error" width={"100px"} />
                                                            : (aboutData?.whyChooseUsIcon2 && <img src={`/uploads/${aboutData?.whyChooseUsIcon2}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content 2</label>

                                                        <textarea className="form-control"
                                                            {...register("whyChooseUsContent2")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Heading 3</label>
                                                        <input
                                                            {...register("whyChooseUsSubHeading3")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the sub heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Icon 3</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("whyChooseUsIcon3")}
                                                            accept="image/*"
                                                            onChange={(e) => setWhyChooseUsIcon3(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        whyChooseUsIcon3 ? <img src={URL.createObjectURL(whyChooseUsIcon3)} alt="error" width={"100px"} />
                                                            : (aboutData?.whyChooseUsIcon3 && <img src={`/uploads/${aboutData?.whyChooseUsIcon3}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content 3</label>

                                                        <textarea className="form-control"
                                                            {...register("whyChooseUsContent3")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>



                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Sub Heading 4</label>
                                                        <input
                                                            {...register("whyChooseUsSubHeading4")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter the sub heading' />

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Icon 4</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("whyChooseUsIcon4")}
                                                            accept="image/*"
                                                            onChange={(e) => setWhyChooseUsIcon4(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        whyChooseUsIcon4 ? <img src={URL.createObjectURL(whyChooseUsIcon4)} alt="error" width={"100px"} />
                                                            : (aboutData?.whyChooseUsIcon4 && <img src={`/uploads/${aboutData?.whyChooseUsIcon4}`} alt="error" width={"100px"} />)
                                                    }
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content 4</label>

                                                        <textarea className="form-control"
                                                            {...register("whyChooseUsContent4")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <ul className="nav nav-tabs nav-bordered mb-3 mt-4">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">SEO Section</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Title</label>
                                                        <input
                                                            {...register("title")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter title' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Keywords</label>

                                                        <textarea className="form-control"
                                                            {...register("keywords")} id="example-textarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Description</label>

                                                        <textarea className="form-control"
                                                            {...register("metaDescription")} id="example-textarea" rows="3"></textarea>
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

export default page