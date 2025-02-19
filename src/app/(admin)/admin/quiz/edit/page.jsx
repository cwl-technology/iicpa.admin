import React, { Suspense } from 'react'
import QuizEdit from './QuizEdit'

const page = () => {
    return (
        <Suspense>
            <QuizEdit />
        </Suspense>
    )
}

export default page