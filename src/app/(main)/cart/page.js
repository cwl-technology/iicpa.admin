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
    const [cartData, setCartData] = useState();
    const [amount, setAmount] = useState();
    const { setCartNumber } = useContext(CartContext);
    const [placingOrder, setPlacingOrder] = useState(false);

    const getCartData = async () => {
        try {
            const res = await axios.post("/api/cart/getCartData", { userId: userId });
            if (res.data.status == 1) {
                setAmount(res.data.totalAmount);
                setCartData(res.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    const handleDeleteItemFromCart = async (courseId) => {
        try {
            const res = await axios.post("/api/cart/deleteFromCart", {
                courseId: courseId,
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
                                            <th>Course Details</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartData?.map((ele, ind) =>
                                                <tr key={ind}>
                                                    <td>
                                                        <div className="product-box">
                                                            <a href='#' className='d-flex gap-3 align-items-center'>
                                                                <img src={`/uploads/${ele.course?.courseImage}`} alt='' />
                                                                <div>
                                                                    <h3>{ele.course?.courseName}</h3>
                                                                    <p>15 Chapters</p>
                                                                    <p>45 Assgingments</p>
                                                                    <p className='text-success'><em>and more.</em></p>
                                                                </div>
                                                            </a>
                                                        </div>

                                                    </td>
                                                    <td className='text-center'>
                                                        <div className='d-flex flex-column'>
                                                            <h3 className="course-details__doller">{<CurrencyFormatter price={ele.course?.priceAfterDiscount} />}</h3>
                                                            <del>{<CurrencyFormatter price={ele.course?.actualPrice} />}</del>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="cross-icon d-flex justify-content-center cursor-pointer " onClick={() => handleDeleteItemFromCart(ele?.course?._id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-xl-4 ps-5">
                            <div className="course-grid__discount course-grid__single"><div className="course-grid__discount-shape-bg" style={{ backgroundImage: "url(&quot;/assets/images/shapes/course-grid-discount-shape-bg.png&quot)" }}></div><h4 className="course-grid__discount-title">20% Discount</h4><p className="course-grid__discount-text">is simply dummy text of the printing <br /> and typesetting industry</p><div className="course-grid__discount-img"><img alt="" src="/assets/images/resources/course-grid-discount-img-1.png" /></div><div className="course-grid__discount-coupon"><p>Use Coupon</p><h5>#FuStudy56</h5></div></div>
                            <div className="cart-page__buttons-2 mx-0 mt-5">
                                <div className="d-flex justify-content-between px-2 mb-2">
                                    <h4 className=''>Total Amount:</h4>
                                    <h4 className=''><CurrencyFormatter price={amount} /></h4>
                                </div>
                                <a href="#" className={`thm-btn w-100 mx-0 ${placingOrder && "pe-none opacity-50" }`} onClick={handleOrderPlaced}>
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