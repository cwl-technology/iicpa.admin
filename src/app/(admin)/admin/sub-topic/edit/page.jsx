import React, { Suspense } from 'react'
import SubTopicEdit from './SubTopicEdit'

const page = () => {
    return (
        <Suspense>
            <SubTopicEdit />
        </Suspense>
    )
}

export default page