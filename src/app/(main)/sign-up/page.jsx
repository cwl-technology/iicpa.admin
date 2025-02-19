"use client"

import Link from 'next/link'
import React from 'react'

export const page = () => {
    return (
        <>

            <section class="page-header">
                <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/shapes/page-header-bg-shape.png)" }}>
                </div>
                <div class="page-header__shape-4">
                    <img src="/assets/images/shapes/page-header-shape-4.png" alt="" />
                </div>
                <div class="page-header__shape-5">
                    <img src="/assets/images/shapes/page-header-shape-5.png" alt="" />
                </div>
                <div class="page-header__social">
                    <a href="#">Facebook</a>
                    <span>//</span>
                    <a href="#">Instagram</a>
                    <span>//</span>
                    <a href="#">LinkedIn</a>
                    <span>//</span>
                    <a href="#">Twitter</a>
                </div>
                <div class="container">
                    <div class="page-header__inner">
                        <div class="page-header__img">
                            <img src="/assets/images/resources/page-header-img-1.png" alt="" />
                            <div class="page-header__shape-1">
                                <img src="/assets/images/shapes/page-header-shape-1.png" alt="" />
                            </div>
                            <div class="page-header__shape-2">
                                <img src="/assets/images/shapes/page-header-shape-2.png" alt="" />
                            </div>
                            <div class="page-header__shape-3">
                                <img src="/assets/images/shapes/page-header-shape-3.png" alt="" />
                            </div>
                        </div>
                        <h2>Sign Up</h2>
                        <div class="thm-breadcrumb__box">
                            <ul class="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span>//</span></li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sign-up-one">
                <div class="container">
                    <div class="sign-up-one__form">
                        <div class="inner-title text-center">
                            <h2>Sing Up</h2>
                        </div>
                        <form id="sign-up-one__form" name="sign-up-one_form" action="#" method="post">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <div class="input-box">
                                            <input type="text" name="form_name" id="formName" placeholder="Name..."
                                                required="" defaultValue="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <div class="input-box">
                                            <input type="email" name="form_email" id="formEmail" placeholder="Email..."
                                                required="" defaultValue="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <div class="input-box">
                                            <input type="text" name="form_phone" id="formPhone" placeholder="Phone..."
                                                required="" defaultValue="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <div class="input-box">
                                            <input type="text" name="form_password" id="formPassword"
                                                placeholder="Password..." required="" defaultValue="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <button class="thm-btn" type="submit" data-loading-text="Please wait...">Sing
                                            Up</button>
                                    </div>
                                </div>
                            </div>
                            <div class="google-facebook">
                                <Link href="https://www.google.com">
                                    <div class="icon">
                                        <img src="/assets/images/icon/icon-google-2.png" alt="Google" />
                                    </div>
                                    Continue with Google
                                </Link>
                                <Link href="https://www.facebook.com">
                                    <div class="icon">
                                        <img src="/assets/images/icon/icon-facebook.png" alt="Facebook" />
                                    </div>
                                    Continue with Facebook
                                </Link>
                            </div>
                            <div class="create-account text-center">
                                <p>Already have an account? <Link href="/login">Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
