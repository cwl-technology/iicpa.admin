"use client"

import BreadCrumb from '@/_component/main/BreadCrumb'
import { CartContext } from '@/_context/CartContext';
import CurrencyFormatter from '@/_helper/frontend/CurrencyFormatter';
import DateFormatter from '@/_helper/frontend/DateFormatter';
import TimeFormatter from '@/_helper/frontend/TimeFormatter';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {

    const [liveSessionData, setLiveSesssionData] = useState();
    const { setCartNumber } = useContext(CartContext);
    const [cartData, setCartData] = useState();
    const [addedItem, setAddedItem] = useState([]);
    const session = useSession();
    const id = session?.data?.user?.id;

    const getLiveSessionData = async () => {
        try {
            const res = await axios.get("/api/livesessions/getAllActiveLiveSessions");
            if (res.data.status == 1) {
                setLiveSesssionData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleAddToCart = async (e, liveSessionId) => {
        try {
            e.preventDefault();
            const res = await axios.post("/api/cart/addToCart", {
                userId: id,
                itemId: liveSessionId,
                type: 0
            })
            if (res.data.status == 1) {
                toast.success(res.data.message);
                setCartNumber(res.data.cartNumber)
                setAddedItem([...addedItem, liveSessionId]);

            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }


    const itemAlreadyInCart = (itemId) => {
        const isCartExist = cartData?.find((e) => e._id == itemId);
        return isCartExist ? true : false
    }

    const getCartData = async () => {
        try {
            const res = await axios.post("/api/cart/getCartData", {
                userId: id
            })
            if (res.data.status == 1) {
                setCartData(res.data.sessions);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getCartData();
        }
    }, [id])

    useEffect(() => {
        getLiveSessionData();
    }, [])



    return (
        <>
            <BreadCrumb title={"Live Session"} />

            <section className="cart-page">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="product-box">
                                <h2>Upcoming Live Session</h2>
                                <hr />
                                {
                                    liveSessionData
                                        ?.filter(ele => new Date() < new Date(ele.date)) // Filter before mapping
                                        .map((ele, ind) => (
                                            <div key={ind}>
                                                <div className='row live-img'>
                                                    <div className='col-4'>
                                                        <img alt="" src={`/uploads/${ele.image}`} className='mt-2' />
                                                    </div>
                                                    <div className='col-8'>
                                                        <div className='live-session'>
                                                            <div>
                                                                <p className="dashboad-badge-live dashboad-bold-font">
                                                                    <TimeFormatter time={ele.startTime} /> - <TimeFormatter time={ele.endTime} />
                                                                </p>
                                                                <span className="date mb-2"><DateFormatter date={ele.date} /></span>
                                                            </div>

                                                            <h4>{ele.courseName}</h4>
                                                            <p className='text-muted live-session-text'>{ele.description}</p>

                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <h4><CurrencyFormatter price={ele.price} /></h4>
                                                                <p className="text-success category-two__btn-box">
                                                                    {
                                                                        itemAlreadyInCart(ele._id) || addedItem.includes(ele._id) ? <a href="#" className="thm-btn-two pe-none opacity-50">
                                                                            <span>Added</span>
                                                                            <i className="bi bi-cart2"></i>
                                                                        </a> : <a href="#" className="thm-btn-two" onClick={(e) => handleAddToCart(e, ele._id)}>
                                                                            <span>Add to Cart</span>
                                                                            <i className="bi bi-cart2"></i>
                                                                        </a>
                                                                    }
                                                                </p>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        ))
                                }

                            </div>
                        </div>
                        <div className="col-xl-4 ps-5">
                            <div className="course-grid__discount course-grid__single"><div className="course-grid__discount-shape-bg" style={{ backgroundImage: "url(&quot;/assets/images/shapes/course-grid-discount-shape-bg.png&quot)" }}></div><h4 className="course-grid__discount-title">Upgrade Your Skills</h4><p className="course-grid__discount-text">Learn Anytime, Anywhere – Live Classes &  <br /> Expert-Led Courses</p><div className="course-grid__discount-img"><img alt="" src="/assets/images/resources/course-grid-discount-img-1.png" /></div><div className="course-grid__discount-coupon"><p>Boost Your</p><h5>#Career</h5></div></div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page