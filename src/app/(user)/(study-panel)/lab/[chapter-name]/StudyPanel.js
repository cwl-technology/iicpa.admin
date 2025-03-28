
"use client"
import { useEffect, useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";




const StudyPanel = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [courseData, setCourseData] = useState();
    const [chapterData, setChapterData] = useState([]);
    const [chapterName, setChapterName] = useState()
    const [earningPoints, setEarningPoints] = useState(0)
    const session = useSession();
    const userId = session?.data?.user?.id

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const [activeId, setActiveId] = useState(0);
    const handleMenu = (id) => {
        setActiveId(id);
    }

    const [activeTab, setActiveTab] = useState(0);
    const [subTopicData, setSubTopicData] = useState()
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const chapterId = searchParams.get("chapterId")
    const chapter = searchParams.get("chapterName")
    const topicId = searchParams.get("topicId")



    const getCourseData = async () => {
        try {
            const res = await axios.post("/api/courses/getPurchasedCourseDataBySlug", {
                userId: userId,
                courseId: id
            });
            if (res.data.status == 1) {
                setCourseData(res.data.data.courseData);
                setChapterData(res.data.data.chapterData);
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handleSubTopicsData = async (courseId, chapterId, topicId, chapterName) => {
        try {
            const res = await axios.post("/api/courses/getPurchasedSubTopicsData", { courseId, topicId, chapterId })
            if (res.data.status == 1) {
                setActiveTab(topicId);
                setSubTopicData(res.data.data);
                setChapterName(chapterName)
                handleMenu(chapterId)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleAnswerSubmit = async (number, quizId, quizPoints) => {
        try {
            console.log()
            const res = await axios.post("/api/quiz/submitQuiz", {
                number: number,
                quizId: quizId,
                userId: userId,
                quizPoints: quizPoints
            });
            if (res.data.status == 1) {
                handleSubTopicsData(id, chapterId, topicId, chapter)
                getEarningPoints();
                if (res.data.quizStatus == 1) {
                    toast.success("Correct Answer.")
                } else {
                    toast.error("Incorrect Answer!")
                }
            }

        } catch (err) {
            console.log(err);
        }
    }

    const getEarningPoints = async () => {
        try {
            const res = await axios.post("/api/user/getEarningPoints", { userId: userId });
            if (res.data.status == 1) {
                setEarningPoints(res.data.earningPoints);
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        if (id && chapterId && topicId && chapter) {
            handleSubTopicsData(id, chapterId, topicId, chapter)
        }
    }, [id, chapterId, topicId, chapter])

    useEffect(() => {
        if (id && userId) {
            getCourseData();
        }
    }, [id, userId])

    useEffect(() => {
        if (userId) {
            getEarningPoints();
        }
    }, [userId])

    console.log(subTopicData)

    return (
        <>
            <div className={`${sidebarOpen ? "sidebar-is-expanded" : "sidebar-is-reduced"}`}>

                <header className="l-header">
                    <div className="l-header__inner clearfix">
                        <div className="c-header-icon js-hamburger" onClick={toggleSidebar}>
                            <div className="hamburger-toggle"><span className="bar-top"></span><span className="bar-mid"></span><span className="bar-bot"></span></div>
                        </div>
                        {/* <div className="c-header-icon">
                            <i className="bi bi-arrow-counterclockwise"></i>
                        </div> */}
                        <div className="chapter-name">
                            <h4>{courseData?.courseName}</h4>
                        </div>
                        
                        <div className="header-icons-group c-header-icon">
                            <i className="bi bi-coin"></i><span>{earningPoints}</span>
                        </div>
                    </div>
                </header>

                <div className="l-sidebar">
                    <div className="logo">
                        <div className={`logo-mini ${sidebarOpen ? "d-none" : ""}`}>
                            <span className="light-logo"><img src="/assets/images/iicpa/logo-1-white.webp" alt="logo" /></span>
                        </div>
                        <div className={`logo-lg ${sidebarOpen ? "" : "d-none"}`} >
                            <span className="light-logo"><img src="/assets/images/iicpa/logo-2-white.webp" alt="logo" /></span>
                        </div>
                    </div>

                    <div className="l-sidebar__content">
                        <nav className="c-menu js-menu">
                            <ul>
                                {
                                    chapterData?.map((ele, ind) =>
                                        <li className="menu-list" key={ind}>
                                            <a href="#" onClick={() => handleMenu(ele._id)}>
                                                <i className="bi bi-arrow-right"></i>
                                                <span>{ele?.chapterName}</span>
                                            </a>
                                            <ul className={`u-list ${activeId === ele._id ? "" : "d-none"}`}>
                                                {
                                                    ele.topics?.map((e, i) =>
                                                        <li onClick={() => handleSubTopicsData(courseData?._id, ele._id, e._id, ele.chapterName, i)} className={`c-menu__item ${activeTab == e._id ? ' is-active' : ''}`} data-toggle="tooltip" title="Flights" key={i}>
                                                            <div className="c-menu__item__inner"><i className="bi bi-dot"></i>
                                                                <div className="c-menu-item__title"><span>{e.topicName}</span></div>
                                                            </div>
                                                        </li>)
                                                }


                                            </ul>
                                        </li>)
                                }

                            </ul>
                        </nav>
                    </div>
                </div>

                <main className="l-main">

                    <div className="content-wrapper content-wrapper--with-bg">
                        <h1 className="page-title">{chapterName}</h1>
                        <div className={`page-content active-tab`} >
                            {
                                subTopicData?.map((element, index) =>
                                    <div key={index}>
                                        {
                                            (element.subTopicDescription && element.subTopicDescription != "undefined") &&
                                            <h1 className="page-title">{element?.subTopicName}</h1>
                                        }

                                        {/* Video  */}
                                        {element?.subTopicVideo &&
                                            <div className="video-section text-center my-2 mb-4">
                                                <video controls>
                                                    <source src={`/uploads/${element?.subTopicVideo}`} type="video/mp4" />
                                                    <source src={`/uploads/${element?.subTopicVideo}`} type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>}

                                        {/* Description  */}
                                        {
                                            (element.subTopicDescription && element.subTopicDescription != "undefined")
                                            && <div dangerouslySetInnerHTML={{ __html: element.subTopicDescription || "" }}></div>
                                        }



                                        {/* Image  */}
                                        {
                                            element?.subTopicImage &&
                                            <div className="content-img text-center">
                                                <img src={`/uploads/${element?.subTopicImage}`} alt="" />
                                            </div>
                                        }


                                        {/* Quiz  */}
                                        {
                                            element?.quizes?.length > 0 ?

                                                element?.quizes?.map((ele, ind) => {
                                                    if (ele.submittedAnswer) {
                                                        return (
                                                            <div className={`card my-4 ${ele.submittedAnswer == ele.correctAnswer ? "border-success" : "border-danger"} pe-none`} key={ind}>
                                                                <div className="card-body">
                                                                    <div className="card-title">
                                                                        <h6>Q. {ele.question}</h6>
                                                                        <div className="select-option mt-3">
                                                                            {
                                                                                [1, 2, 3, 4].map((e, i) => {
                                                                                    if (ele[`answer${e}`]) {
                                                                                        return (
                                                                                            <div className="form-check mb-2" key={i}>
                                                                                                <input
                                                                                                    className="form-check-input"
                                                                                                    type="radio"
                                                                                                    name="flexRadioDefault"
                                                                                                    id={`answer${i}_${ind}`}
                                                                                                    onClick={() => handleAnswerSubmit(1, ele._id)}
                                                                                                />
                                                                                                <label
                                                                                                    className={`form-check-label ${ele.correctAnswer === `answer${e}`
                                                                                                        ? "text-success"
                                                                                                        : ele.submittedAnswer == `answer${e}`
                                                                                                            ? ele.correctAnswer != `answer${e}` ? "text-danger" : ""
                                                                                                            : ""
                                                                                                        }`}
                                                                                                    htmlFor={`answer${i} _${ind}`}
                                                                                                >
                                                                                                    {ele[`answer${e}`]}
                                                                                                </label>
                                                                                            </div>
                                                                                        );
                                                                                    }
                                                                                    return null; // Ensures map() doesn't return undefined
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                    if (!ele.submittedAnswer) {
                                                        return (
                                                            <div className="card my-4" key={ind}>
                                                                <div className="card-body">
                                                                    <div className="card-title">
                                                                        <h6>Q. {ele.question}</h6>
                                                                        <div className="select-option mt-3">
                                                                            {
                                                                                [1, 2, 3, 4].map((e, i) => {
                                                                                    if (ele[`answer${e}`]) {
                                                                                        return (
                                                                                            <div className="form-check mb-2" key={i}>
                                                                                                <input
                                                                                                    className="form-check-input"
                                                                                                    type="radio"
                                                                                                    name="flexRadioDefault"
                                                                                                    id={`answer${i}_${ind}`}
                                                                                                    onClick={() => handleAnswerSubmit(e, ele._id, ele.quizPoints)}
                                                                                                />
                                                                                                <label
                                                                                                    className={`form-check-label`}
                                                                                                    htmlFor={`answer${i} _${ind}`}
                                                                                                >
                                                                                                    {ele[`answer${e}`]}
                                                                                                </label>
                                                                                            </div>
                                                                                        );
                                                                                    }
                                                                                    return null; // Ensures map() doesn't return undefined
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                }) : null
                                        }

                                        {(element.subTopicDescription && element.subTopicDescription != "undefined") &&
                                            <hr className="my-4" />
                                        }

                                    </div>
                                )
                            }
                        </div>


                        <a href="#" type="button" className="btn btn-primary">Next</a>
                    </div >
                </main >

            </div >
        </>
    )
}

export default StudyPanel