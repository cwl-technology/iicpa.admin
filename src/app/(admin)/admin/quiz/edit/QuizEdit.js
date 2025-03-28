"use client"

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';
import ButtonLoader from '@/_component/global/ButtonLoader';
import { toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";


const QuizEdit = () => {

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm()
    const router = useRouter();
    const searchParams = useSearchParams();

    const courseName = searchParams.get("courseName");
    const chapterName = searchParams.get("chapterName");
    const topicName = searchParams.get("topicName");
    const subTopicName = searchParams.get("subTopicName");
    const courseId = searchParams.get("courseId");
    const chapterId = searchParams.get("chapterId");
    const topicId = searchParams.get("topicId");
    const subTopicId = searchParams.get("subTopicId");
    const id = searchParams.get("id");

    const createQueryString = (name, value) => {
        const params = new URLSearchParams()
        params.set(name, value)
        return params.toString()
    }

    const onSubmit = async (data) => {
        try {
            data.courseId = courseId;
            data.chapterId = chapterId;
            data.topicId = topicId;
            data.subTopicId = subTopicId;
            data.id = id;
            const res = await axios.post("/api/quiz/updateQuiz", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push(`/admin/quiz?${createQueryString('courseName', courseName)}&${createQueryString('courseId', courseId)}&${createQueryString('chapterName', chapterName)}&${createQueryString('chapterId', chapterId)}&${createQueryString('topicName', topicName)}&${createQueryString('topicId', topicId)}&${createQueryString('subTopicName', subTopicName)}&${createQueryString('subTopicId', subTopicId)}`);
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }


    const getQuizData = async () => {
        try {
            const res = await axios.post("/api/quiz/getQuizById", {
                id: id
            })
            if (res.data.status == 1) {
                reset(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getQuizData();
        }
    }, [id])


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
                                            <h4 className="header-title">Update Quiz</h4>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="input-types-preview">
                                        <form>
                                            <div className="row">

                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Question</label>
                                                        <input
                                                            {...register("question",
                                                                { required: { value: true, message: "Question is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.question ? "border-danger" : ""}`}
                                                            placeholder='Enter the question for the quiz' />
                                                        {
                                                            errors.question && <span className="help-block text-danger"><small>{errors.question.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className='col-md-6'>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">First Option</label>
                                                        <input
                                                            {...register("answer1",
                                                                { required: { value: true, message: "First option is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.answer1 ? "border-danger" : ""}`}
                                                            placeholder='Enter First Option' />
                                                        {
                                                            errors.answer1 && <span className="help-block text-danger"><small>{errors.answer1.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Second Option</label>
                                                        <input
                                                            {...register("answer2",
                                                                { required: { value: true, message: "Second option is required!" } }
                                                            )}
                                                            type="text" id="simpleinput" className={`form-control ${errors.answer2 ? "border-danger" : ""}`}
                                                            placeholder='Enter First Option' />
                                                        {
                                                            errors.answer2 && <span className="help-block text-danger"><small>{errors.answer2.message}</small></span>
                                                        }
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Third Option</label>
                                                        <input
                                                            {...register("answer3")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter Third Option' />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Fourth Option</label>
                                                        <input
                                                            {...register("answer4")}
                                                            type="text" id="simpleinput" className={`form-control`}
                                                            placeholder='Enter Fourth Option' />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="example-select" className="form-label">Select course level</label>
                                                        <select id="example-select"
                                                            {...register("correctAnswer", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Course level is required!"
                                                                }
                                                            })}
                                                            className={`form-select ${errors.correctAnswer ? "border-danger" : ""}`}
                                                        >
                                                            <option hidden defaultChecked value={""}>Select Correct Answer</option>
                                                            <option value="answer1">First Option</option>
                                                            <option value="answer2">Second Option</option>
                                                            <option value="answer3">Third Option</option>
                                                            <option value="answer4">Fourth Option</option>

                                                        </select>
                                                        {
                                                            errors.correctAnswer && <span className="help-block text-danger"><small>{errors.correctAnswer.message}</small></span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="simpleinput" className="form-label">Quiz Points</label>
                                                        <input
                                                            {...register("quizPoints",
                                                                {
                                                                    required: { value: true, message: "Quiz points are required!" },
                                                                    min: { value: 0, message: "Invalid value!" }
                                                                }
                                                            )}
                                                            type="number" id="simpleinput" className={`form-control ${errors.quizPoints ? "border-danger" : ""}`}
                                                            min={0} placeholder='Enter the winning points.' />
                                                        {
                                                            errors.quizPoints && <span className="help-block text-danger"><small>{errors.quizPoints.message}</small></span>
                                                        }
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

export default QuizEdit