"use client"

import ButtonLoader from '@/_component/global/ButtonLoader'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const [centerData, setCenterData] = useState();
    const router = useRouter()


    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/user/signup", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                router.push("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCenterData = async () => {
        try {
            const res = await axios.get("/api/center/getAllActiveCenter");
            if (res.data.status == 1) {
                setCenterData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCenterData();
    }, [])
    return (
        <>

            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">

                        <form id="sign-up-one__form" name="sign-up-one_form" action="#" method="post">
                            <div className="inner-title text-center">
                                <a href="#" className="logo auth-page-logo">
                                    <div className="logo-lg 2-10">
                                        <span className="light-logo"><img src="\assets\images\iicpa\logo-2 new.webp" alt="logo" /></span>
                                    </div>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="text" name="form_email" id="formEmail" placeholder="Name..."
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Name is required!"
                                                    }
                                                })} className={`${errors.name ? "border-danger" : ""}`} />
                                            {
                                                errors.name && <p className='text-danger small'>{errors.name.message}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="email" name="form_email" id="formEmail" placeholder="Email..."
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required!"
                                                    },
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Invalid email!"
                                                    }
                                                })} className={`${errors.email ? "border-danger" : ""}`} />
                                            {
                                                errors.email && <p className='text-danger small'>{errors.email.message}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="text" name="form_phone" id="formPhone" placeholder="Phone..."
                                                defaultValue="" {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Phone number is required!"
                                                    },
                                                    pattern: {
                                                        value: /^\d{10}$/,
                                                        message: "Invalid number!"
                                                    }
                                                })} className={`${errors.phone ? "border-danger" : ""}`} />
                                            {
                                                errors.phone && <p className='text-danger small'>{errors.phone.message}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-12'>
                                    <div className='form-group'>
                                        <div className='input-box'>
                                            <select className="custom-select-dropdown-1" {...register("centerId", {
                                                required: {
                                                    value: true,
                                                    message: "Center is required!"
                                                }
                                            })}>
                                                <option defaultChecked hidden value={""}>Select Center</option>
                                                {
                                                    centerData?.map((ele, ind) => (
                                                        <option value={ele._id} key={ind} title={ele.name}>
                                                            {ele.name.length > 50 ? ele.name.substring(0, 50) + "..." : ele.name}
                                                        </option>
                                                    ))
                                                }


                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type={showPassword ? "text" : "password"} name="form_password" id="formPassword"
                                                placeholder="Password..." defaultValue="" {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "Password is required!"
                                                    }, pattern: {
                                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                        message:
                                                            "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character",
                                                    }
                                                })} className={`${errors.password ? "border-danger" : ""}`} />
                                            {
                                                errors.password && <p className='text-danger small'>{errors.password.message}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="remember-forget my-2">
                                    <div className="checked-box1">
                                        <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked="" onClick={() => setShowPassword(!showPassword)} />
                                        <label htmlFor="saveinfo">
                                            <span></span>
                                            Show Password
                                        </label>
                                    </div>
                                    <div className="forget">
                                        <Link href="#">Forget password?</Link>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait..." onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>{isSubmitting ? <ButtonLoader /> : "Signup"}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="create-account text-center">
                                <p>Already have an account? <Link href="/login">Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;