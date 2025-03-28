import React, { Suspense } from 'react'
import Riply from './Reply'

const page = () => {
    return (
        <Suspense>
            <Riply />
        </Suspense>
    )
}

export default page