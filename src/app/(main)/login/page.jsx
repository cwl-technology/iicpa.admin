import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <>
    <section className="page-header">
                <div className="page-header__bg" style={{backgroundImage: "url(/assets/images/shapes/page-header-bg-shape.png)"}}>
                </div>
                <div className="page-header__shape-4">
                    <img src="/assets/images/shapes/page-header-shape-4.png" alt=""/>
                </div>
                <div className="page-header__shape-5">
                    <img src="/assets/images/shapes/page-header-shape-5.png" alt=""/>
                </div>
                <div className="page-header__social">
                    <a href="#">Facebook</a>
                    <span>//</span>
                    <a href="#">Instagram</a>
                    <span>//</span>
                    <a href="#">LinkedIn</a>
                    <span>//</span>
                    <a href="#">Twitter</a>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img">
                            <img src="/assets/images/resources/page-header-img-1.png" alt=""/>
                            <div className="page-header__shape-1">
                                <img src="/assets/images/shapes/page-header-shape-1.png" alt=""/>
                            </div>
                            <div className="page-header__shape-2">
                                <img src="/assets/images/shapes/page-header-shape-2.png" alt=""/>
                            </div>
                            <div className="page-header__shape-3">
                                <img src="/assets/images/shapes/page-header-shape-3.png" alt=""/>
                            </div>
                        </div>
                        <h2>Login</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><span>//</span></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login-one">
        <div className="container">
            <div className="login-one__form">
                <div className="inner-title text-center">
                    <h2>Login Here</h2>
                </div>
                <form id="login-one__form" name="Login-one_form" action="#" method="post">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="form-group">
                                <div className="input-box">
                                    <input type="email" name="form_email" id="formEmail" placeholder="Email..."
                                        required="" defaultValue=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="form-group">
                                <div className="input-box">
                                    <input type="text" name="form_password" id="formPassword"
                                        placeholder="Password..." required="" defaultValue=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="form-group">
                                <button className="thm-btn" type="submit" data-loading-text="Please wait...">Login
                                    Here</button>
                            </div>
                        </div>
                        <div className="remember-forget">
                            <div className="checked-box1">
                                <input type="checkbox" name="saveMyInfo" id="saveinfo" defaultChecked=""/>
                                <label for="saveinfo">
                                    <span></span>
                                    Remember me
                                </label>
                            </div>
                            <div className="forget">
                                <Link href="#">Forget password?</Link>
                            </div>
                        </div>

                        <div className="create-account text-center">
                            <p>Not registered yet? <Link href='/sign-up'>Create an Account</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Page