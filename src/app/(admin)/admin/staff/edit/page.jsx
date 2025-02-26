import React, { Suspense } from 'react'
import StaffEdit from './StaffEdit'

const page = () => {
    return (
        <Suspense>
            <StaffEdit />
        </Suspense>
    )
}

export default page