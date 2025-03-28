"use client"

import ButtonLoader from '@/_component/global/ButtonLoader';
import BreadCrumb from '@/_component/main/BreadCrumb'
import { CartContext } from '@/_context/CartContext';
import CurrencyFormatter from '@/_helper/frontend/CurrencyFormatter';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
    const session = useSession();
    const userId = session?.data?.user?.id
    const [courseData, setCourseData] = useState();
    const [liveSessionData, setLiveSessionData] = useState();
    const [amount, setAmount] = useState();
    const { setCartNumber } = useContext(CartContext);
    const [placingOrder, setPlacingOrder] = useState(false);

    const getCartData = async () => {
        try {
            const res = await axios.post("/api/cart/getCartData", { userId: userId })
            if (res.data.status == 1) {
                setAmount(res.data.totalAmount);
                setCourseData(res.data.courses);
                setLiveSessionData(res.data.sessions);
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }


    const handleDeleteItemFromCart = async (itemId) => {
        try {
            const res = await axios.post("/api/cart/deleteFromCart", {
                itemId: itemId,
                userId: userId
            });
            if (res.data.status == 1) {
                getCartData();
                setCartNumber(res.data.cartNumber);
                toast.success(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCartData();
    }, [userId]);


    const handleOrderPlaced = async (e) => {
        try {
            e.preventDefault();
            setPlacingOrder(true);
            const res = await axios.post("/api/order/placeOrder", {
                userId: userId,
                totalAmount: amount,
                invoiceDate: "Date",
                transactionId: "ID"
            })
            setPlacingOrder(false);
            if (res.data.status == 1) {
                toast.success(res.data.message);
                getCartData();
                setCartNumber(0);

            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <BreadCrumb title="Cart" />

            <section className="cart-page">
                <div className="container">
                    <div className='row'>
                        <div className='col-8'>
                            <div className="table-responsive">
                                <table className="table cart-table">
                                    <thead>
                                        <tr>
                                            <th>Item Details</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Remove</th>
                                        </tr>
                                    </thead>
                                    {
                                        courseData?.length == 0 && liveSessionData?.length == 0  ?
                                        <tbody>
                                            <tr>
                                                <td>There is not any item in the cart yet!</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody> : <tbody>
                                        {
                                            courseData?.map((ele, ind) =>
                                                <tr key={ind}>
                                                    <td>
                                                        <div className="product-box">
                                                            <a href='#' className='d-flex gap-3 align-items-center'>
                                                                <img src={`/uploads/${ele?.courseImage}`} alt='' />
                                                                <div>
                                                                    <h3>{ele?.courseName}</h3>
                                                                    {/* <p>Item type -</p> */}
                                                                    {/* <p>45 Assgingments</p> */}
                                                                    <p className='text-success'><em>Course</em></p>
                                                                </div>
                                                            </a>
                                                        </div>

                                                    </td>
                                                    <td className='text-center'>
                                                        <div className='d-flex flex-column'>
                                                            <h2 className="course-details__doller">{<CurrencyFormatter price={ele.priceAfterDiscount} />}</h2>
                                                            {/* <del>{<CurrencyFormatter price={ele?.actualPrice} />}</del> */}
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="cross-icon d-flex justify-content-center cursor-pointer " onClick={() => handleDeleteItemFromCart(ele._id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        }
                                        {
                                            liveSessionData?.map((ele, ind) =>
                                                <tr key={ind}>
                                                    <td>
                                                        <div className="product-box">
                                                            <a href='#' className='d-flex gap-3 align-items-center'>
                                                                <img src={`/uploads/${ele?.image}`} alt='' />
                                                                <div>
                                                                    <h3>{ele?.courseName}</h3>
                                                                    {/* <p>15 Chapters</p>
                                                                    <p>45 Assgingments</p> */}
                                                                    <p className='text-success'><em>Live Session</em></p>
                                                                </div>
                                                            </a>
                                                        </div>

                                                    </td>
                                                    <td className='text-center'>
                                                        <div className='d-flex flex-column'>
                                                            <h2 className="course-details__doller">{<CurrencyFormatter price={ele.price} />}</h2>
                                                            {/* <del>{<CurrencyFormatter price={ele?.actualPrice} />}</del> */}
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="cross-icon d-flex justify-content-center cursor-pointer " onClick={() => handleDeleteItemFromCart(ele._id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                    }
                                    
                                </table>
                            </div>

                        </div>

                        <div className="col-xl-4 ps-5">
                            <div className="course-grid__discount course-grid__single"><div className="course-grid__discount-shape-bg" style={{ backgroundImage: "url(&quot;/assets/images/shapes/course-grid-discount-shape-bg.png&quot)" }}></div><h4 className="course-grid__discount-title">Upgrade Your Skills</h4><p className="course-grid__discount-text">Learn Anytime, Anywhere – Live Classes &  <br /> Expert-Led Courses</p><div className="course-grid__discount-img"><img alt="" src="/assets/images/resources/course-grid-discount-img-1.png" /></div><div className="course-grid__discount-coupon"><p>Boost Your</p><h5>#Career</h5></div></div>
                            <div className="cart-page__buttons-2 mx-0 mt-5">
                                <div className="d-flex justify-content-between px-2 mb-2">
                                    <h4 className=''>Total Amount:</h4>
                                    <h4 className=''><CurrencyFormatter price={amount} /></h4>
                                </div>
                                <a href="#" className={`thm-btn w-100 mx-0 ${placingOrder && "pe-none opacity-50"}`} onClick={handleOrderPlaced}>
                                    {placingOrder ? <ButtonLoader /> : "Checkout"}
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default page