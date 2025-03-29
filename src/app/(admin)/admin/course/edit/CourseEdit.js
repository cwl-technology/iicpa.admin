"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import dynamic from "next/dynamic";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import usePermission from '@/_helper/frontend/Permission';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })


const CourseEdit = () => {

    const [actualPrice, setActualPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const [courseCategoryData, setCourseCategoryData] = useState();

    // Description 
    const [courseDesc, setCourseDesc] = useState('');
    const [examAndCertiDesc, setExamAndCertiDesc] = useState('');
    const [caseStudyDesc, setCaseStudyDecs] = useState('');
    const [simulationAndExpDesc, setSimulationAndExpDesc] = useState('');
    const [experiments, setExperiments] = useState([]);
    const [experimentsObject, setExperimentsObject] = useState({
        heading: "",
        content: ""
    });
    const [existedCourseImage, setExistedCourseImage] = useState();

    // Image 
    const [courseImage, setCourseImage] = useState();


    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm(
        {
            defaultValues: {
                courseCategory: "",
            }
        }
    )
    const router = useRouter();
    const editor = useRef(null);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...',
        height: "300px"
    }),
    );

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const handleExperimentValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setExperimentsObject({ ...experimentsObject, [name]: value });
    }

    const handleAddExperiment = (e) => {
        e.preventDefault();
        if (!experimentsObject.heading || !experimentsObject.content) {
            return;
        }
        setExperiments([...experiments, experimentsObject]);
        setExperimentsObject({
            heading: "",
            content: ""
        });
    }

    const deleteExperiment = (e, ind) => {
        e.preventDefault();
        const updatedExperiment = experiments.filter((e, i) => i != ind)
        setExperiments(updatedExperiment);
    }

    const getCourseCategoryList = async (req, res) => {
        try {
            const res = await axios.get("/api/courseCategory/getAllCourseCategory");
            if (res.data.status == 1) {
                setCourseCategoryData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const handlePriceChange = (e) => {
        const { name, value } = e.target;

        if (name === "actualPrice") {
            setActualPrice(value);
        } else if (name === "discount") {
            setDiscount(value);
        }

        const price = parseFloat(name === "actualPrice" ? value : actualPrice) || 0;
        const discountValue = parseFloat(name === "discount" ? value : discount) || 0;
        const discountedPrice = price - (price * discountValue) / 100;
        setFinalPrice(discountedPrice.toFixed(2));
    };

    const onSubmit = async (data) => {
        try {
            
            const formdata = new FormData();
            formdata.append("courseCategory", data.courseCategory);
            formdata.append("courseName", data.courseName);
            formdata.append("courseSlug", data.courseSlug);
            formdata.append("courseLevel", data.courseLevel);
            formdata.append("courseImage", courseImage);
            formdata.append("actualPrice", actualPrice);
            formdata.append("discount", discount);
            formdata.append("priceAfterDiscount", finalPrice);
            formdata.append("courseVideoLink", data.courseVideoLink);
            formdata.append("courseDesc", courseDesc);
            formdata.append("examAndCertiDesc", examAndCertiDesc);
            formdata.append("caseStudyDesc", caseStudyDesc);
            formdata.append("simulationAndExpDesc", simulationAndExpDesc);
            formdata.append("simulationAndExp", JSON.stringify(experiments));
            formdata.append("title", data.title);
            formdata.append("keywords", data.keywords);
            formdata.append("metaDescription", data.metaDescription);
            formdata.append("id", id);

            const res = await axios.post("/api/courses/updateCourse", formdata);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/admin/course");
            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }

    const getCourseData = async () => {
        try {
            const res = await axios.post("/api/courses/getCourseById", {
                id: id
            });
            if (res.data.status == 1) {
                reset(res.data.data);
                setExistedCourseImage(res.data.data.courseImage);
                setActualPrice(res.data.data.actualPrice || 0);
                setDiscount(res.data.data.discount || 0);
                setFinalPrice(res.data.data.priceAfterDiscount || 0);
                setCaseStudyDecs(res.data.data.caseStudyDesc);
                setCourseDesc(res.data.data.courseDesc);
                setExamAndCertiDesc(res.data.data.examAndCertiDesc);
                setSimulationAndExpDesc(res.data.data.simulationAndExpDesc);
                setExperiments(res.data.data.simulationAndExp);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getCourseData();
        }
    }, [id])


    useEffect(() => {
        getCourseCategoryList();
    }, []);


    //Permission Logic
        const menuId = "67a1c4aabaf5937f5c93a983"
        const getPermissionsBymenuId = usePermission(menuId);
    
        useEffect(() => {
            if (!getPermissionsBymenuId("service_2")) {
                router.push("/admin")
            }
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
                                            <h4 className="header-title">Update Course</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/course" className="btn btn-primary mb-2 me-2"> View Courses</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select Category</label>
                                                        <select id="example-select"
                                                            {...register("courseCategory", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Course category is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.courseCategory ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked value={""}>Select Category</option>
                                                            {
                                                                courseCategoryData?.map((ele, ind) =>
                                                                    <option value={ele._id} key={ind}>{ele.categoryName}</option>)
                                                            }
                                                        </select>
                                                        {
                                                            errors.courseCategory && <span className="help-block text-danger"><small>{errors.courseCategory.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select course level</label>
                                                        <select id="example-select"
                                                            {...register("courseLevel", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Course level is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.courseLevel ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked value={""}>Select course level</option>
                                                            <option value="Foundation">Foundation</option>
                                                            <option value="Core">Core </option>
                                                            <option value="Expert">Expert</option>
                                                        </select>
                                                        {
                                                            errors.courseLevel && <span className="help-block text-danger"><small>{errors.courseLevel.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Course Name</label>
                                                        <input
                                                            {...register("courseName",
                                                                { required: { value: true, message: "Course name is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.courseName ? "border-danger" : ""}`}
                                                            placeholder='Enter course name' />
                                                        {
                                                            errors.courseName && <span className="help-block text-danger"><small>{errors.courseName.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Course Slug</label>
                                                        <input
                                                            {...register("courseSlug",
                                                                { required: { value: true, message: "Course slug is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.courseSlug ? "border-danger" : ""}`}
                                                            placeholder='Enter course slug' />
                                                        {
                                                            errors.courseSlug && <span className="help-block text-danger"><small>{errors.courseSlug.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-fileinput" className="form-label">Course Image</label>
                                                        <input type="file"
                                                            id="example-fileinput" className="form-control"
                                                            {...register("courseImage")}
                                                            accept="image/*"
                                                            onChange={(e) => setCourseImage(e.target.files[0])}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center">
                                                    {
                                                        courseImage ?
                                                            <img src={URL.createObjectURL(courseImage)} alt="error1" width={"100px"} /> :
                                                            existedCourseImage && <img src={`/uploads/${existedCourseImage}`} alt="error2" width={"100px"} />
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-number" className="form-label">Actual Price</label>
                                                        <input
                                                            {...register("actualPrice")}
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Enter the actual price"
                                                            value={actualPrice}
                                                            onChange={handlePriceChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="example-number" className="form-label">Discount(%)</label>
                                                        <input
                                                            {...register("discount")}
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Enter the Discount"
                                                            value={discount}
                                                            onChange={handlePriceChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Price After Discount</label>
                                                        <input {...register("priceAfterDiscount")}
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Final Price"
                                                            value={finalPrice}
                                                            readOnly />
                                                    </div>

                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="mb-3">
                                                        <label htmlFor="example-palaceholder" className="form-label">Course Video Link</label>
                                                        <input {...register("courseVideoLink")}
                                                            type="url"
                                                            className="form-control"
                                                            placeholder="Enter the course video link" />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <label>
                                                        Course Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={courseDesc}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setCourseDesc(newContent)}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs nav-bordered mb-2 mt-4">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Exam and Certification</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 mt-2">
                                                    <label className='form-label'>
                                                        Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={examAndCertiDesc}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setExamAndCertiDesc(newContent)}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs nav-bordered mb-2 mt-4">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Case Study</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 mt-2">
                                                    <label className='form-label'>
                                                        Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={caseStudyDesc}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setCaseStudyDecs(newContent)}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs nav-bordered mb-2 mt-4">
                                    <li className="nav-item">
                                        <a href="#" data-bs-toggle="tab" aria-expanded="false" className="nav-link active p-0">
                                            <h4 className="header-title">Simulation and Experiment</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">
                                                <div className='col-md-4 my-3'>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Heading</label>
                                                        <input
                                                            name='heading'
                                                            value={experimentsObject?.heading}
                                                            onChange={handleExperimentValue}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter title' />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Content</label>

                                                        <textarea className="form-control"
                                                            name='content'
                                                            value={experimentsObject?.content}
                                                            onChange={handleExperimentValue}
                                                            id="example-textarea" rows="2"></textarea>
                                                    </div>
                                                    <button className='btn btn-primary' onClick={handleAddExperiment}>Add</button>
                                                </div>
                                                <div className='col-md-8 d-flex flex-column justify-content-center'>
                                                    <div className='row g-4'>
                                                        {
                                                            experiments?.map((ele, ind) =>
                                                                <div className='col-4' key={ind}>
                                                                    <div className='experiment-box p-4'>
                                                                        <h3>{ele.heading}</h3>
                                                                        <p>{ele.content}</p>
                                                                        <a href='#' className="btn btn-primary btn-sm  ms-2" onClick={(e) => deleteExperiment(e, ind)}><i className="bi bi-trash"></i></a>
                                                                    </div>
                                                                </div>)
                                                        }

                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-2">
                                                    <label className='form-label'>
                                                        Description
                                                    </label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={simulationAndExpDesc}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setSimulationAndExpDesc(newContent)}
                                                    />
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

export default CourseEdit