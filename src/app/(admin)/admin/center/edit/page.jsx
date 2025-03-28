import React, { Suspense } from 'react'
import CenterEdit from './CenterEdit'

const page = () => {
    return (
        <Suspense>
            <CenterEdit />
        </Suspense>
    )
}

export default page