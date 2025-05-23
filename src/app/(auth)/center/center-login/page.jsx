"use client"

import ButtonLoader from '@/_component/global/ButtonLoader'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const page = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/center/login", data);
      if (res.data.status == 1) {
        await signIn("credentials", { id: res.data.data.id, name: res.data.data.name, role: res.data.data.role, roleId: res.data.data.roleId, userType: res.data.data.userType, redirect: false })

        router.push("/center");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">

          <div className="col-12">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <span className="light-logo mt-4"><img src="\assets\images\iicpa\logo-2 new.webp" alt="logo" width={"230px"} /></span>
                    {/* <h5 className="py-2 pt-4 text-fade">Sign in to continue to IICPA Teacher</h5> */}
                  </div>
                  <div className="p-40 pt-40">
                    <form action="https://edulearn-lms-admin-template.multipurposethemes.com/template/vertical/main/index.html" method="post">
                      <div className="form-group">
                        <div className={`${errors.email ? "input-group mb-0" : "input-group mb-3"}`}>
                          <span className={`${errors.email ? "input-group-text  bg-transparent border-danger" : "input-group-text  bg-transparent"}`}><i className="text-fade ti-user"></i></span>
                          <input type="text" placeholder="Enter the email" {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required!"
                            },
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email!"
                            }
                          })} className={`${errors.email ? "border-danger form-control ps-15 bg-transparent " : "form-control ps-15 bg-transparent"}`} />
                        </div>
                        {
                          errors.email && <p className='text-danger small'>{errors.email.message}</p>
                        }
                      </div>
                      <div className="form-group">
                        <div className={`${errors.password ? "input-group mb-0" : "input-group mb-3"}`}>
                          <span className={`${errors.password ? "input-group-text  bg-transparent border-danger" : "input-group-text  bg-transparent"}`}><i className="text-fade ti-lock"></i></span>
                          <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", {
                            required: {
                              value: true,
                              message: "Password is required!"
                            }
                          })} className={`${errors.password ? "border-danger form-control ps-15 bg-transparent" : "form-control ps-15 bg-transparent"}`} />
                        </div>
                        {
                          errors.password && <p className='text-danger small'>{errors.password.message}</p>
                        }
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="checked-box1">
                            <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked="" onClick={() => setShowPassword(!showPassword)} className='show-password-checkbox' />
                            <label htmlFor="saveinfo">
                              <span></span>
                              Show Password
                            </label>
                          </div>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-6">
                          {/* <div className="fog-pwd text-end">
                            <a href="#" className="text-primary fw-500 hover-primary"><i className="mr-2 fa-solid fa-lock"></i>Forgot password?</a><br />
                          </div> */}
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-12 text-center mt-4">
                          <button type="submit" className="btn btn-primary w-p100 mt-10" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>{isSubmitting ? <ButtonLoader /> : "SIGN IN"}</button>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page