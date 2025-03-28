import React, { Suspense } from 'react'
import Reply from './Reply'

const page = () => {
    return (
        <Suspense>
            <Reply />
        </Suspense>
    )
}

export default page