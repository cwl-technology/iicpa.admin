import React, { Suspense } from 'react'
import TeamEdit from './TeamEdit'

const page = () => {
    return (
        <Suspense>
            <TeamEdit />
        </Suspense>
    )
}

export default page