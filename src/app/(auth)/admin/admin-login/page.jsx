"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter();

  const onLogin = () => {
    router.push("/");
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
                    <p className="mb-0 text-fade">Sign in to continue to IICPA.</p>
                  </div>
                  <div className="p-40">
                    <form action="https://edulearn-lms-admin-template.multipurposethemes.com/template/vertical/main/index.html" method="post">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <span className="input-group-text bg-transparent"><i className="text-fade ti-user"></i></span>
                          <input type="text" className="form-control ps-15 bg-transparent" placeholder="Username" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <span className="input-group-text  bg-transparent"><i className="text-fade ti-lock"></i></span>
                          <input type="password" className="form-control ps-15 bg-transparent" placeholder="Password" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="checkbox">
                            <label htmlFor="basic_checkbox_1">Remember Me</label>
                            <input type="checkbox" id="basic_checkbox_1" />
                          </div>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-6">
                          <div className="fog-pwd text-end">
                            <a href="#" className="text-primary fw-500 hover-primary"><i className="mr-2 fa-solid fa-lock"></i>Forgot password?</a><br />
                          </div>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-primary w-p100 mt-10" onClick={onLogin}>SIGN IN</button>
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0 text-fade">Don't have an account? <a href="auth_register.html" className="text-primary ms-5">Sign Up</a></p>
                    </div>

                    <div className="text-center">
                      <p className="mt-20 text-fade">- Sign With -</p>
                      <p className="gap-items-2 mb-0">
                        <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook-light" href="#"><i className="fa fa-facebook"></i></a>
                        <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter-light" href="#"><i className="fa fa-twitter"></i></a>
                        <a className="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram-light" href="#"><i className="fa fa-instagram"></i></a>
                      </p>
                    </div>
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