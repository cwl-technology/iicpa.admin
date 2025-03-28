import React, { Suspense } from 'react'
import TeacherEdit from './TeacherEdit'

const page = () => {
    return (
        <Suspense>
            <TeacherEdit />
        </Suspense>
    )
}

export default page