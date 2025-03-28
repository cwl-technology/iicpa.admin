"use client"



import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

const data1 = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 7000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 4398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 4000,
    pv: 7000,
    amt: 2400,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    uv: 3000,
    pv: 4398,
    amt: 2210,
  },


];

const data2 = [
  {
    name: 'Page B',
    pv: 2398,
  },
  {
    name: 'Page C',
    pv: 4800,
  },
  {
    name: 'Page D',
    pv: 1908,
  },
  {
    name: 'Page E',
    pv: 4800,
  },
  {
    name: 'Page F',
    pv: 3800,
  },
  {
    name: 'Page G',
    pv: 4300,
  },
];

const Home = () => {
  return (
    <>
     
      <div className="content-wrapper">
        <div className="container-full">
          <section className="content">
            <div className="row">
              <div className="col-xl-8 col-12">
                <div className='d-flex justify-content-between'>
                  <h4>Sales Overview</h4>
                  <div className='dashboad-tabs'>
                    <button className='active text-muted'>Last Month</button>
                    <button className='text-muted'>Last Year</button>
                  </div>
                </div>
                <div className='row' style={{ height: "85%" }}>
                  <div className='col-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" style={{ width: "35px" }}>
                      <path strokeLinecap="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                      <path strokeLinecap="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    <h2 className='mb-0 dashboad-bolder-font'>$6,556.55</h2>
                    <span className='text-muted dashboad-bold-font'>this months</span>
                    <div style={{ height: "50%" }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data2}>
                          <Line type="monotone" dataKey="pv" stroke="rgb(14, 165, 233)" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <button className='text-muted download-report-btn px-auto'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                      </svg>Download Report</button>
                  </div>
                  <div className='col-9'>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={300}
                        data={data1}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                        barSize={7}
                        barGap={0}
                        barCategoryGap="10%"
                      >

                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" fill="rgb(76, 78, 231,0.85)" stroke="rgb(76, 78, 231)" radius={[10, 10, 10, 10]} />
                        <Bar dataKey="uv" fill="rgb(14, 165, 233,0.85)" stroke="rgb(14, 165, 233)" radius={[10, 10, 10, 10]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
              <div className="col-xl-4 col-12">
                <div className='row g-4'>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>$67.6k</h3>
                        <span className='text-muted'>Income</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>$12.6k</h3>
                        <span className='text-muted'>Completed</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>146</h3>
                        <span className='text-muted'>Pending</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>165</h3>
                        <span className='text-muted'>Dispatch</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>15k</h3>
                        <span className='text-muted'>Products</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='dashboad-six-card d-flex justify-content-between align-items-start'>
                      <div>
                        <h3 className='my-0 dashboad-bolder-font'>6.5k</h3>
                        <span className='text-muted'>Customers</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ width: "16px" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8 col-12'>
                <div className="dashboad-main-card">
                  <h6 className='m-4 pt-4 dashboad-bold-font'>Projects Status</h6>
                  <div className='row '>
                    <div className='col-4'>
                      <div className='p-4 left-border left-border-1'>
                        <h6 className='my-0 dashboad-bold-font'>Web Design</h6>
                        <span className='text-muted d-block mb-2'>Design Learn Management System</span>
                        <p className='dashboad-badge-1 dashboad-bold-font d-inline'>UI/UX Design</p>
                        <div className='my-4'>
                          <div className='d-flex align-items-end'>
                            <h3 className='my-0'>%55.</h3>
                            <span className='text-muted'>23</span>
                          </div>
                          <span className='text-muted'>June 08, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='p-4 left-border left-border-2'>
                        <h6 className='my-0 dashboad-bold-font'>Mobile App</h6>
                        <span className='text-muted d-block mb-2'>Ecommerce Application for All Devices</span>
                        <p className='dashboad-badge-2 dashboad-bold-font d-inline'>Ecommerce</p>

                        <div className='my-4'>
                          <div className='d-flex align-items-end'>
                            <h3 className='my-0'>%14.</h3>
                            <span className='text-muted'>63</span>
                          </div>
                          <span className='text-muted'>May 01, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='p-4 left-border left-border-3'>
                        <h6 className='my-0 dashboad-bold-font'>Design System</h6>
                        <span className='text-muted d-block mb-2'>Create LMS design system on figma</span>
                        <p className='dashboad-badge-3 dashboad-bold-font d-inline mb-3'>Figma</p>

                        <div className='my-4'>
                          <div className='d-flex align-items-end'>
                            <h3 className='my-0'>%85.</h3>
                            <span className='text-muted'>93</span>
                          </div>
                          <span className='text-muted'>September 16, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <h6 className='m-4 pt-4 dashboad-bold-font'>Customer Satisfaction</h6>
                <div className='px-4'>
                  <div className='d-flex align-items-end'>
                    <h3 className='my-0'>9.7</h3>
                    <span className='text-success'>+2.1%</span>
                  </div>
                  <span className='text-muted'>Performance score</span>
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='border border-primary border-4 rounded-circle' style={{ width: "15px", height: "15px", marginTop: "-12px" }}></div>
                            <p className='ms-2 dashboad-bold-font'>Exellent</p>
                          </div>
                        </td>
                        <td><p className='dashboad-bold-font'>1029</p></td>
                        <td><p className='text-muted'>42%</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='border border-success border-4 rounded-circle' style={{ width: "15px", height: "15px", marginTop: "-12px" }}></div>
                            <p className='ms-2 dashboad-bold-font'>Very Good</p>
                          </div>
                        </td>
                        <td><p className='dashboad-bold-font'>529</p></td>
                        <td><p className='text-muted'>12%</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='border border-info border-4 rounded-circle' style={{ width: "15px", height: "15px", marginTop: "-12px" }}></div>
                            <p className='ms-2 dashboad-bold-font'>Good</p>
                          </div>
                        </td>
                        <td><p className='dashboad-bold-font'>326</p></td>
                        <td><p className='text-muted'>57%</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='border border-warning border-4 rounded-circle' style={{ width: "15px", height: "15px", marginTop: "-12px" }}></div>
                            <p className='ms-2 dashboad-bold-font'>Poor</p>
                          </div>
                        </td>
                        <td><p className='dashboad-bold-font'>879</p></td>
                        <td><p className='text-muted'>82%</p></td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='border border-danger border-4 rounded-circle' style={{ width: "15px", height: "15px", marginTop: "-12px" }}></div>
                            <p className='ms-2 dashboad-bold-font'>Very poor</p>
                          </div>
                        </td>
                        <td><p className='dashboad-bold-font'>69</p></td>
                        <td><p className='text-muted'>32%</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12 top-courses-section p-4">
                <div className='row'>
                  <div className='col-xl-4 col-12'>
                    <div className=' d-flex flex-column justify-content-between h-100'>
                      <div>
                        <h4>Top Courses</h4>
                        <p className='text-muted'>The top sellers is calculated based on the sales of a product and undergoes hourly updations.</p>
                        <p className='text-muted'>Best-selling items are ranked according to their sales performance, with hourly updates ensuring accuracy.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-8 col-12'>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={3}
                      loop
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      speed={2000}
                      freeMode={true}
                      grabCursor={true}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="courses-two__single">
                          <div className="courses-two__img-box">
                            <div className="courses-two__img">
                              <img src="/assets/images/image.png" alt="" />
                            </div>
                          </div>
                          <div className="courses-two__content">
                            <div className="courses-two__doller-and-review">
                              <div className="courses-two__doller">
                                <p>$120.00</p>
                              </div>

                            </div>
                            <h3 className="courses-two__title">
                              <a href="#">Cooking Made Easy: Essential Skills for Everyday Meals</a></h3>
                            <div className="courses-two__btn-and-client-box">
                              <div className="courses-two__client-box">
                                <div className="courses-two__client-img">
                                  <img src="/assets/image/image.png" alt="" /></div>

                              </div>
                            </div>
                            <ul className="courses-two__meta list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-chart-simple"></span></div>
                                <p className='mb-0'>Advance</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="courses-two__single">
                          <div className="courses-two__img-box">
                            <div className="courses-two__img">
                              <img src="/assets/images/image.png" alt="" />
                            </div>
                          </div>
                          <div className="courses-two__content">
                            <div className="courses-two__doller-and-review">
                              <div className="courses-two__doller">
                                <p>$120.00</p>
                              </div>

                            </div>
                            <h3 className="courses-two__title">
                              <a href="#">Cooking Made Easy: Essential Skills for Everyday Meals</a></h3>
                            <div className="courses-two__btn-and-client-box">
                              <div className="courses-two__client-box">
                                <div className="courses-two__client-img">
                                  <img src="/assets/image/image.png" alt="" /></div>

                              </div>
                            </div>
                            <ul className="courses-two__meta list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-chart-simple"></span></div>
                                <p className='mb-0'>Advance</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="courses-two__single">
                          <div className="courses-two__img-box">
                            <div className="courses-two__img">
                              <img src="/assets/images/image.png" alt="" />
                            </div>
                          </div>
                          <div className="courses-two__content">
                            <div className="courses-two__doller-and-review">
                              <div className="courses-two__doller">
                                <p>$120.00</p>
                              </div>

                            </div>
                            <h3 className="courses-two__title">
                              <a href="#">Cooking Made Easy: Essential Skills for Everyday Meals</a></h3>
                            <div className="courses-two__btn-and-client-box">
                              <div className="courses-two__client-box">
                                <div className="courses-two__client-img">
                                  <img src="/assets/image/image.png" alt="" /></div>

                              </div>
                            </div>
                            <ul className="courses-two__meta list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-chart-simple"></span></div>
                                <p className='mb-0'>Advance</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="courses-two__single">
                          <div className="courses-two__img-box">
                            <div className="courses-two__img">
                              <img src="/assets/images/image.png" alt="" />
                            </div>
                          </div>
                          <div className="courses-two__content">
                            <div className="courses-two__doller-and-review">
                              <div className="courses-two__doller">
                                <p>$120.00</p>
                              </div>

                            </div>
                            <h3 className="courses-two__title">
                              <a href="#">Cooking Made Easy: Essential Skills for Everyday Meals</a></h3>
                            <div className="courses-two__btn-and-client-box">
                              <div className="courses-two__client-box">
                                <div className="courses-two__client-img">
                                  <img src="/assets/image/image.png" alt="" /></div>

                              </div>
                            </div>
                            <ul className="courses-two__meta list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-chart-simple"></span></div>
                                <p className='mb-0'>Advance</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>

                    </Swiper>


                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>




    </>
  )
}

export default Home