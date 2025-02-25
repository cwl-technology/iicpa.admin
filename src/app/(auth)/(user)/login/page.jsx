"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import ButtonLoader from '@/_component/global/ButtonLoader'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


const Page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/api/user/login", data);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                await signIn("credentials", { id: res.data.data.id, name: res.data.data.name, role: res.data.data.role, redirect: false })
                router.push("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">

                        <form id="login-one__form" name="Login-one_form" action="#" method="post">
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
                                            <input type={showPassword ? "text" : "password"} name="form_password" id="formPassword"
                                                placeholder="Password..."
                                                {...register("password", {
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
                                <div className="remember-forget">
                                    <div className="remember-forget my-2">
                                        <div className="checked-box1">
                                            <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked="" onClick={() => setShowPassword(!showPassword)} />
                                            <label htmlFor="saveinfo">
                                                <span></span>
                                                Show Password
                                            </label>
                                        </div>

                                    </div>
                                    <div className="forget">
                                        <Link href="#">Forget password?</Link>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait..." onClick={handleSubmit(onSubmit)} disabled={isSubmitting} >{isSubmitting ? <ButtonLoader /> : "Login"}
                                        </button>
                                    </div>
                                </div>

                                <div className="create-account text-center">
                                    <p>Not registered yet? <Link href='/sign-up'>Create an Account</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Page