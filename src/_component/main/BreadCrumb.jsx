import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({title}) => {
    return (
        <section className="page-header job-page-header">
            <div className="container">
                <div className="page-header__inner jobs-bread-crumb">
                    <h2>{title}</h2>
                    <div className="thm-breadcrumb__box">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li><span>//</span></li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb